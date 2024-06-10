import { LitElement, html, css } from "lit";
import { customElement, property } from "lit/decorators.js";
import { localize } from "./utils";

@customElement("panel-header")
export class PanelHeader extends LitElement {
  static override styles = css`
    :host {
      padding: 2px 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      font-weight: bold;
      color: white;

      background-color: #93a085;
      border-radius: 5px 5px 0 0;
    }
  `;

  @property()
  accessor panelTitle: string = "";

  override render() {
    return html`
      <span>${localize(this.panelTitle)}</span>
      <slot></slot>
    `;
  }
}

@customElement("panel-content")
export class PanelContent extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 7px;

      border-radius: 0 0 5px 5px;
      padding: 7px;
      background-color: #f1f8e9;
    }
  `;

  override render() {
    return html`<slot></slot>`;
  }
}

@customElement("switch-field")
export class SwitchField extends LitElement {
  static override styles = css`
    :host {
      display: flex;
      flex-flow: row nowrap;

      gap: 10px;
    }

    button {
      width: 48px;
      height: 16px;
      border-radius: 831px;
      padding: 2px 3px;
      background-color: #555;

      display: flex;
      align-items: center;
      justify-content: center;
    }

    span {
      width: 24px;
      height: 12px;
      border-radius: 831px;
      background-color: #76ff03;
    }

    button::before {
      content: "On";
      color: #76ff03;
      text-align: center;
    }
  `;
  @property()
  accessor fieldName: string = "";

  override render() {
    return html`<div>${localize(this.fieldName)}</div>
      <button><span></span></button>`;
  }
}

@customElement("select-field")
export class SelectField extends LitElement {
  override render() {
    return html`select`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "switch-field": SwitchField;
    "select-field": SelectField;
    "panel-header": PanelHeader;
    "panel-content": PanelContent;
  }
}
