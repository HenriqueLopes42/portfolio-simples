import { Calendar, MapPin } from "lucide-react"

interface TimelineItemProps {
  role: string
  company: string
  period: string
  location: string
  description: string
  skills: string[]
}

export function TimelineItem({ role, company, period, location, description, skills }: TimelineItemProps) {
  return (
    <div className="relative pl-8 md:pl-12 py-2">
      {/* Bolinha da Timeline */}
      <span className="absolute -left-[9px] top-3 h-4 w-4 rounded-full border-2 border-background bg-foreground shadow-sm" />
      
      {/* Cabeçalho do Cargo */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
        <h3 className="text-xl font-bold text-foreground">{role}</h3>
        <span className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground bg-muted/50 px-3 py-1 rounded-full w-fit">
          <Calendar className="h-3.5 w-3.5" />
          {period}
        </span>
      </div>

      {/* Empresa e Local */}
      <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground mb-4">
         <span className="font-semibold text-foreground">{company}</span>
         <span className="hidden sm:inline">•</span>
         <span className="flex items-center gap-1">
            <MapPin className="h-3 w-3" />
            {location}
         </span>
      </div>

      {/* Descrição */}
      <p className="text-muted-foreground mb-4 leading-relaxed">
        {description}
      </p>

      {/* Tags de Skills */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill) => (
          <span 
            key={skill} 
            className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-muted text-foreground border border-border transition-colors hover:bg-muted/80"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}