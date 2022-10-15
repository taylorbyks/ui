import { Meta, StoryObj } from '@storybook/react'
import { Header, HeaderProps } from '.'

export default {
  title: 'Componets/Header',
  component: Header,
  args: {
    children: 'Header',
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
} as Meta<HeaderProps>

export const Default: StoryObj<HeaderProps> = {}

export const Small: StoryObj<HeaderProps> = {
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj<HeaderProps> = {
  args: {
    size: 'lg',
  },
}

export const Custom: StoryObj<HeaderProps> = {
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
