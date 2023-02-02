import '../styles/global.css'
import { clsx } from 'clsx'
import { Slot } from '@radix-ui/react-slot'
import { ReactNode, ButtonHTMLAttributes } from 'react'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  asChild?: boolean
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export function Button({ children, asChild, className, size = 'md', ...props }: ButtonProps) {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      className={clsx(
        ' px-4 w-full bg-cyan-500 rounded font-semibold text-black transition-colors hover:bg-cyan-300 focus:ring-2 ring-cyan-800',
        {
          'text-sm py-2': size === 'sm',
          'text-md py-3': size === 'md',
          'text-lg py-4': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </Comp>
  )
}
