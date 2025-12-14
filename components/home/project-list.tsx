"use client"

import { useState } from "react"
import Link from "next/link"
import { Star, GitFork, ArrowUpRight, LayoutGrid, List } from "lucide-react"

// Tipagem dos dados que vêm do servidor
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

interface ProjectListProps {
  repos: Repo[]
}

export function ProjectList({ repos }: ProjectListProps) {
  // Estado para controlar a visualização: 'grid' ou 'list'
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")

  const languageColors: Record<string, string> = {
    TypeScript: "bg-blue-500",
    JavaScript: "bg-yellow-400",
    "C#": "bg-green-600",
    Python: "bg-blue-600",
    HTML: "bg-orange-500",
    CSS: "bg-purple-500",
    Vue: "bg-emerald-500",
    Dart: "bg-cyan-500",
  }

  return (
    <div>
      {/* Botões de Alternância (Toggle) */}
      <div className="flex justify-end mb-6 gap-2">
        <button
          onClick={() => setViewMode("grid")}
          className={`p-2 rounded-md transition-colors ${
            viewMode === "grid"
              ? "bg-foreground text-background"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
          aria-label="Visualização em Grade"
        >
          <LayoutGrid className="h-5 w-5" />
        </button>
        <button
          onClick={() => setViewMode("list")}
          className={`p-2 rounded-md transition-colors ${
            viewMode === "list"
              ? "bg-foreground text-background"
              : "bg-muted text-muted-foreground hover:bg-muted/80"
          }`}
          aria-label="Visualização em Lista"
        >
          <List className="h-5 w-5" />
        </button>
      </div>

      {/* Container dos Projetos */}
      <div
        className={`grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" // Layout Grade
            : "grid-cols-1" // Layout Lista (1 por linha)
        }`}
      >
        {repos.map((repo) => (
          <Link
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            className={`
              group relative flex rounded-xl border border-border bg-background transition-all hover:border-foreground/50 hover:shadow-md
              ${
                viewMode === "grid"
                  ? "flex-col justify-between p-6" // Estilo Card Vertical
                  : "flex-col md:flex-row md:items-center p-6 gap-6" // Estilo Lista Horizontal
              }
            `}
          >
            {/* Conteúdo Principal */}
            <div className={`${viewMode === "list" ? "flex-1" : "w-full"}`}>
              <div className="flex items-center justify-between mb-2 md:mb-4">
                <h3 className="font-semibold text-lg text-foreground group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                  {repo.name}
                </h3>
                {viewMode === "grid" && (
                  <div className="p-2 rounded-full bg-muted text-foreground opacity-0 group-hover:opacity-100 transition-opacity absolute top-4 right-4">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                )}
              </div>

              <p
                className={`text-muted-foreground text-sm ${
                  viewMode === "grid" ? "line-clamp-3 h-[60px]" : ""
                }`}
              >
                {repo.description || "Sem descrição disponível para este projeto."}
              </p>
            </div>

            {/* Rodapé / Meta dados */}
            <div
              className={`
              flex items-center gap-4 text-xs text-muted-foreground
              ${
                viewMode === "grid"
                  ? "w-full justify-between pt-4 mt-auto border-t border-border/50"
                  : "w-full md:w-auto md:flex-col md:items-end md:justify-center md:gap-2 mt-4 md:mt-0"
              }
            `}
            >
              {repo.language && (
                <span className="flex items-center gap-1.5">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${
                      languageColors[repo.language] || "bg-gray-500"
                    }`}
                  />
                  {repo.language}
                </span>
              )}

              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1">
                  <Star className="h-3.5 w-3.5" />
                  {repo.stargazers_count}
                </span>
                <span className="flex items-center gap-1">
                  <GitFork className="h-3.5 w-3.5" />
                  {repo.forks_count}
                </span>
              </div>
              
              {viewMode === "list" && (
                 <div className="hidden md:block">
                     <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-foreground transition-colors"/>
                 </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}