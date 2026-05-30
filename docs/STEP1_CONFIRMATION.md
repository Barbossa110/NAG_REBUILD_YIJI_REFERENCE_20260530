# Step 1 Confirmation Report

## Website Positioning
- Nearly Anything Goes / NAG is treated as an art product showcase, artist index, event archive, and brand-space platform.
- Phase 1 is a high-end front-end presentation build, not a commerce site, not a SaaS shell, and not a CMS build.

## Visual Direction
- Direction: `Warm Editorial Brutalism`
- Keywords:
  - warm paper
  - editorial grid
  - cultural archive
  - contemporary art platform
  - restrained luxury
  - black typography
  - fine border
  - large type
  - quiet motion
  - mobile first

## Navigation Structure
- Primary navigation:
  - 产品 / Products -> `/products`
  - 艺术家 / Artists -> `/artists`
  - 店铺地址 / Stores -> `/stores`
  - 艺术事件 / Events -> `/events`
  - 关于 / About -> `/about`
  - 联系我们 / Contact -> `/contact`
- Secondary route:
  - Stories -> `/stories`

## Route Rules
- The rebuild does not use `/works` or `/exhibitions` as primary route names.
- The Phase 1 route set is:
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

## Technical Route
- New project path:
  - `/Users/barbossa/Documents/NAG_REBUILD_YIJI_REFERENCE_20260530`
- Stack for this round:
  - Next.js
  - TypeScript
  - Tailwind CSS
  - App Router
  - local `data/*.ts`

## Explicitly Out Of Scope
- No CMS
- No Payload CMS
- No AI classification service
- No shopping cart
- No payment
- No inquiry system
- No old-project patching

## Source Policy
- Only PDF, DOCX, and local asset material from the fact-source folders can become real front-end content.
- Any missing field must stay explicit:
  - `PLACEHOLDER`
  - `needs confirmation`
  - `source missing`
- No fabricated artist story, product data, event details, address, or contact information.

## Seven-Step Execution Snapshot
1. Confirm goals, navigation, routes, stack, and prohibitions.
2. Define the Phase 1 engineering checklist.
3. Create a clean new project in the rebuild path.
4. Build the front-end route and component skeleton.
5. Refine the interface toward the Yiji-inspired editorial art-platform quality.
6. Generate local fact-source indexes and mapping documents.
7. Replace placeholders only where facts are confirmed and keep the rest explicit.
