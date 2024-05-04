export const getDevice = (store) => store.devices?.data[0];
export const getDeviceError = (store) => store.devices?.error;
export const getDeviceLoading = (store) => store.device?.loading;
