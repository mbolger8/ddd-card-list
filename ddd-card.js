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
    this.image = "";
    this.title = "";
    this.description = "";
    this.primary = "";
  }

  // Lit reactive properties
  static get properties() {
    return {
      ...super.properties,
      title: { type: String },
      description: { type: String },
      link: { type: String },
      image: { type: String },
      link: { type: String },
      primary: {type: String, reflect: true, attribute: "data-primary"},
    };
  }

  // Lit scoped styles
  static get styles() {
    return [super.styles,
    css`
      :host {
        display: block;
        border: 1px solid var(--ddd-border-color, #ccc);
        border-radius: var(--ddd-border-radius, 12px);
        width: var(--ddd-card-width, 400px);
        font-family: var(--ddd-font-family, Arial, sans-serif);
        background-color: var(--ddd-background-color, #fff);
      }
      .wrapper {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
        border-radius: var(--ddd-border-radius, 12px);
      }
      h3 span {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
      }
      .card {
        width: var(--ddd-card-width, 100%);
      }
      .img img{
        width: 100%;
        object-fit: cover;
      }
      .title {
        text-align: inherit;
        font-size: 1.375rem;
        font-family: Roboto, Arial, Tahoma, sans-serif;
        font-weight: 700;
        line-height: 120%;
        letter-spacing: normal;
        color: var(--theme-ui-colors-nittanyNavy);
      }
      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: var(--ddd-border-radius, 4px);
        color: var(--theme-ui-colors-white);
        background-color: var(--ddd-background-color, #005fa9);
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        padding-left: 1.5rem;
        padding-right: 1rem;
      }
      .description {
        text-align: inherit;
        font-size: 1.125rem;
        font-family: Arial, Tahoma, sans-serif;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: normal;
        color: var(--theme-ui-colors-coalyGray);
        margin-bottom: 0rem;
      }
    `];
  }

  clickEvent() {
    window.open(this.link);
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
          <button @click=${this.clickEvent}>Explore ></button>
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