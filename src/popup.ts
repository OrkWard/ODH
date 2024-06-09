import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";

@customElement("action-popup")
export class Popup extends LitElement {
  override render() {
    return html`<panel-header>
        <select-field></select-field> </panel-header
      ><panel-content></panel-content>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "action-popup": Popup;
  }
}
