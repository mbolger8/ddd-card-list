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
        display: inline-flex;
        border: 1px solid var(--ddd-border-color, #ccc);
        border-radius: var(--ddd-border-radius, 12px);
        width: var(--ddd-card-width, 390px);
        font-family: var(--ddd-font-family, Arial, sans-serif);
        background-color: var(--ddd-background-color, #fff);
        justify-content: center;
        align-items: center;
        margin: 16px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      }
      .wrapper {
        display: flex;
        flex-wrap: wrap;
        border-radius: var(--ddd-border-radius, 12px);
      }
      h2{
        margin: 0;
      }
      p {
        margin: 0;
        padding: 0;
      }
      .card {
        width: var(--ddd-card-width, 100%);
      }
      .img {
        border-bottom: 0.75rem var(--ddd-theme-default-nittanyNavy) solid;
      }
      .img img{
        width: 100%;
        height: auto;
        display: block;
        border-radius: var(--ddd-border-radius, 12px) var(--ddd-border-radius, 12px) 0 0;
      }
      .box {
        padding-right: 1rem;
        padding-left: 1rem;
        padding-top: 0.75rem;
        padding-bottom: 1.25rem;
      }
      .title {
        text-align: inherit;
        text-align: left;
        font-size: 1.375rem;
        font-family: Roboto, Arial, Tahoma, sans-serif;
        font-weight: 700;
        line-height: 120%;
        letter-spacing: normal;
        color: var(--ddd-theme-default-nittanyNavy);
      }
      button {
        width: 100%;
        background-color: var(--ddd-background-color, #005fa9);
        color: white;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        border-radius: 4px;
        padding-top: 1rem;
        padding-bottom: 1rem;
        cursor: pointer;
        transition: all 0.2s ease-out;
      }
      .button {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      button:hover {
        background-color: var(--ddd-theme-default-nittanyNavy);
      }

      .description {
        text-align: left;
        font-size: 1.125rem;
        font-family: Arial, Tahoma, sans-serif;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: normal;
        color: var(--theme-ui-colors-coalyGray);
        padding-top: 0.5rem;
        padding-bottom: 0.75rem;
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
        <div class="box">
        <div class="title">
            <h2>${this.title}</h2>
        </div>
        <div class="description">
            <slot></slot>
        </div>
        <div class="button">
          <button @click=${this.clickEvent}>Explore ></button>
        </div>
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