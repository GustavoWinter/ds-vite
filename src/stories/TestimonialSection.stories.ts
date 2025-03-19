import { html } from 'lit';
import '../components/TestimonialSection';

export default {
  title: 'Example/TestimonialSection',
  component: 'testimonial-section',
  argTypes: {
    author: { control: 'text' },
    text: { control: 'text' },
  },
};

const Template = ({ author, text }: { author: string; text: string }) => html`
  <testimonial-section .author=${author} .text=${text}></testimonial-section>
`;

export const Default: any = Template.bind({});
Default.args = {
  author: 'John Doe',
  text: 'This is an amazing product! I highly recommend it to everyone.',
};