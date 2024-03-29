import React from "react";

type Props = {
  children: React.ReactNode;
};

export default function SlugWritingsLayout({ children }: Props) {
  return <section className="relative px-2 mt-12 gap-x-4 sm:px-4 md:px-8">{children}</section>;
}
