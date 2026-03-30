import data from "../data/array-methods.json";
export default function JsPage() {
  const arrayMethods = data.array_methods;
  return (
    <section className="px-4 pt-15 py-2 flex flex-col gap-4 md:px-6 md:pt-17">
      <h2 className="text-xl text-gray-200 font-medium">Array methods</h2>
      <ul className="flex flex-col gap-6 md:grid md:grid-cols-3">
        {arrayMethods.map((item) => (
          <Card key={item.title} {...item} />
        ))}
      </ul>
    </section>
  );
}

type CardProps = {
  title: string;
  description: string;
};

function Card({ title, description }: CardProps) {
  return (
    <li className=" rounded flex flex-col app-b hover:bg-[rgba(22,22,22,0.9)] transition-all duration-300">
      <h3
        className="px-4 text-sm text-yellow-300 font-jmono bg-[rgba(22,22,22,0.75)]
      app-bb py-2 md:text-base"
      >
        {title}
      </h3>
      <p className="text-sm text-gray-300 px-4 py-2 md:text-base font-medium">
        {description}
      </p>
    </li>
  );
}
