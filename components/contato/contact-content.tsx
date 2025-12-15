"use client"

import { useState } from "react"
import Link from "next/link"
import { Mail, Github, Linkedin, Copy, Check, ExternalLink, MessageSquare } from "lucide-react"

const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/henriquelopes42", // Seu GitHub
    icon: Github,
    description: "Veja meu código fonte e contribuições.",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/seu-linkedin", // Seu LinkedIn
    icon: Linkedin,
    description: "Conecte-se comigo profissionalmente.",
  },
  // Opcional: Adicione WhatsApp ou Telegram se quiser
  // {
  //   name: "WhatsApp",
  //   url: "https://wa.me/55...",
  //   icon: MessageSquare,
  //   description: "Mande uma mensagem direta."
  // }
]

export function ContactContent() {
  const [copied, setCopied] = useState(false)
  const email = "seu-email@exemplo.com" // <--- COLOQUE SEU EMAIL AQUI

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000) // Reseta após 2 segundos
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:gap-8">
      
      {/* CARD DE EMAIL (Destaque) */}
      <div className="flex flex-col justify-between rounded-xl border border-border bg-card p-6 shadow-sm md:col-span-2 lg:col-span-1">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg text-blue-600 dark:text-blue-400">
              <Mail className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-xl text-foreground">Email</h3>
          </div>
          <p className="text-muted-foreground mb-6">
            Prefere mandar um email? Copie meu endereço ou clique para abrir seu app de email.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            {/* Botão de Copiar */}
            <button
              onClick={handleCopyEmail}
              className="flex-1 flex items-center justify-center gap-2 h-12 rounded-lg border border-border bg-background hover:bg-muted transition-all active:scale-95 group"
            >
              <span className="font-mono text-sm">{email}</span>
              {copied ? (
                <Check className="h-4 w-4 text-green-500" />
              ) : (
                <Copy className="h-4 w-4 text-muted-foreground group-hover:text-foreground" />
              )}
            </button>

            {/* Botão de Enviar (Mailto) */}
            <a
              href={`mailto:${email}`}
              className="flex items-center justify-center h-12 px-6 rounded-lg bg-foreground text-background font-medium hover:opacity-90 transition-opacity"
            >
              Enviar
            </a>
        </div>
        
        {copied && (
             <p className="text-xs text-green-600 dark:text-green-400 mt-2 text-center sm:text-left animate-pulse">
               Email copiado para a área de transferência!
             </p>
        )}
      </div>

      {/* CARDS DAS REDES SOCIAIS */}
      <div className="grid gap-4 md:col-span-2 lg:col-span-1">
        {socialLinks.map((link) => (
          <Link
            key={link.name}
            href={link.url}
            target="_blank"
            className="group flex items-center justify-between rounded-xl border border-border bg-card p-6 transition-all hover:border-foreground/50 hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="p-2 bg-muted rounded-lg text-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                <link.icon className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">{link.name}</h3>
                <p className="text-sm text-muted-foreground">{link.description}</p>
              </div>
            </div>
            <ExternalLink className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors" />
          </Link>
        ))}
      </div>

    </div>
  )
}