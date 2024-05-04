class API {
  #BASE_URL = 'http://localhost:3000/yeelight/';

  async sendCommand(route, payload) {
    await fetch(this.#BASE_URL + route, {
      method: 'POST',
      body: JSON.stringify(payload),
      headers: { 'Content-type': 'application/json' },
    })
      .then((res) => res.json())
      .catch(console.log)
      .finally(console.log);
  }

  // async setRGBColor(color) {
  //   const { red, green, blue } = color;

  //   await fetch(this.#BASE_URL + 'setRGBColor', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       red: red,
  //       green: green,
  //       blue: blue,
  //     }),
  //     headers: { 'Content-type': 'application/json' },
  //   })
  //     .then((res) => res.json())
  //     .catch(console.log)
  //     .finally(console.log);
  // }

  // async setBrightness(brightness) {
  //   await fetch(this.#BASE_URL + 'setBrightness', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       brightness: brightness,
  //     }),
  //     headers: { 'Content-type': 'application/json' },
  //   })
  //     .then((res) => res.json())
  //     .catch(console.log)
  //     .finally(console.log);
  // }

  // async setColorTemperature(temperature) {
  //   await fetch(this.#BASE_URL + 'setColorTemperature', {
  //     method: 'POST',
  //     body: JSON.stringify({
  //       temperature: temperature,
  //     }),
  //     headers: {
  //       'Content-type': 'application/json',
  //     },
  //   })
  //     .then((res) => res.json())
  //     .catch(console.log)
  //     .finally(console.log);
  // }

  async turnOnBulb() {
    await fetch(this.#BASE_URL + 'turnOn', {
      method: 'POST',
      body: JSON.stringify({}),
      headers: { 'Content-type': 'application/json' },
    })
      .then((res) => res.json())
      .catch(console.log)
      .finally(console.log);
  }

  async turnOffBulb() {
    await fetch(this.#BASE_URL + 'turnOff', {
      method: 'POST',
      body: JSON.stringify({}),
      headers: { 'Content-type': 'application/json' },
    })
      .then((res) => res.json())
      .catch(console.log)
      .finally(console.log);
  }

  async getUser({ email, password }) {
    return {};
  }

  async getDevices() {
    return {};
  }
}

export default new API();
