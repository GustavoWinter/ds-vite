import { LitElement, html } from "lit";
import { property } from "lit/decorators.js";
import { customElement } from "lit/decorators.js";
import "./testimonial-section.css";

@customElement("testimonial-section")
export class TestimonialSection extends LitElement {
  @property({ type: String }) author = "";
  @property({ type: String }) text = "";

  // Make changes to this component to see it reflecting in your liquid application

  render() {
    return html`
      <section
        class="testimonial-section"
        style="background-color: purple; text-align: right;"
      >
        <p class="testimonial" style="color: yellow; font-size: 2em;">
          "${this.text}"
        </p>
        <p class="author" style="color: yellow; font-size: 2em;">
          - ${this.author}
        </p>
        <span class="text-red-500 mr-8 pb-8 mb-8">- ${this.author}</span>
      </section>
    `;
  }
}
