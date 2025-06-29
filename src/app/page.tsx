import { Card } from "@/components/cards/card";
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  HandCoins,
  LucideHeart,
  LucideShield,
  LucideZap,
} from "lucide-react";

const cardItems = [
  {
    icon: <LucideZap className="h-8 w-8" />,
    title: "Rápido e simples",
    desciption:
      "Configure sua página em minutos e comece a receber doações imediatamente.",
  },
  {
    icon: <LucideHeart className="h-8 w-8" />,
    title: "Conexão directa",
    desciption:
      "Crie uma conexão mais próxima com seus apoiadores através de mensagens personalizadas.",
  },
  {
    icon: <LucideShield className="h-8 w-8" />,
    title: "Pagamentos seguros",
    desciption:
      "Transações protegidas e transferências automáticas para sua conta bancária.",
  },
];

export default function Home() {
  return (
    <div className="bg-gradient-to-b from-white to-amber-50 min-h-screen">
      <header className="container mx-auto h-16 text-amber-500 font-bold text-xl flex items-center px-4 py-3 ">
        <HandCoins className="w-6 h-6 mr-2" />
        <span>ApoiaDev</span>
      </header>
      <main>
        <section className="max-w-3xl mx-auto  mt-28">
          <div className="flex flex-col gap-5 items-center justify-center mb-5">
            <p className="bg-amber-100 text-sm text-amber-800 font-semibold px-3.5 py-1.5 rounded-full ">
              Plataforma para criadores de conteúdo
            </p>
            <h2 className="text-4xl text-transparent bg-gradient-to-r from-amber-600        to-amber-400 sm:text-5xl md:text-6xl bg-clip-text font-bold tracking-tight text-center">
              Monetize seu público de <br /> forma descomplicada
            </h2>
            <p className="text-center  text-lg text-zinc-800 font-light tracking-wide">
              Receba doações directamente de seus seguidores através de uma
              pagina <br /> personalizada e elegante, sem complicações
            </p>
          </div>
          <div className="flex items-center justify-center mt-10">
            <Button className="bg-amber-500 text-white w-44 h-12 hover:bg-amber-600 cursor-pointer transition-all duration-300">
              Começar agora
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </section>
        <section className="container mx-auto my-20 px-6 md:px-0">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 ">
            {cardItems.map((items) => {
              return (
                <Card
                  key={items.title}
                  icon={items.icon}
                  description={items.desciption}
                  title={items.title}
                />
              );
            })}
          </div>
        </section>
      </main>
    </div>
  );
}
