export const OPEN_TOAST = `OPEN_TOAST`;

export const CLOSE_TOAST = `CLOSE_TOAS`;

export interface ToastPayload {
  toastVisible: boolean;
  color: string;
  emoticon: string;
  text: string;
}

export interface ToastOpenAction {
  type: typeof OPEN_TOAST;
  payload: ToastPayload;
}

export interface ToastCloseAction {
  type: typeof CLOSE_TOAST;
}
