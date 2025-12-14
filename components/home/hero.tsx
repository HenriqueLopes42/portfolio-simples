import Image from "next/image"

interface HeroProps {
  githubUsername: string
  name: string
  role: string
  description: string
}

export function Hero({ githubUsername, name, role, description }: HeroProps) {
  const avatarUrl = `https://github.com/${githubUsername}.png`

  return (
    // MUDANÇA: bg-background (agora controlado apenas pelo CSS)
    <section className="w-full min-h-[calc(100vh-4rem)] flex items-center justify-center bg-background transition-colors duration-300 py-10">
      
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 lg:gap-24">
          
          <div className="shrink-0 relative group">
            {/* Mantive o gradiente azul pois é estético, mas o resto é semântico */}
            <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 dark:from-gray-700 dark:to-gray-600 opacity-60 blur-md group-hover:opacity-100 transition duration-500"></div>
            
            <div className="relative h-48 w-48 md:h-72 md:w-72 overflow-hidden rounded-full border-0 border-background shadow-2xl">
              <Image
                src={avatarUrl}
                alt={`Foto de ${name}`}
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>

          <div className="flex flex-col text-center md:text-left space-y-5 max-w-2xl">
            
            <div className="inline-flex items-center justify-center md:justify-start">
              {/* Badge usando cores muted */}
              <span className="rounded-full bg-muted px-4 py-1.5 text-sm font-semibold text-foreground">
                {role}
              </span>
            </div>

            <h1 className="text-4xl font-extrabold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-foreground via-muted-foreground to-foreground">
              {name}
            </h1>

            {/* Texto de descrição usando muted-foreground */}
            <p className="text-lg text-muted-foreground md:text-xl leading-relaxed">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <a 
                href="#contato" 
                className="inline-flex h-12 items-center justify-center rounded-lg bg-foreground px-8 text-base font-medium text-background shadow-lg transition-transform hover:scale-105 hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              >
                Entrar em contato
              </a>
              <a 
                href="/projects" 
                className="inline-flex h-12 items-center justify-center rounded-lg border border-border bg-transparent px-8 text-base font-medium text-foreground shadow-sm transition-colors hover:bg-muted focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-foreground"
              >
                Ver Projetos
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}