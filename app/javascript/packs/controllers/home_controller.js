import { Controller } from 'stimulus';

export default class extends Controller {
  static targets = ['name', 'warning']

  submit() {
    const warning = this.warningTarget;
    if (this.nameTarget.value.trim().length === 0) {
      warning.classList.add("warning--show");
    } else {
      warning.classList.remove("warning--show");
      alert(this.nameTarget.value);
    }
  }

  prevent(event) {
    event.preventDefault();
  }
}
