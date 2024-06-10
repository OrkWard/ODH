import { LitElement, css, html } from "lit";
import { customElement } from "lit/decorators.js";
import "./components";

@customElement("action-popup")
export class Popup extends LitElement {
  static override styles = css`
    :host {
      /* display: block; */
    }

    #more {
      all: unset;

      cursor: pointer;
    }
  `;

  override render() {
    return html`<panel-header panelTitle="baTitle">
        <button id="more">...</button>
      </panel-header>
      <panel-content>
        <switch-field fieldName="baEnabled"></switch-field>
        <switch-field fieldName="baMouseselection"></switch-field>
        <select-field></select-field>
      </panel-content>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "action-popup": Popup;
  }
}
