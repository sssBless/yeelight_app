import net from 'net';
import { config } from 'dotenv';

config();

const YEELIGHT_IP = process.env.BULB_IP || '192.168.0.106';
const YEELIGHT_PORT = process.env.BULB_PORT || 55443;

export const socket = new net.Socket();

export function sendCommand(method, params) {
  const command =
    JSON.stringify({
      id: 1,
      method,
      params,
    }) + '\r\n';

  socket.write(command);
}

// Функция для получения данных о лампочке
export function getBulbData() {
  return new Promise((resolve, reject) => {
    // Отправляем команду на лампочку для получения всех свойств
    sendCommand('get_prop', ['power', 'bright', 'ct', 'rgb', 'name']);

    // Обрабатываем ответы от лампочки Yeelight
    socket.on('data', (data) => {
      try {
        // Парсим ответ от устройства Yeelight
        const bulbData = JSON.parse(data);
        resolve(bulbData);
      } catch (error) {
        reject(error);
      }
    });

    // Обрабатываем ошибки сокета
    socket.on('error', (error) => {
      reject(error);
    });
  });
}

socket.connect(YEELIGHT_PORT, YEELIGHT_IP);

socket.on('data', (data) => {
  console.log('Received: ' + data);
});

socket.on('error', (error) => {
  console.error('Error: ' + error.message);
});
