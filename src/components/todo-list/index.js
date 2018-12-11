import { LitElement } from '@polymer/lit-element';
import { html } from 'lit-html';
import { repeat } from 'lit-html/directives/repeat';
import { styles } from './styles';

export class TodoList extends LitElement {
  static get properties() {
    return {
      list: {
        type: Array,
      },
      todo: {
        type: String,
      },
    };
  };

  constructor() {
    super();
    this.list = [
      this.todoItem('Learn lit-html'),
      this.todoItem('Learn lit-element'),
    ];
    this.todo = '';
    this.createNewTodoItem = this.createNewTodoItem.bind(this);
    this.handleKeyPress = this.handleKeyPress.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  };

  todoItem(todo) {
    return { todo };
  };

  createNewTodoItem() {
    this.list = [
      ...this.list,
      this.todoItem(this.todo),
    ];
    this.todo = '';
  };

  handleKeyPress(e) {
    if (e.target.value !== '') {
      if (e.key === 'Enter') {
        this.createNewTodoItem;
      };
    };
  };

  handleInput(e) {
    this.todo = e.target.value;
  };

  deleteItem(e) {
    const todo = e.detail.todo;

    this.list = this.list.filter((item) => item !== todo);
  };

  render() {
    return html`
      ${styles}

      <div class="todo-list">
        <h1 class="title">LitElement ToDo List</h1>

        <div class="containet">
          ${this.list.length
            ? html`
              <div class="content">
                ${repeat(this.list, ({ todo }, key) => html`
                  <todo-item
                    text="${todo}"
                    @delete="${this.deleteItem}"
                  ></todo-item>
                `)}
              </div>
            `
            : html`<p>Nothing found</p>`
          }

          <div>
            <input
              type="text"
              .value=${this.todo}
              @input=${this.handleInput}
              @keypress=${this.handleKeyPress}
            >

            <button class="btn btn-add" @click="${this.createNewTodoItem}">+</button>
          </div>
        </div>
      </div>
    `;
  };
};
