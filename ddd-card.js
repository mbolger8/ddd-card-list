/**
 * Copyright 2025 mbolger8
 * @license Apache-2.0, see LICENSE for full text.
 */
import { LitElement, html, css } from "lit";
import { DDDSuper } from "@haxtheweb/d-d-d/d-d-d.js";
import { I18NMixin } from "@haxtheweb/i18n-manager/lib/I18NMixin.js";

/**
 * `ddd-card`
 * 
 * @demo index.html
 * @element ddd-card
 */
export class DddCard extends DDDSuper(I18NMixin(LitElement)) {

  static get tag() {
    return "ddd-card";
  }

  constructor() {
    super();
    this.image = "https://via.placeholder.com/150";
    this.title = "Card List";
    this.description = "Description";
    this.button = "Button";
    this.buttonLink = "#";
    this.primary = "";
    this.t = {
      ...this.t,
      title: "Title",
    };
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      description: { type: String },
      link: { type: String },
      image: { type: String },
      button: { type: String },
      buttonLink: { type: String },
      primary: {type: String, reflect: true, attribute: "data-primary"},
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        color: var(--ddd-theme-primary);
        background-color: var(--ddd-theme-accent);
        font-family: var(--ddd-font-navigation);
      }
      .wrapper {
        margin: var(--ddd-spacing-2);
        padding: var(--ddd-spacing-4);
      }
      h3 span {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
      }
      .card {
        height: var(--ddd-card-height, 300px);
        width: var(--ddd-card-width, 200px);
        display: flex;
        flex-direction: column;
        background-color: var(--ddd-theme-accent);
        border-radius: var(--ddd-border-radius-m);
        box-shadow: var(--ddd-shadow-1);
      }
    `];
  }

  handleButtonClick() {
    window.open(this.buttonLink, "_blank");
  }

  // Lit render the HTML
  render() {
    return html`
<div class="wrapper">
    <div class="card">
        <div class="img">
            <img src="${this.image}" alt="${this.title}"/>
        </div>
        <div class="title">
            <h3>${this.title}</h3>
        </div>
        <div class="description">
            <slot></slot>
        </div>
        <div class="button">
            <button @click="${this.handleButtonClick}">${this.button}</button>
        </div>
    </div>
</div>`;
  }

  /**
   * haxProperties integration via file reference
   */
  static get haxProperties() {
    return new URL(`./lib/${this.tag}.haxProperties.json`, import.meta.url)
      .href;
  }
}

globalThis.customElements.define(DddCard.tag, DddCard);