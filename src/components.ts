import { LitElement, html, css, type CSSResultGroup } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("panel-header")
export class PanelHeader extends LitElement {
  static override styles = css`
    div {
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
  panelTitle: string = "";

  override render() {
    return html`<div>
      <span data-i18n="${this.panelTitle}"></span>
      <slot></slot>
    </div>`;
  }
}

@customElement("panel-content")
export class PanelContent extends LitElement {
  static override styles = css`
    div {
      display: flex;
      padding: 7px;
      flex-direction: column;
      gap: 7px;
      border-radius: 0 0 5px 5px;
    }
  `;

  override render() {
    return html`<div><slot></slot></div>`;
  }
}

@customElement("switch-field")
export class SwitchField extends LitElement {
  constructor() {
    super();
    this.fieldName = "";
  }

  @property()
  fieldName?: string;

  override render() {
    return html`<p>${this.fieldName}</p>`;
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
    "panel-header": PanelHeader;
  }
}
