import { useTheme } from '../context/useTheme'
import type { Theme } from '../context/ThemeContext'

const options: { value: Theme; icon: string; label: string }[] = [
  { value: 'light', icon: 'fa-solid fa-sun', label: 'Light theme' },
  { value: 'dark', icon: 'fa-solid fa-moon', label: 'Dark theme' },
]

type ThemeToggleProps = {
  className?: string
}

export default function ThemeToggle({ className = '' }: ThemeToggleProps) {
  const { theme, setTheme } = useTheme()

  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className={`flex items-center gap-0.5 rounded-full border border-white/15 p-0.5 ${className}`}
    >
      {options.map((option) => {
        const active = theme === option.value
        return (
          <button
            key={option.value}
            type="button"
            role="radio"
            aria-checked={active}
            aria-label={option.label}
            title={option.label}
            onClick={() => setTheme(option.value)}
            className={`flex h-7 w-7 items-center justify-center rounded-full text-xs transition-colors duration-300 ${
              active ? 'bg-white/15 text-orange' : 'text-white/50 hover:text-white/80'
            }`}
          >
            <i className={option.icon}></i>
          </button>
        )
      })}
    </div>
  )
}