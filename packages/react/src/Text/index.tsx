import '../styles/global.css'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface TextProps {
  children: ReactNode
  asChild?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Text({ children, asChild, className, size = 'md' }: TextProps) {
  const Comp = asChild ? Slot : 'span'

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-sans',
        {
          'text-sm': size === 'sm',
          'text-md': size === 'md',
          'text-lg': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Comp>
  )
}
