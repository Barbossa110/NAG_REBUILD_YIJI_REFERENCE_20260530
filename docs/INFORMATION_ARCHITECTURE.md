# Information Architecture: Nearly Anything Goes / NAG

## Site Map
- Home `/`
- Products `/products`
  - Product Detail `/products/[slug]`
- Artists `/artists`
  - Artist Detail `/artists/[slug]`
- Stores `/stores`
- Events `/events`
  - Event Detail `/events/[slug]`
- Stories `/stories`
  - Story Detail `/stories/[slug]`
- About `/about`
- Contact `/contact`

## Navigation Model
- Primary navigation:
  - 产品 / Products
  - 艺术家 / Artists
  - 店铺地址 / Stores
  - 艺术事件 / Events
  - 关于 / About
  - 联系我们 / Contact
- Secondary navigation:
  - Stories as a parallel editorial route outside the main six-item channel set
  - Filter bars on `/products`, `/artists`, and `/events`
  - Breadcrumbs on all detail pages
- Utility navigation:
  - Home logo
  - Footer recap navigation
- Mobile navigation:
  - Drawer-style menu triggered from the header
  - Same primary route order preserved

## Content Hierarchy

### Home
1. Hero / manifesto
2. Featured products
3. Featured artists
4. Current and upcoming events
5. Store status
6. Stories
7. About NAG
8. Contact entry

### Products
1. Filter state
2. Product grid
3. Quiet metadata
4. Placeholder price reveal on hover

### Product Detail
1. Main image
2. Title and artist
3. Year / medium / dimensions / price placeholder
4. Description
5. Artist link
6. Previous / next
7. Related products

### Artists
1. Artist index
2. Portrait and identity
3. Short biography
4. Medium / city structure

### Artist Detail
1. Artist identity block
2. Verified portrait or placeholder
3. Biography
4. Linked products
5. Related events

### Events
1. Status filtering
2. Event dossier cards
3. Image / video placeholder zones

### Event Detail
1. Key visual
2. Time / city / location / status
3. Related artists
4. Related products
5. Media reserve area

### Stories
1. Story type
2. Title
3. Summary
4. Related entities

### About
1. Confirmed mission line
2. Brand profile
3. Positioning
4. Space outlook

### Contact
1. Verified email if available
2. Placeholder phone/contact fields
3. Placeholder media collaboration path

## User Flows

### Browse a Product
1. User lands on `/` or `/products`
2. User sees featured or filtered product grid
3. User opens `/products/[slug]`
4. User can move to the artist profile or adjacent products

### Browse an Artist
1. User lands on `/artists`
2. User filters by medium or city
3. User opens `/artists/[slug]`
4. User sees products and related event links

### Browse an Event
1. User lands on `/events`
2. User filters by status
3. User opens `/events/[slug]`
4. User reviews related artists, products, and media placeholders

### Enter Through Editorial
1. User lands on `/stories`
2. User opens a story detail page
3. User moves into artist, product, or event channels through related entities

## Naming Conventions
| Concept | Label in UI | Notes |
|---|---|---|
| Product channel | 产品 / Products | Do not revert to Works |
| Event channel | 艺术事件 / Events | Do not revert to Exhibitions as the primary route name |
| Story layer | Stories | Editorial content, interviews, press, and moving image |
| Missing content | PLACEHOLDER / needs confirmation / source missing | Must stay explicit |

## Component Reuse Map
| Component | Used on | Behavior differences |
|---|---|---|
| `SiteHeader` | All pages | Active state varies by route |
| `SiteFooter` | All pages | Same recap structure |
| `PageShell` | Listing and static pages | Shared headline pattern |
| `Breadcrumb` | Detail pages | Route-specific trail |
| `FilterBar` | Products, artists, events | Different query keys |
| `MediaTile` | Home, cards, detail pages | Falls back to placeholder if asset missing |

## Content Growth Plan
- Products: will grow fastest; structure already supports filtering and detail pages.
- Artists: fixed-to-slow growth; profile structure should stay editorial.
- Events: dossier model supports current, upcoming, and past growth.
- Stories: open-ended archive for press, interviews, and moving image.
- Stores: likely low-frequency updates but must remain source-verified.

## URL Strategy
- Pattern:
  - `/section`
  - `/section/[slug]`
- Dynamic segments:
  - product slug
  - artist slug
  - event slug
  - story slug
- Query parameters:
  - products: `artist`, `series`, `medium`
  - artists: `medium`, `city`
  - events: `status`
- Rule:
  - Filter state should be shareable and refresh-safe.
