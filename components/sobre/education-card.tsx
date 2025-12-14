interface EducationCardProps {
  degree: string
  institution: string
  period: string
  status: string
}

export function EducationCard({ degree, institution, period, status }: EducationCardProps) {
  return (
    <div className="flex flex-col md:flex-row md:items-center justify-between p-6 rounded-xl border border-border bg-card hover:bg-muted/30 transition-colors shadow-sm">
      <div>
        <h3 className="font-bold text-lg text-foreground">{degree}</h3>
        <p className="text-muted-foreground">{institution}</p>
      </div>
      
      <div className="flex items-center gap-4 mt-4 md:mt-0">
        <div className="text-left md:text-right">
          <span className="block text-sm font-medium text-foreground">{period}</span>
          <span className="text-xs text-green-600 dark:text-green-400 font-medium bg-green-100 dark:bg-green-900/30 px-2 py-0.5 rounded-full inline-block mt-1">
            {status}
          </span>
        </div>
      </div>
    </div>
  )
}