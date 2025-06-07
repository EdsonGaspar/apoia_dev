interface CardDashBoardProps {
  title: string;
  helpersContent: string;
  icons: React.ReactNode;
  count: number;
}
export function CardDashBoard({
  title,
  helpersContent,
  icons,
  count,
}: CardDashBoardProps) {
  return (
    <div className="space-y-8 p-6 bg-gradient-to-br from-zinc-900 to-zinc-800 text-white rounded-2xl">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-lg font-medium">{title}</h2>
          <p className="text-zinc-300 text-sm ">{helpersContent}</p>
        </div>
        <span>{icons}</span>
      </div>
      <p className="text-3xl font-bold ">{count}</p>
    </div>
  );
}
