export const OPEN_MODAL = 'OPEN_MODAL';
export const CLOSE_MODAL = 'CLOSE_MODAL';

// for action creators:
export interface ModalPayload {
  message: string; //
  category: string; // info, warning, logout etc
}

// fro reducer:
export interface ModalAction {
  type: typeof OPEN_MODAL | typeof CLOSE_MODAL;
  payload?: ModalPayload;
}
