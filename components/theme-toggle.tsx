"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // useEffect necessário para evitar erro de hidratação (garante que roda só no cliente)
  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
        // Um placeholder do mesmo tamanho para evitar layout shift
        <button className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 opacity-50 cursor-wait">
            <span className="sr-only">Carregando tema</span>
            <div className="w-5 h-5" />
        </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
      className="relative p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
      aria-label="Alternar tema"
    >
      {/* Ícone de Sol (visível no dark, escondido no light) */}
      <Sun className="h-5 w-5 transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90 block dark:hidden" />
      
      {/* Ícone de Lua (visível no light, escondido no dark) */}
      <Moon className="h-5 w-5 transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0 hidden dark:block" />
    </button>
  )
}