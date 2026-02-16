import { LitElement, html, css } from 'lit';

/**
 * Now it's your turn. Here's what we need to try and do:
 * 1. Get your HTML from your card working in here 
 * 2. Get your CSS rescoped as needed to work here
 */

export class MyCard extends LitElement {

  static get tag() {
    return 'my-card';
  }

  constructor() {
    super();
    this.title = "My card";
    this.fancy = false;
    this.image = "";
    this.alt = "";
    this.fancy = false;
  }

  openChanged(e) {
    if (e.target.hasAttribute('open')) {
      this.fancy = true;
    } else {
      this.fancy = false;
    }
  }

  static get styles() {
    return css`
    :host {
      display: block;
    }
    :host([fancy]) .card {
      background-color: #dddddd
    }
    .card {
      border: 4px solid black;
      display: inline-block;
      padding: 8px; 
      margin: 16px;
      max-width: 400px;
      background-color: #FFFFFF;
      vertical-align: top;
    }
    .card-image {
      width: 400px;
      height: 250px;
      object-fit: cover;
    }
    .card-title {
      font-weight: bold;
      font-size: 24px;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    .card-description {
      font-size: 16px;
      margin-top: 16px;
      margin-bottom: 16px;
    }
    details summary {
      text-align: left;
      font-size: 16px;
      padding: 8px 0;
      cursor: pointer;
    }

    details[open] summary {
      font-weight: bold;
    }

    details div {
      border: 2px solid black;
      text-align: left;
      padding: 8px;
      height: 70px;
      overflow: auto;
    }
    @media (min-width: 501px) and (max-width: 800px) {
      .card-details {
        display: inline-block;
      }
    }
    @media (max-width: 500px) {
      .card {
        transform: scale(0.9);
      }
    }
          :host {
            display: block;
          }
    `;
  }

  render() {
  return html`
      <div class="card">
        <img class="card-image"
            src="${this.image}"
            alt="${this.alt}"
        />
        <h2 class="card-title">
          ${this.title}
        </h2>

        <details ?open="${this.fancy}" @toggle="${this.openChanged}">
          <summary>Learn more</summary>
          <div>
            <slot></slot>
          </div>
        </details>
      </div>
    `;
  }

  static get properties() {
    return {
      title: { type: String, reflect: true },
      image: { type: String, reflect: true },
      alt : { type: String, reflect: true },
      fancy: { type: Boolean, reflect: true }
    };
  }
}

globalThis.customElements.define(MyCard.tag, MyCard);
