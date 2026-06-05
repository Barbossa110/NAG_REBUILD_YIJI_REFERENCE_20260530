import Link from "next/link";
import { storyTypeLabel } from "@/lib/story-type";
import { publicOptionalText } from "@/lib/public-display";
import type { Story } from "@/lib/types";

export function StoryList({ stories }: { stories: Story[] }) {
  const publicStories = stories.filter((story) => publicOptionalText(story.title));

  return (
    <div className="grid gap-x-10 gap-y-8 md:grid-cols-2">
      {publicStories.map((story, index) => {
        const title = publicOptionalText(story.title);
        const summary = publicOptionalText(story.summary);

        return (
          <Link
            key={story.slug}
            href={`/stories/${story.slug}`}
            className="story-index-card block"
          >
            <div className="flex items-start justify-between gap-6">
              <div className="space-y-3">
                <p className="section-kicker">{storyTypeLabel(story.type)}</p>
                <h3 className="font-display-en text-[1.75rem] leading-[1.02] tracking-[-0.03em] md:text-[2.1rem]">
                  {title}
                </h3>
              </div>
              <span className="index-mark">{String(index + 1).padStart(2, "0")}</span>
            </div>
            {summary ? (
              <p className="body-copy mt-4 max-w-[56ch]">{summary}</p>
            ) : null}
          </Link>
        );
      })}
    </div>
  );
}
