import { PageShell } from "@/components/page-shell";
import { StoryList } from "@/components/story-list";
import { stories } from "@/data/stories";

export default function StoriesPage() {
  const visibleStories = stories.filter((story) => story.type === "interview");

  return (
    <PageShell
      eyebrow="Stories"
      title="Stories holds interviews, video, press material, and backstage editorial matter."
      description="Stories brings together interviews, press material, moving image, and future editorial writing."
    >
      <div className="quiet-card mb-6 grid gap-4 p-5 md:grid-cols-[0.8fr_1.2fr]">
        <div>
          <p className="section-kicker">Editorial Layer</p>
          <p className="body-copy mt-3">
            Interviews, media notes, and project writing are gathered here as a quiet editorial layer.
          </p>
        </div>
        <div className="grid gap-2 md:grid-cols-2">
          {visibleStories.map((story) => (
            <div key={story.slug} className="border-b border-[var(--line)] pb-2 text-sm leading-6">
              <span className="font-display-en block text-[1.1rem] leading-tight md:text-xl">{story.title}</span>
              <span className="metadata block normal-case tracking-[0.03em]">
                {story.type}
              </span>
            </div>
          ))}
        </div>
      </div>
      <div className="quiet-card body-copy mb-6 grid gap-4 p-5 md:grid-cols-2">
        <p>Stories gathers interviews, press material, moving image, and future editorial writing.</p>
        <p>Entries are presented as an editorial index, with details added as public material becomes available.</p>
      </div>
      <StoryList stories={stories} />
    </PageShell>
  );
}
