import API from '../../utils/API';
import { DEVICES_ERROR, DEVICES_LOADING, DEVICE_ADD } from '../types';

export const getDevice = async (dispatch) => {
  try {
    dispatch({ type: DEVICES_LOADING });
    dispatch({ type: DEVICE_ADD, payload: await API.getDevice() });
  } catch (err) {
    dispatch({ type: DEVICES_ERROR, payload: err.toString() });
  }
};
