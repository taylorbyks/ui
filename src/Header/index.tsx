import '../styles/global.css'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode } from 'react'

export interface HeaderProps {
  children: ReactNode
  asChild?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Header({ children, asChild, className, size = 'md' }: HeaderProps) {
  const Comp = asChild ? Slot : 'h2'

  return (
    <Comp
      className={clsx(
        'text-gray-100 font-bold font-sans',
        {
          'text-xl': size === 'sm',
          'text-2xl': size === 'md',
          'text-3xl': size === 'lg',
        },
        className
      )}
    >
      {children}
    </Comp>
  )
}
