# Phase 1 Execution Checklist

## Project Structure
- `app/`
- `components/`
- `data/`
- `lib/`
- `public/`
- `docs/`
- global style entry: `app/globals.css`

## Route Checklist
- `/`
- `/products`
- `/products/[slug]`
- `/artists`
- `/artists/[slug]`
- `/stores`
- `/events`
- `/events/[slug]`
- `/stories`
- `/stories/[slug]`
- `/about`
- `/contact`

## Component Checklist
- `site-header`
- `site-footer`
- `mobile-nav`
- `page-shell`
- `section-heading`
- `product-grid`
- `product-card`
- `artist-list`
- `artist-preview`
- `event-list`
- `event-card`
- `story-list`
- `breadcrumb`
- `filter-bar`
- `media-frame`
- `media-tile`

## Data Files
- `data/artists.ts`
- `data/products.ts`
- `data/events.ts`
- `data/stores.ts`
- `data/stories.ts`
- `data/site-settings.ts`

## Type And Utility Files
- `lib/types.ts`
- `lib/navigation.ts`
- `lib/filters.ts`
- `lib/source-status.ts`
- `lib/story-type.ts`

## Acceptance Gates
- All primary routes open
- Product detail pages open
- Artist detail pages open and show linked products
- Product detail pages link back to the artist
- Event detail pages open
- Stories detail pages open
- Mobile navigation is available
- `npm run lint` passes
- `npm run build` passes
- No obvious route breaks
- No fabricated facts in About, Contact, Stores, Artists, Products, or Events
