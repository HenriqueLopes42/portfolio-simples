"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export function ThemeToggle() {
  // MUDANÇA 1: Importamos resolvedTheme
  const { setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  React.useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
        <button className="p-2 rounded-md bg-gray-200 dark:bg-gray-800 opacity-50 cursor-wait">
            <span className="sr-only">Carregando tema</span>
            <div className="w-5 h-5" />
        </button>
    )
  }

  return (
    <button
      // MUDANÇA 2: Usamos resolvedTheme na verificação
      // Se resolvedTheme for "dark" (mesmo que venha do system), mudamos para light.
      // Caso contrário (se for light), mudamos para dark.
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className="relative p-2 rounded-md hover:bg-muted transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400"
      aria-label="Alternar tema"
    >
      <Sun className="h-5 w-5 transition-all scale-100 rotate-0 dark:scale-0 dark:-rotate-90 block dark:hidden" />
      <Moon className="h-5 w-5 transition-all scale-0 rotate-90 dark:scale-100 dark:rotate-0 hidden dark:block" />
    </button>
  )
}