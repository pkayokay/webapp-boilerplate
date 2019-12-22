import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['name', 'warning']

  connect() {
    console.log('Connect component')
  }

  submit() {
    if (this.name.trim().length === 0) {
      this.warning.classList.add('warning--show')
    } else {
      this.warning.classList.remove('warning--show')
      alert(this.nameTarget.value)
    }
  }

  prevent(event) {
    event.preventDefault()
  }

  get name() {
    return this.nameTarget.value
  }

  get warning() {
    return this.warningTarget
  }
}
