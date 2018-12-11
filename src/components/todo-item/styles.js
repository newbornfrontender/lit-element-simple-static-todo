import { html } from 'lit-html';
import { btn, btnBackground } from '../shared-styles';

export const styles = html`
  ${btn}

  <style>
    .item {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .text {
      width: 90%;
      background-color: white;
      border: 1px solid lightgrey;
      box-shadow: 1px 1px 1px lightgrey;
      padding: 12px;
      margin-right: 10px;
    }

    .btn-delete {
      background: #ff7373;
      box-shadow: 1px 1px 1px #c70202;
    }

    ${btnBackground('delete')}
  </style>
`;
