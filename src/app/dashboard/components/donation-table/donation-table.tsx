export function DonationTable() {
  return (
    <section>
      {/* Desktop */}
      <div className="hidden md:flex flex-col">
        <table className="table-auto min-w-full text-left mx-auto">
          <thead className="border-b border-zinc-300">
            <tr className="px-2 py-1.5">
              <th>Nome do doador</th>
              <th>Mensagen</th>
              <th>Valor</th>
              <th>Data da doação</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-gray-100 hover:cursor-pointer px-2 py-1.5">
              <td>Edson Gaspar</td>
              <td>Gosto muito do teu trabalha</td>
              <td>1000 Kz</td>
              <td>29/06/2025</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* Mobile */}
      <div className="flex flex-col gap-1.5 md:hidden  p-6 border rounded-md">
        <h1 className="text-lg font-bold">Edson Gaspar</h1>
        <p className="tracking-wide text-zinc-500">Adoro o seu trabalho</p>
        <div className="flex justify-between">
          <h3 className="text-amber-500 font-semibold text-lg">1000</h3>
          <span className="text-zinc-500">Seg Jun 30 2025</span>
        </div>
      </div>
    </section>
  );
}
