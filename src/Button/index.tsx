import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface ButtonProps {
  children: ReactNode
  asChild?: boolean
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ children, asChild, size = 'md' }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(' px-3 w-full bg-cyan-500 rounded font-semibold text-black transition-colors hover:bg-cyan-300 focus:ring-2 ring-cyan-800', {
        'text-sm py-2': size === 'sm',
        'text-md py-4': size === 'md',
        'text-lg py-6': size === 'lg',
      })}
    >
      {children}
    </Comp>
  )
}
