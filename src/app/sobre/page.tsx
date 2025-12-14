import type { Metadata } from "next"
import { Briefcase, GraduationCap } from "lucide-react"

// Importando Dados
import careerData from "../../../data/sobre/career.json"
import educationData from "../../../data/sobre/education.json"


// Importando Componentes
import { SectionHeader } from "../../../components/sobre/section-header"
import { TimelineItem } from "../../../components/sobre/timeline-item"
import { EducationCard } from "../../../components/sobre/education-card"

export const metadata: Metadata = {
  title: "Sobre | Henrique Lopes",
  description: "Minha trajetória profissional e acadêmica.",
}

// --- 1. DEFINIR OS TIPOS (INTERFACES) ---
interface CareerItem {
  id: number
  role: string
  company: string
  period: string
  location: string
  description: string
  skills: string[]
}

interface EducationItem {
  id: number
  degree: string
  institution: string
  period: string
  status: string
}

export default function AboutPage() {
  // --- 2. FORÇAR A TIPAGEM (CASTING) ---
  // Dizemos ao TypeScript: "Confie em mim, isso é uma lista de CareerItem"
  const careerList = careerData as unknown as CareerItem[]
  const educationList = educationData as unknown as EducationItem[]

  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-4xl">
      
      {/* 1. Introdução */}
      <section className="mb-16 text-center md:text-left">
        <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl mb-6">
          Sobre Mim
        </h1>
        <div className="prose dark:prose-invert max-w-none text-muted-foreground text-lg leading-relaxed space-y-4">
          <p>
            Olá! Sou o Henrique, um desenvolvedor apaixonado por transformar problemas complexos em soluções simples e eficazes. Com foco no ecossistema .NET e tecnologias modernas de Front-end, busco sempre escrever código limpo e escalável.
          </p>
          <p>
            Atualmente, estou focado em aprimorar meus conhecimentos em arquitetura de software e contribuir para projetos que tenham impacto real. Quando não estou codando, provavelmente estou explorando novas tecnologias ou desenvolvendo projetos pessoais para a comunidade.
          </p>
        </div>
      </section>

      {/* 2. Experiência Profissional */}
      <section className="mb-16">
        <SectionHeader icon={Briefcase} title="Experiência Profissional" />

        <div className="relative border-l-2 border-border ml-3 md:ml-4 space-y-8">
          {/* Usamos a variável tipada careerList agora */}
          {careerList.map((job) => (
            <TimelineItem
              key={job.id}
              role={job.role}
              company={job.company}
              period={job.period}
              location={job.location}
              description={job.description}
              skills={job.skills}
            />
          ))}
        </div>
      </section>

      {/* 3. Formação Acadêmica */}
      <section>
        <SectionHeader icon={GraduationCap} title="Formação Acadêmica" />

        <div className="grid gap-6">
          {/* Usamos a variável tipada educationList agora */}
          {educationList.map((edu) => (
            <EducationCard
              key={edu.id}
              degree={edu.degree}
              institution={edu.institution}
              period={edu.period}
              status={edu.status}
            />
          ))}
        </div>
      </section>

    </div>
  )
}