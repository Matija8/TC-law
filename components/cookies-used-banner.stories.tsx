import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import { CookiesAreUsedBanner } from './cookies-used-banner';

export default {
  title: 'Complex/CookiesAreUsedBanner',
  component: CookiesAreUsedBanner,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof CookiesAreUsedBanner>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof CookiesAreUsedBanner> = () => (
  <CookiesAreUsedBanner />
);

export const Default = Template.bind({});
Default.args = {};

export const NoHover = Template.bind({});
NoHover.args = {
  hoverEffects: false,
};
