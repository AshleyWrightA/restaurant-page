export class MenuItem {
  constructor(name, description, iconName, iconStyle, image, price) {
    this.name = name;
    this.description = description;
    this.iconName = iconName;
    this.iconStyle = iconStyle;
    this.image = image;
    this.price = price;
  }

  get name() {
    return this._name;
  }

  set name(newName) {
    this._name = newName;
  }

  get description() {
    return this._description;
  }

  set description(newDescription) {
    this._description = newDescription;
  }

  get iconName() {
    return this._iconName;
  }

  set iconName(newIconName) {
    this._iconName = newIconName;
  }

  get iconStyle() {
    return this._iconStyle;
  }

  set iconStyle(newIconStyle) {
    this._iconStyle = newIconStyle;
  }

  get itemImage() {
    return this._image;
  }

  set itemImage(newItemImage) {
    this._image = newItemImage;
  }

  get price() {
    return this._price;
  }

  set price(newPrice) {
    this._price = newPrice;
  }
}

export const Menu = {
  menuArray: [],
  addMenuItem: (...args) => {
    args.forEach((arg) => {
      Menu.menuArray.push(arg);
    });
  },
};
