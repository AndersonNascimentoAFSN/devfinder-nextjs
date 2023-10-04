import { ComponentProps, FC } from 'react'
import { Moon, Sun } from 'lucide-react'

import { tv, VariantProps } from 'tailwind-variants'

const header = tv({
  slots: {
    container: 'flex items-center justify-between',
    title: 'text-2md font-bold',
    button: 'flex items-center gap-4 p-0 m-0',
    iconTitle: 'font-bold text-md',
    icon: 'h-5 w-5',
  },

  variants: {
    state: {
      light: {
        container: '',
        title: 'text-gray-900',
        iconTitle: 'text-cyan-500',
        icon: 'fill-cyan-500 stroke-cyan-500',
      },
      dark: {
        container: '',
        title: 'text-white',
        iconTitle: 'text-white',
        icon: 'fill-white stroke-white',
      },
    },
  },
  defaultVariants: {
    state: 'light',
  },
})

export interface HeaderProps extends VariantProps<typeof header> {}

export const Header: FC<HeaderProps> = ({ state }) => {
  const { container, button, icon, iconTitle, title } = header({ state })

  return (
    <header className={container()}>
      <h1 className={title()}>devfinder</h1>
      <button className={button()} type="button">
        <span className={iconTitle()}>{ state === 'light' ? 'DARK' : 'LIGHT'}</span>
        {
          state === 'light' ? (
            <Moon className={icon()} data-testid="moon-icon"/>
          ) : (
            <Sun className={icon()} data-testid="sun-icon"/>
          )
        }
      </button>
    </header>
  )
}
