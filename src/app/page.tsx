import { Button } from "@/components/ui/button";
import { ArrowRight, HandCoins } from "lucide-react";

export default function Home() {
  return (
    <div className="h-screen bg-gradient-to-b from-white to-amber-50">
      <header className="h-16">
        <HandCoins />
        <span>ApoiaDev</span>
      </header>
      <main>
        <section>
          <p>Plataforma criada para conteúdo</p>
          <h2>Monetize seu publico de forma descomplicada</h2>
          <p>
            Receba doações directamente de seus seguidores através de uma pagina
            personalizada e elegante, sem complicações
          </p>
          <Button>
            Começar agora
            <ArrowRight className="w-4 h-4" />
          </Button>
        </section>
      </main>
    </div>
  );
}
