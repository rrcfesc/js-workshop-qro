module.exports = class {
  constructor (name) {
    this._name = name;
  }

  get name () {
    return this._name;
  }

  printNameLater () {
    const randomNumber = () => (Math.random());
    randomNumber();

    setTimeout(() => {
      console.log(this.name);
    }, 1000);
  }
}
