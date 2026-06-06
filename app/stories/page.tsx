import { PageShell } from "@/components/page-shell";
import { StoryList } from "@/components/story-list";
import { stories } from "@/data/stories";
import { publicOptionalText } from "@/lib/public-display";

export default function StoriesPage() {
  const visibleStories = stories.filter(
    (story) => story.type === "interview" && publicOptionalText(story.title),
  );

  return (
    <PageShell
      eyebrow="Stories"
      title="Stories gathers the voices, notes, and moving images around NAG."
      description="A quieter editorial room for interviews, field notes, press fragments, and future moving-image material."
    >
      <div className="quiet-card mb-6 grid gap-4 p-5 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-kicker">Editorial</p>
          <p className="body-copy mt-3">
            Interviews and notes gather around artists, works, and events.
          </p>
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          {visibleStories.map((story) => {
            const title = publicOptionalText(story.title);
            if (!title) return null;
            return (
              <div key={story.slug} className="border-b border-[var(--line)] pb-2 text-sm leading-6">
                <span className="font-display-en block text-[1.1rem] leading-tight md:text-xl">{title}</span>
                <span className="metadata block normal-case tracking-[0.03em]">
                  {story.type}
                </span>
              </div>
            );
          })}
        </div>
      </div>
      <div className="quiet-card body-copy mb-6 grid gap-4 p-5 md:grid-cols-2">
        <p>Stories gathers interviews, press material, moving image, and future editorial writing.</p>
        <p>Some stories begin as titles and conversations, opening further as public material becomes ready.</p>
      </div>
      <StoryList stories={stories} />
    </PageShell>
  );
}
