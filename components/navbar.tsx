"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, Github } from "lucide-react"
import { ThemeToggle } from "./theme-toggle"

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Sobre", href: "/sobre" },
  { name: "Projetos", href: "/projetos" },
  { name: "Contato", href: "/contato" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false)
  const pathname = usePathname()

  return (
    // MUDANÇA: bg-background/80 e border-border (Pega do CSS Global)
    <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md transition-colors duration-300">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        <div className="flex shrink-0 items-center">
          <Link href="/" className="text-xl font-bold tracking-tighter hover:opacity-80 transition-opacity">
            <span className="text-blue-600 dark:text-blue-400">Dev</span>Portfolio.
          </Link>
        </div>

        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 gap-1">
          {navLinks.map((link) => {
            const isActive = pathname === link.href
            return (
              <Link
                key={link.name}
                href={link.href}
                className={`
                  px-4 py-2 text-sm font-medium rounded-full transition-colors duration-200
                  ${isActive 
                    ? "bg-muted text-foreground"  // Usa cor de fundo secundária
                    : "text-muted-foreground hover:text-foreground hover:bg-muted/50" // Usa texto secundário
                  }
                `}
              >
                {link.name}
              </Link>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <Link 
            href="https://github.com" 
            target="_blank"
            className="hidden sm:flex p-2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github className="w-5 h-5" />
          </Link>

          <ThemeToggle />

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-muted-foreground hover:bg-muted rounded-md"
            aria-label="Abrir menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`
                  block px-3 py-2 rounded-md text-base font-medium transition-colors
                  ${pathname === link.href
                    ? "bg-muted text-foreground"
                    : "text-muted-foreground hover:bg-muted hover:text-foreground"
                  }
                `}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}