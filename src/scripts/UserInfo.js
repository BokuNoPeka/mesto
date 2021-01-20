export default class UserInfo {
  constructor(data){
    this._name = document.querySelector(data.name);
    this._status = document.querySelector(data.status);
  }

  getUserInfo(){
    this._infoValues = {};
    this._infoValues.name = this._name.textContent;
    this._infoValues.status = this._status.textContent;
    return this._infoValues;
  }

  setUserInfo(data){
    this._name.textContent = data['name-input'];
    this._status.textContent = data['status-input'];
  }
} 