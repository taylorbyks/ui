import { Meta, StoryObj } from '@storybook/react'
import { Checkbox, CheckboxProps } from '.'
import { Text } from '../Text'

export default {
  title: 'Componets/Checkbox',
  component: Checkbox,
  args: {
    children: 'Checkbox',
    size: 'md',
  },
  argTypes: {
    size: {
      control: {
        type: 'inline-radio',
        options: ['sm', 'md', 'lg'],
      },
    },
  },
  decorators: [
    (Story, Args) => (
      <div className="flex items-center gap-2">
        {Story()}
        <Text>Checkbox</Text>
      </div>
    ),
  ],
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}

export const Small: StoryObj<CheckboxProps> = {
  args: {
    size: 'sm',
  },
}

export const Large: StoryObj<CheckboxProps> = {
  args: {
    size: 'lg',
  },
}
