import { makeAutoObservable } from "mobx";

class SelectedMailStore {
  selectedMail;

  constructor() {
    makeAutoObservable(this);
  }
  setSelectedMail(mail) {
    this.selectedMail = mail;
  }
}

export const Store = new SelectedMailStore();
