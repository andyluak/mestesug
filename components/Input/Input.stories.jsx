import React from 'react';

import '../../styles/globals.css';

import Input from './Input';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
	title: 'Example/Input',
	component: Input,
	// More on argTypes: https://storybook.js.org/docs/react/api/argtypes
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const Primary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Primary.args = {
	label: 'First Name',
};

export const Secondary = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Secondary.args = {
	label: 'Last Name',
};

export const Third = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Third.args = {
	label: 'Email',
	type: 'email',
};
