import type { ComponentPropsWithoutRef } from "react";

export default function Page(props: ComponentPropsWithoutRef<"section">) {
  return (
    <section
      className="px-4 pt-15 py-2 flex flex-col gap-4 md:px-6 md:pt-17"
      {...props}
    />
  );
}
