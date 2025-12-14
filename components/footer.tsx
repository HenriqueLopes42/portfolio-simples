import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full border-0 bg-background text-muted-foreground">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        
        {/* Lado Esquerdo: Copyright */}
        <p className="text-sm">
          &copy; 2025 Henrique Lopes
        </p>

        {/* Lado Direito: Ícones Sociais */}
        <div className="flex items-center gap-4">
          <Link
            href="https://github.com/henriquelopes42"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-5 w-5" />
          </Link>
          
          <Link
            href="https://linkedin.com/in/henriquelopes42" // Substitua pelo seu link real
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </Link>

          <Link
            href="mailto:lhenriquelopes42@gmail.com" // Substitua pelo seu email real
            className="transition-colors hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-5 w-5" />
          </Link>
        </div>

      </div>
    </footer>
  )
}