import '../styles/global.css'
import { clsx } from 'clsx'
import * as CheckboxPrimitive from '@radix-ui/react-checkbox'
import { Check } from 'phosphor-react'

export interface CheckboxProps extends CheckboxPrimitive.CheckboxProps {
  size?: 'sm' | 'md' | 'lg'
}

export function Checkbox({ size = 'md' }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      className={clsx('p-[2px] bg-gray-800 rounded', {
        'h-5 w-5': size === 'sm',
        'h-6 w-6': size === 'md',
        'h-7 w-7': size === 'lg',
      })}
    >
      <CheckboxPrimitive.Indicator asChild>
        <Check
          weight="bold"
          className={clsx('text-cyan-500', {
            'h-4 w-4': size === 'sm',
            'h-5 w-5': size === 'md',
            'h-6 w-6': size === 'lg',
          })}
        />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  )
}
