import { type LucideIcon } from "lucide-react"

interface SectionHeaderProps {
  icon: LucideIcon
  title: string
}

export function SectionHeader({ icon: Icon, title }: SectionHeaderProps) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="p-2 bg-muted rounded-lg text-foreground">
        <Icon className="h-6 w-6" />
      </div>
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
    </div>
  )
}