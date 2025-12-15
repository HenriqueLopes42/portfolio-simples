import type { Metadata } from "next"
import { MessageCircle } from "lucide-react"
import { ContactContent } from "../../../components/contato/contact-content"

export const metadata: Metadata = {
  title: "Contato | Henrique Lopes",
  description: "Entre em contato comigo para oportunidades de trabalho ou parcerias.",
}

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-5xl">
      
      {/* Cabeçalho */}
      <div className="mb-12 text-center md:text-left">
        <div className="inline-flex items-center justify-center p-3 mb-4 bg-muted rounded-xl text-foreground md:justify-start">
            <MessageCircle className="h-8 w-8" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-4">
          Vamos Conversar?
        </h1>
        <p className="text-muted-foreground text-lg max-w-2xl mx-auto md:mx-0">
          Estou sempre aberto a novas oportunidades, perguntas ou apenas para dar um oi. Fique à vontade para entrar em contato através das redes abaixo.
        </p>
      </div>

      {/* Conteúdo (Client Component) */}
      <ContactContent />

    </div>
  )
}