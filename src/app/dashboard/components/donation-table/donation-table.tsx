export function DonationTable() {
  return (
    <table className="table-auto min-w-full text-left border border-red-500 mx-auto">
      <thead className="border-b border-zinc-300">
        <tr className="max-w-6xl">
          <th>Nome do doador</th>
          <th>Mensagen</th>
          <th>Valor</th>
          <th>Data da doação</th>
        </tr>
      </thead>
      <tbody>
        <tr className="hover:bg-gray-100 hover:cursor-pointer">
          <td>Edson Gaspar</td>
          <td>Gosto muito do teu trabalha</td>
          <td>1000 Kz</td>
          <td>29/06/2025</td>
        </tr>
      </tbody>
    </table>
  );
}
