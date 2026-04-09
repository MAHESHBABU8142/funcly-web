import type { ComponentPropsWithoutRef } from "react";

/**
 * ### Headline
 * - it is a wrapper of h2 tag
 * - it has all props of h2
 */
function Headline(props: ComponentPropsWithoutRef<"h2">) {
  return <h2 className="text-xl text-gray-200 font-medium" {...props} />;
}

type FunCardProps = {
  title: string;
  description?: string;
} & ComponentPropsWithoutRef<"li">;

/**
 * ### FunCard
 * - it is a wrapper of li tag
 * - it has all props of li and title and description
 */

function FunCard({ title, description }: FunCardProps) {
  return (
    <li className=" rounded flex flex-col app-b hover:bg-[rgba(22,22,22,0.9)] transition-all duration-300">
      <h3
        className={`px-4 text-sm text-[#f1e324f5] font-jmono bg-[rgba(22,22,22,0.75)]
       py-2 md:text-base ${description && "app-bb"}`}
      >
        {title}
      </h3>
      {description && (
        <p className="text-sm text-gray-300 px-4 py-2 md:text-base font-medium">
          {description}
        </p>
      )}
    </li>
  );
}

/**
 * ### SrcLine
 * - it is a wrapper of p tag
 * - it has all props of p
 */

function ImportLine({ children, ...props }: ComponentPropsWithoutRef<"p">) {
  return (
    <p className="font-jmono text-sm text-gray-400 md:text-base" {...props}>
      <span className="text-[#fc9e47] ">import</span> {children}
    </p>
  );
}

type FunListProps = {
  data: FunCardProps[];
} & ComponentPropsWithoutRef<"ul">;

function FunList({ data, ...props }: FunListProps) {
  return (
    <ul className="flex flex-col gap-6 md:grid md:grid-cols-3" {...props}>
      {data.map((item) => (
        <FunCard key={item.title} {...item} />
      ))}
    </ul>
  );
}

export { Headline, FunCard, FunList, ImportLine };
