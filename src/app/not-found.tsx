import Link from "next/link"
import { MoveLeft, FileQuestion } from "lucide-react"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-9rem)] px-4 text-center">
      
      {/* Ícone ou Elemento Visual */}
      <div className="bg-muted p-4 rounded-full mb-6">
        <FileQuestion className="h-12 w-12 text-muted-foreground" />
      </div>

      {/* Título Grande (Código de erro) */}
      <h1 className="text-7xl font-extrabold tracking-tighter text-foreground mb-2">
        404
      </h1>

      {/* Mensagem */}
      <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
        Página não encontrada
      </h2>
      
      <p className="text-muted-foreground max-w-[500px] mb-8 text-lg">
        Ops! A página que você está procurando parece não existir, foi movida ou o link está quebrado.
      </p>

      {/* Botão de Ação */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 h-12 px-8 rounded-lg bg-foreground text-background font-medium transition-transform hover:scale-105 active:scale-95"
      >
        <MoveLeft className="h-4 w-4" />
        Voltar para o Início
      </Link>
      
    </div>
  )
}