import Modal from './modal';

export default class Modals {
  private modalMap: Map<string, Modal> = new Map<string, Modal>();
  
  register(modal: Modal) {
    this.modalMap.set(modal.id, modal);
  }
  
  open(modalId: string): Promise<any> {
    if (this.modalMap.has(modalId)) {
      return this.modalMap.get(modalId).open();
    }
    return Promise.reject('No such modal registered');
  }
}