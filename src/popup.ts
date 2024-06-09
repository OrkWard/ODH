import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import {
  PanelHeader,
  PanelContent,
  SelectField,
  SwitchField,
} from "./components.js";

@customElement("action-popup")
export class Popup extends LitElement {
  override render() {
    return html``;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "action-popup": Popup;
  }
}
