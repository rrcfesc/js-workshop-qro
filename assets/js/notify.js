export default class {
  constructor (message, options) {
    this.message = message;
    this.options = options;
  }

  render () {
    this.element = document.createElement('div');
    this.element.classList.add(
      'alert',
      `alert-${this.options.mode === 'success' ? 'success' : 'danger'}`,
      'notification'
    );
    this.element.innerHTML = `<span class="fa fa-lightbulb"></span> ${this.message}`;
    document.body.insertAdjacentElement('afterbegin', this.element);
  }

  /**
   * @returns {boolean}
   */
  isVisible () {
    return Boolean(this.element);
  }
}
