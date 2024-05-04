import { Router } from 'express';
import { sendCommand, getBulbData } from '../yeelight.js';

export const router = Router();

router.post('/turnOn', (req, res) => {
  try {
    sendCommand('set_power', ['on', 'smooth', 500]);
    res.json({ status: 200, message: 'Bulb turned on' });
  } catch (error) {
    res.json({ status: 500, message: `Error turning on the bulb: ${error}` });
  }
});

router.post('/turnOff', (req, res) => {
  try {
    sendCommand('set_power', ['off', 'smooth', 500]);
    res.json({ status: 200, message: 'Bulb turned off' });
  } catch (error) {
    res.json({
      status: 500,
      message: `Error turning off the bulb: : ${error}`,
    });
  }
});

router.post('/setRGBColor', (req, res) => {
  try {
    const { red, green, blue } = req.body;

    const color = red * 65536 + green * 256 + blue;

    sendCommand('set_rgb', [color, 'smooth', 500]);
    res.json({ status: 200, message: `Bulb color set to ${color}` });
  } catch (error) {
    res.json({ status: 500, message: `Error setting bulb color:: ${error}` });
  }
});

router.post('/setBrightness', (req, res) => {
  try {
    const { brightness } = req.body;
    sendCommand('set_bright', [brightness, 'smooth', 500]);
    res.json({ status: 200, message: `Bulb brightness set to ${brightness}` });
  } catch (error) {
    res.json({
      status: 500,
      message: `Error setting bulb brightness: ${error}`,
    });
  }
});

router.get('/getInfo', async (req, res) => {
  try {
    const bulbData = await getBulbData();
    res.json({ status: 200, bulbData });
  } catch (error) {
    res.json({ status: 500, message: `Error getting bulb data: ${error}}` });
  }
});

router.post('/setColorTemperature', (req, res) => {
  try {
    sendCommand('set_ct_abx', [req.body.ct_value, 'smooth', 500]);
    res.json({
      status: 200,
      message: `Bulb color temperature set to ${req.body.ct_value}`,
    });
  } catch (error) {
    res.json({ status: 500, message: `Error setting temperature: ${error}}` });
  }
});
