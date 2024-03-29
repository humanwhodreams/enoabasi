import { WritingCard } from "./writing-card";
import { sortWritings } from "@/utils/fns";
import { writings } from "@velite/content";

export async function WritingsFeed() {
  const sortedWritings = sortWritings(
    writings.filter((writing) => writing.published)
  );

  return (
    <div>
      {sortedWritings?.length > 0 ? (
        <ul>
          {sortedWritings?.map((writing) => (
            <li key={writing.slug}>
              <WritingCard
                slug={writing.slug}
                title={writing.title}
                date={writing.date}
              />
            </li>
          ))}
        </ul>
      ) : (
        <p>Oops... no writings currently</p>
      )}
    </div>
  );
}
