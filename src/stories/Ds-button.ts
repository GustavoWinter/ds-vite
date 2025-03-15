import { html, LitElement, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { Button, ButtonProps } from '../stories/Button';
import '../stories/button.css';

@customElement('ds-button')
export class DsButton extends LitElement {
  @property({ type: Boolean }) primary = false;
  @property({ type: String }) backgroundColor = '';
  @property({ type: String }) size: 'small' | 'medium' | 'large' = 'medium';
  @property({ type: String }) label = '';
  @property({ type: Function }) onClick?: () => void;

  static styles = css``;

  render() {
    const props: ButtonProps = {
      primary: this.primary,
      backgroundColor: this.backgroundColor,
      size: this.size,
      label: this.label,
      onClick: this.onClick,
    };

    return Button(props);
  }
}