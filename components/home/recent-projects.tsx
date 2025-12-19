import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { ProjectList } from "./project-list"

// --- CONFIGURAÇÃO ---
const REPO_COUNT = 6
// Mude para 'true' no futuro quando quiser filtrar
const ONLY_WITH_DESCRIPTION = true 

interface Repo {
  id: number
  name: string
  description: string | null
  html_url: string
  stargazers_count: number
  forks_count: number
  language: string | null
  updated_at: string
}

interface RecentProjectsProps {
  githubUsername: string
}

async function getRepos(username: string): Promise<Repo[]> {
  // Buscamos um pouco mais (ex: 15) para garantir que, após o filtro de descrição, 
  // ainda sobram 6 projetos para mostrar.
  const fetchLimit = ONLY_WITH_DESCRIPTION ? 15 : REPO_COUNT
  
  const res = await fetch(
    `https://api.github.com/users/${username}/repos?sort=updated&direction=desc&per_page=${fetchLimit}`,
    { next: { revalidate: 3600 } }
  )

  if (!res.ok) {
    return []
  }

  const allRepos: Repo[] = await res.json()

  // --- LÓGICA DE FILTRO ---
  let filteredRepos = allRepos

  if (ONLY_WITH_DESCRIPTION) {
    filteredRepos = allRepos.filter(repo => repo.description !== null && repo.description.trim() !== "")
  }

  // Corta o array para garantir que temos exatamente a quantidade pedida (6)
  return filteredRepos.slice(0, REPO_COUNT)
}

export async function RecentProjects({ githubUsername }: RecentProjectsProps) {
  const repos = await getRepos(githubUsername)

  return (
    <section className="w-full py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Cabeçalho da Seção */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-8 md:mb-12 gap-4">
          <div className="space-y-1 text-center md:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Projetos Recentes
            </h2>
            <p className="text-muted-foreground">
              Os últimos projetos atualizados no meu GitHub.
            </p>
          </div>
          
          <Link 
            href={`https://github.com/${githubUsername}?tab=repositories`}
            target="_blank"
            className="hidden md:flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Ver todos no GitHub <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        {/* Chamamos o componente Cliente que tem os botões e o layout */}
        <ProjectList repos={repos} />

        {/* Botão Mobile */}
        <div className="mt-8 flex justify-center md:hidden">
           <Link 
            href={`https://github.com/${githubUsername}?tab=repositories`}
            target="_blank"
            className="flex items-center gap-2 text-sm font-medium text-foreground border border-border px-4 py-2 rounded-md hover:bg-muted"
          >
            Ver todos no GitHub <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

      </div>
    </section>
  )
}
