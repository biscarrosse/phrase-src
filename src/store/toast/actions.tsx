import { ToastPayload, OPEN_TOAST, CLOSE_TOAST } from './types';

export const openToast = (toastPayload: ToastPayload) => {
  return { type: OPEN_TOAST, payload: toastPayload };
};

export const closeToast = () => {
  return { type: CLOSE_TOAST };
};
