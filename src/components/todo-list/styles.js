import { html } from 'lit-html';
import { btn, btnBackground } from '../shared-styles';

export const styles = html`
  ${btn}

  <style>
    .btn-add {
      background: #ad6;
      box-shadow: 1px 1px 1px #71a928;
    }

    ${btnBackground('add')}
  </style>
`;
