export default class Section {
  constructor({ items, renderer }, containerSelector) {
    this._renderer = renderer;
    this._items = items;
    this._containerSelector = document.querySelector(containerSelector);
  }

  renderItems() {
    this._items.forEach(item => this._renderer(item))
  }

  addItem(element, position) {
    position
      ? this._containerSelector.prepend(element)
      : this._containerSelector.append(element);
  }
}
