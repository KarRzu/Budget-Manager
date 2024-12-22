export type CardInfoProps = {
  title: string;
  value: string | number;
  icon?: JSX.Element;
};

export function CardInfo({ title, value, icon }: CardInfoProps) {
  return (
    <>
      <div className="w-1/4  border border-gray-400 rounded-lg shadow-lg p-6 bg-white flex align-middle flex-col ml-6">
        <div>
          <h1 className="text-xl font-semibold text-gray-700">{title}</h1>
          <h2 className="text-2xl font-bold text-purple-700 mt-2">{value}</h2>
        </div>

        <div className="border rounded-full bg-purple-700 w-12 h-12 flex items-center justify-center text-white">
          {icon}
        </div>
      </div>
    </>
  );
}
