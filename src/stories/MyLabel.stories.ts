import { Meta, StoryObj } from '@storybook/react';
import { MyLabel, type Props } from '../components/MyLabel';

const meta: Meta<Props> = {
  title: 'Labels/MyLabel',
  tags: [ 'autodocs' ],
  component: MyLabel,
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    size: {
      control: 'inline-radio'
    },
    color: {
      control: 'select'
    },
    fontColor: {
      control: 'color'
    }
  }
} satisfies Meta<typeof MyLabel>;


export default meta;

type Story = StoryObj<typeof meta>;


export const Basic: Story = {
  args: {
    label: 'Basic Label'
  }
};

export const AllCaps: Story = {
  args: {
    label: 'AllCaps',
    size: 'normal',
    allCaps: true
  }
};

export const Secodary: Story = {
  args: {
    label: 'Secodary',
    size: 'normal',
    color: 'text-secondary'
  }
};

export const CustomColor: Story = {
  args: {
    label: 'CustomColor',
    size: 'normal',
    fontColor: '#ff0000'
  }
};

export const CustomBackgroundColor: Story = {
  args: {
    label: 'CustomColor',
    size: 'normal',
    fontColor: 'white',
    backgroundColor: 'black'
  }
};