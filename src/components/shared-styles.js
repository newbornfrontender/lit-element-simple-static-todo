import { html } from 'lit-html';

export const btn = html`
  <style>
    .btn {
      position: relative;
      width: 36px;
      height: 36px;
      border: 0;
      border-radius: 10px;
      color: white;
      cursor: pointer;
      outline: 0;
    }

    .btn:hover {
      margin-top: 1px;
      margin-right: -1px;
      margin-bottom: -1px;
      margin-left: 1px;
      box-shadow: none;
    }
  </style>
`;

export const btnBackground = (name = 'add') => {
  const mainStyles = html`
    content: '';
    position: absolute;
    width: 4px;
    height: 30px;
    border-radius: 2px;
    background-color: white;
  `;

  return html`
    .btn-${name}::before {
      ${mainStyles}
      top: 3px;
      left: 16px;
      transform: rotate(${name === 'add' ? '0' : '45'}deg);
    }

    .btn-${name}::after {
      ${mainStyles}
      top: 3px;
      left: 16px;
      transform: rotate(${name === 'add' ? '90' : '-45'}deg);
    }
  `
};
