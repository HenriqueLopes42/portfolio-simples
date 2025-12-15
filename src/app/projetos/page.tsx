import type { Metadata } from "next"
import { FolderGit2 } from "lucide-react"
import { ProjectList } from "../../../components/home/project-list"

export const metadata: Metadata = {
  title: "Projetos | Henrique Lopes",
  description: "Explore todos os meus projetos e contribuições open source.",
}

// --- CONFIGURAÇÃO ---
const GITHUB_USERNAME = "henriquelopes42" // Seu usuário
const ONLY_WITH_DESCRIPTION = false // Mude para true para esconder repos sem descrição

// Interface dos dados (mesma do componente)
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

async function getAllRepos(): Promise<Repo[]> {
  // per_page=100 é o máximo que a API do GitHub aceita por página.
  // Se você tiver mais que 100, precisaria de uma lógica de paginação, 
  // mas 100 cobre 99% dos portfólios.
  const res = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&direction=desc&per_page=100`,
    { next: { revalidate: 3600 } } // Cache de 1 hora
  )

  if (!res.ok) {
    console.error("Falha ao buscar repositórios")
    return []
  }

  let repos: Repo[] = await res.json()

  // --- FILTROS ---
  
  // 1. Filtro de Descrição (Opcional - controlado pela constante lá em cima)
  if (ONLY_WITH_DESCRIPTION) {
    repos = repos.filter(repo => repo.description && repo.description.trim() !== "")
  }

  // 2. Opcional: Remover Forks (projetos que você copiou de outros)
  // Descomente a linha abaixo se quiser mostrar apenas projetos ORIGINAIS seus
  // repos = repos.filter(repo => repo.fork === false)

  return repos
}

export default async function ProjectsPage() {
  const repos = await getAllRepos()

  return (
    <div className="container mx-auto px-4 py-12 md:py-20">
      
      {/* Cabeçalho da Página */}
      <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-muted rounded-xl text-foreground">
            <FolderGit2 className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              Meus Projetos
            </h1>
            <p className="text-muted-foreground mt-1">
              Uma coleção completa dos meus trabalhos e códigos no GitHub.
            </p>
          </div>
        </div>

        {/* Contador de Projetos */}
        <div className="bg-muted/50 px-4 py-2 rounded-full border border-border">
          <span className="font-semibold text-foreground">{repos.length}</span>
          <span className="text-muted-foreground ml-1">repositórios encontrados</span>
        </div>
      </div>

      {/* Lista de Projetos (Grid/List) */}
      {/* Aqui reutilizamos o componente que já tem toda a lógica de botões e layout */}
      <ProjectList repos={repos} />

    </div>
  )
}