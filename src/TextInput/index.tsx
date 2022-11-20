import '../styles/global.css'
import { Slot } from '@radix-ui/react-slot'
import { clsx } from 'clsx'
import { ReactNode } from 'react'

export interface TextInputRootProps {
  children: ReactNode
  size?: 'sm' | 'md' | 'lg'
}

function TextInputRoot({ children, size }: TextInputRootProps) {
  return (
    <div
      className={clsx('flex items-center gap-3 px-3 w-full rounded bg-gray-800 focus-within:ring-2 ring-cyan-300', {
        'text-sm py-2 h-10': size === 'sm',
        'text-md py-4 h-12': size === 'md',
        'text-lg py-6 h-14': size === 'lg',
      })}
    >
      {children}
    </div>
  )
}
TextInputRoot.displayName = 'TextInput.Root'

interface TextInputIconProps {
  children: ReactNode
}

function TextInputIcon({ children }: TextInputIconProps) {
  return <Slot className="w-6 h-6 text-gray-400">{children}</Slot>
}

TextInputIcon.displayName = 'TextInput.Icon'

interface TextInputInputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function TextInputInput(props: TextInputInputProps) {
  return <input className="bg-transparent outline-none flex-1 text-gray-100 placeholder:text-gray-400 " {...props} />
}

TextInputInput.displayName = 'TextInput.Input'

export const TextInput = {
  Root: TextInputRoot,
  Icon: TextInputIcon,
  Input: TextInputInput,
}
