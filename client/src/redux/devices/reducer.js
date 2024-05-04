import {
  DEVICES_ERROR,
  DEVICES_LOADING,
  // DEVICES_SET,
  DEVICE_ADD,
  // DEVICE_EDIT,
} from '../types';

const DEFAULT_STATE = {
  data: [],
  loading: false,
  error: null,
};

export function devicesReducer(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case DEVICES_LOADING:
      return { ...state, loading: true, error: null };
    // case DEVICES_SET:
    //   return {
    //     data: action.payload,
    //     loading: false,
    //     error: null,
    //   };
    case DEVICE_ADD:
      return {
        data: state.data.concat(action.payload),
        loading: false,
        error: null,
      };
    // case DEVICE_EDIT:
    //   return {
    //     data: [
    //       ...state.data.map((item) =>
    //         item.id === action.payload.id ? action.payload : item
    //       ),
    //     ],
    //     loading: false,
    //     error: null,
    //   };
    case DEVICES_ERROR:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}
