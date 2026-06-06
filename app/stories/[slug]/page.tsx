import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumb } from "@/components/breadcrumb";
import { stories } from "@/data/stories";
import { storyTypeLabel } from "@/lib/story-type";
import {
  getArtistsBySlugs,
  getEventsBySlugs,
  getProductsBySlugs,
  getStoryBySlug,
} from "@/lib/filters";
import { publicOptionalText } from "@/lib/public-display";

type StoryDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return stories
    .filter((story) => publicOptionalText(story.title))
    .map((story) => ({ slug: story.slug }));
}

export default async function StoryDetailPage({ params }: StoryDetailPageProps) {
  const { slug } = await params;
  const story = getStoryBySlug(slug);

  if (!story) {
    notFound();
  }

  const title = publicOptionalText(story.title);
  if (!title) {
    notFound();
  }

  const relatedArtists = getArtistsBySlugs(story.relatedArtists);
  const relatedProducts = getProductsBySlugs(story.relatedProducts);
  const relatedEvents = getEventsBySlugs(story.relatedEvents);
  const date = publicOptionalText(story.date);
  const body = publicOptionalText(story.body);

  return (
    <main className="fine-rule section-space">
      <div className="editorial-shell max-w-4xl">
        <Breadcrumb
          items={[
            { label: "Stories", href: "/stories" },
            { label: title },
          ]}
        />
        <p className="section-kicker">{storyTypeLabel(story.type)}</p>
        <h1 className="mt-4 font-display-en text-[2.3rem] leading-[0.98] tracking-[-0.035em] md:text-[4.6rem]">
          {title}
        </h1>
        {date ? (
          <div className="metadata mt-6 flex flex-wrap gap-x-4 gap-y-2 normal-case tracking-[0.03em]">
            <span>{date}</span>
          </div>
        ) : null}
        {body ? (
          <div className="mt-10 border-t border-[var(--line)] pt-8">
            <p className="body-large">{body}</p>
          </div>
        ) : null}
        <div className="mt-12 grid gap-6 border-t border-[var(--line)] pt-8 md:grid-cols-3">
          <MetaList
            title="Artists"
            items={relatedArtists.map((artist) => ({
              label: artist.nameZh,
              href: `/artists/${artist.slug}`,
            }))}
          />
          <MetaList
            title="Works"
            items={relatedProducts.map((product) => ({
              label: product.displayTitle,
              href: `/products/${product.slug}`,
            }))}
          />
          <MetaList
            title="Events"
            items={relatedEvents.map((event) => ({
              label: event.title,
              href: `/events/${event.slug}`,
            }))}
          />
        </div>
      </div>
    </main>
  );
}

function MetaList({
  title,
  items,
}: {
  title: string;
  items: { label: string; href: string }[];
}) {
  return (
    <div>
      <p className="section-kicker">{title}</p>
      <div className="mt-4 space-y-2 body-copy">
        {items.length ? (
          items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block border-b border-[var(--line)] pb-2"
            >
              {item.label}
            </Link>
          ))
        ) : (
          <p>暂未公布</p>
        )}
      </div>
    </div>
  );
}
