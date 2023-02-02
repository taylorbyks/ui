import { Meta, StoryObj } from '@storybook/react'
import { Envelope } from 'phosphor-react'
import { TextInput, TextInputRootProps } from '.'

export default {
  title: 'Componets/TextInput',
  component: TextInput.Root,
  args: {
    children: <TextInput.Input placeholder="Placeholder" />,
    size: 'md',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'md', 'lg'],
      },
    },
    children: {
      table: {
        disable: true,
      },
    },
  },
} as Meta<TextInputRootProps>

export const Default: StoryObj<TextInputRootProps> = {}

export const WithIcon: StoryObj<TextInputRootProps> = {
  args: {
    children: [
      <TextInput.Icon>
        <Envelope />
      </TextInput.Icon>,
      <TextInput.Input placeholder="Placeholder" />,
    ],
    size: 'md',
  },
}

export const Small: StoryObj<TextInputRootProps> = {
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj<TextInputRootProps> = {
  args: {
    size: 'lg',
  },
}
