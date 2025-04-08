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
        display: inline-block;
        border: 1px solid var(--ddd-border-color, #ccc);
        border-radius: var(--ddd-border-radius, 12px);
        width: var(--ddd-card-width, 400px);
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
      h3 span {
        font-size: var(--ddd-card-list-label-font-size, var(--ddd-font-size-s));
      }
      .card {
        width: var(--ddd-card-width, 100%);
      }
      .img {
        border-bottom: 12px var(--ddd-theme-default-nittanyNavy) solid;
      }
      .img img{
        width: 100%;
        height: auto;
        display: block;
        border-radius: var(--ddd-border-radius, 12px) var(--ddd-border-radius, 12px) 0 0;
      }
      .title {
        text-align: inherit;
        font-size: 1.375rem;
        font-family: Roboto, Arial, Tahoma, sans-serif;
        font-weight: 700;
        line-height: 120%;
        letter-spacing: normal;
        color: var(--theme-ui-colors-nittanyNavy);
        margin-left: 1.5rem;
      }
      button {
        width: 100%;
        background-color: var(--ddd-background-color, #005fa9);
        color: white;
        font-size: 1rem;
        font-weight: bold;
        border: none;
        border-radius: 4px;
        padding-top: 0.75rem;
        padding-bottom: 0.75rem;
        cursor: pointer;
        transition: all 0.2s ease-out;
        margin-bottom: 1.5rem;
      }
      .button {
        display: flex;
        justify-content: center;
        align-items: center;
        padding-left: 1.5rem;
        padding-right: 1.5rem;
      }
      button:hover {
        background-color: var(--ddd-background-color, #004080);
      }


      .description {
        text-align: left;
        font-size: 1.125rem;
        font-family: Arial, Tahoma, sans-serif;
        font-weight: 400;
        line-height: 150%;
        letter-spacing: normal;
        color: var(--theme-ui-colors-coalyGray);
        margin-left: 1.25rem;
        margin-right: 1.25rem;
  
      }
      .title{
        text-align: left;
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