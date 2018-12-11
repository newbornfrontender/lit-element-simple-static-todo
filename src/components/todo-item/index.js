import { LitElement } from '@polymer/lit-element';
import { html } from 'lit-html';
import { styles } from './styles';

export class TodoItem extends LitElement {
  static get properties() {
    return {
      text: {
        type: String,
      },
    };
  }

  constructor() {
    super()

    this.deleteItem = this.deleteItem.bind(this)
  }

  deleteItem() {
    const event = new CustomEvent('delete', {
      bubbles: true,
      composed: true,
      detail: { todo: this.todo }
    })

    this.dispatchEvent(event)
  }

  render() {
    return html`
      ${styles}

      <div class="item">
        <p class="text">${this.text}</p>

        <button class="btn btn-delete" @click="${this.deleteItem}"></button>
      </div>
    `;
  }
}
