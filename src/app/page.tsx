import Image from "next/image";
import { ThemeToggle } from "../../components/theme-toggle";
import { Hero } from "../../components/home/hero";
import { RecentProjects } from "../../components/home/recent-projects";

export default function Home() {
  // Variáveis centralizadas para facilitar manutenção
  const githubUser = "henriquelopes42"; // Coloque seu user correto aqui

  return (
    <main className="flex-1 items-center justify-center">

<Hero 
          githubUsername={githubUser}
          name="Luís Henrique Lopes"
          role="Full Stack Developer"
          description="Desenvolvedor apaixonado por C#, .NET e React. Transformando ideias complexas em código limpo."
        />
        
        {/* Nova Sessão Aqui */}
        <RecentProjects githubUsername={githubUser} />


        
        {/* Outras seções virão aqui */}

    </main>
  );
}
