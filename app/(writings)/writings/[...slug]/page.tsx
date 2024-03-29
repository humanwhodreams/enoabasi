import { MdxComponents } from "@/components/mdx-components";
import { cn } from "@/lib/utils";
import { notFound } from "next/navigation";
import { ppEditorialNew } from "@/app/fonts-local";
import { writings } from "@velite/content";

interface Props {
  params: {
    slug: string[];
  };
}

const getWritingsContent = async (params: Props["params"]) =>
  writings.find((writing) => writing.slugAsParams === params?.slug?.join("/"));

export const generateStaticParams = async (): Promise<Props["params"][]> =>
  writings.map((writing) => ({ slug: writing.slugAsParams.split("/") }));

export default async function WritingsSlug({ params }: Props) {
  const writing = await getWritingsContent(params);

  if (!writing || !writing.published) {
    notFound();
  }

  return (
    <>
      <article className="space-y-8">
        <div>
          <h1
            className={cn(
              "font-normal tracking-wide",
              ppEditorialNew.className
            )}
          >
            {writing.title}
          </h1>
          {writing.description ? (
            <blockquote
              className={cn("mt-6 italic")}
            >
              {writing.description}
            </blockquote>
          ) : null}
        </div>
        <MdxComponents code={writing.body} />
      </article>
      {/* <div className="absolute top-0 right-0 hidden md:block">
        <aside className="flex-shrink-0">Some table of contents.</aside>
      </div> */}
    </>
  );
}
