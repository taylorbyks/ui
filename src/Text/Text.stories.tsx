import { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '.'

export default {
  title: 'Componets/Text',
  component: Text,
  args: {
    children: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.',
    size: 'md',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'md', 'lg'],
      },
    },
    asChild: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Small: StoryObj<TextProps> = {
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj<TextProps> = {
  args: {
    size: 'lg',
  },
}

export const Custom: StoryObj<TextProps> = {
  args: {
    asChild: true,
    children: <p>Custom P</p>,
  },
  argTypes: {
    children: {
      table: {
        disable: true,
      },
    },
  },
}
