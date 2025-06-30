import { DollarSign, UsersIcon, Wallet } from "lucide-react";
import { CardDashBoard } from "./components/card/cardDashboard";
import { HeaderDesktop } from "./components/header";
import { DonationTable } from "./components/donation-table/donation-table";

export default function PageDashBoard() {
  const cardItems = [
    {
      title: "Apoiadores",
      helpersContent: "Total de apoiadores",
      icons: <UsersIcon className="w-9 h-9 text-blue-400 font-medium" />,
      count: 0,
    },
    {
      title: "Total recebido",
      helpersContent: "Quantidade de total recebido",
      icons: <DollarSign className="w-9 h-9 text-yellow-500 font-medium" />,
      count: 0,
    },
    {
      title: "Salde em conta",
      helpersContent: "Saldo pendente",
      icons: <Wallet className="w-9 h-9 text-green-600 font-medium" />,
      count: 0,
    },
  ];
  return (
    <>
      <HeaderDesktop />
      <section className="container mx-auto p-6 space-y-5">
        <h3 className="text-2xl font-semibold">Minha conta</h3>
        <div className="grid md:grid-cols-3 gap-3">
          {cardItems.map((itemCard) => {
            return (
              <CardDashBoard
                key={itemCard.title}
                title={itemCard.title}
                icons={itemCard.icons}
                helpersContent={itemCard.helpersContent}
                count={itemCard.count}
              />
            );
          })}
        </div>
      </section>
      <section className="container mx-auto p-6 my-5">
        <DonationTable />
      </section>
    </>
  );
}
