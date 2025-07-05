export function DonationTable() {
  const donations = [
    {
      id: "1",
      name: "Edson Gaspar",
      message: "Gosto muito do seu trabalho",
      value: "1000 Kz",
      createAt: new Date("2023-10-01T12:00:00Z"),
    },
  ];
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
            {donations.map((donation) => {
              return (
                <tr
                  className="hover:bg-gray-100 hover:cursor-pointer px-2 py-1.5"
                  key={donation.id}
                >
                  <td>{donation.name}</td>
                  <td>{donation.message}</td>
                  <td>{donation.value}</td>
                  <td>{donation.createAt.toDateString()}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/* Mobile */}
      <div className="flex flex-col gap-1.5 md:hidden  p-6 border rounded-md">
        {donations.map((donation) => {
          return (
            <div key={donation.id}>
              <h1 className="text-lg font-bold">{donation.name}</h1>
              <p className="tracking-wide text-zinc-500">{donation.message}</p>
              <div className="flex justify-between">
                <h3 className="text-amber-500 font-semibold text-lg">
                  {donation.value}
                </h3>
                <span className="text-zinc-500">
                  {donation.createAt.toDateString()}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
