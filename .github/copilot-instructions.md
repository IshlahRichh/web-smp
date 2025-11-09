## Quick summary for coding agents

-   Tech: React (18) + TypeScript + Vite. Entry: `src/main.tsx` -> `src/App.tsx`.
-   Build/dev: use npm scripts in `package.json`: `npm run dev` (vite), `npm run build` (runs `tsc -b && vite build`), `npm run preview`, `npm run lint`.
-   Styling: global CSS/SCSS lives under `public/assets/scss` and `src/styles/index.css`. Many components import CSS from `public/assets/css` directly in `main.tsx`.
-   State: Redux Toolkit is used. Store is configured at `src/redux/store.ts` (look for `hydrateCart()` which runs at startup). Slices live in `src/redux/features`.

## Big-picture architecture & conventions

-   App bootstrapping: `src/main.tsx` imports global styles and mounts React. `src/App.tsx` wraps the app with `Provider` (Redux) and `HelmetProvider`, and delegates routing to `src/navigation/Navigation.tsx`.
-   Pages live in `src/pages/*.tsx`. Components are under `src/components/**`. Data-only files live in `src/data/*Data.tsx` and are imported directly by components.
-   Naming: components and pages use PascalCase and `export default`. Data files export plain arrays/objects (not default classes).
-   UI: project heavily uses Bootstrap utility classes plus a custom CSS namespace (classes like `tg-booking-form-area`). Expect a mixture of inline styles and large `public/assets/scss` files.

## Important patterns agents should follow (examples)

-   Adding a new page: create `src/pages/MyPage.tsx` (default export React component) and register the route in `src/navigation/Navigation.tsx`.
-   Redux slice: put new slice in `src/redux/features/YourSlice.ts`, export default reducer, and import it into `src/redux/store.ts` to include it in the root reducer. Note: store disables serializableCheck in middleware.
-   Static assets & styles: CSS and SCSS files are under `public/assets/*` and imported in `src/main.tsx` (`../public/assets/scss/main.scss`). If you add global styles, prefer `public/assets/scss` or `src/styles/index.css` for consistency.
-   Data-driven components: follow existing `*Data.tsx` shape (see `src/data/BlogData.tsx`, `LocationData.tsx`). Components consume those exports directly.
-   Hooks: custom hooks live in `src/hooks/` (e.g., `UseProducts.ts`, `UseCartInfo.ts`). Reuse these rather than duplicating logic.

## Integration points & external deps to be careful with

-   jQuery-based libs: `jquery`, `isotope-layout`, `magnific-popup` are dependencies. When modifying components that rely on those, check for global initialization (scripts or component-level setup).
-   Date utilities: `dayjs` is available — some files use native `Date`, others use `dayjs`. Match the project's current usage in nearby files; prefer `dayjs` for portability.
-   Media & modals: `react-modal-video` and `swiper` are present. Modal and Swiper usages appear in `src/modals/VideoPopup.tsx` and various feature components.

## Build, debug, and quick checks

-   Start dev server: `npm run dev` (Vite with HMR).
-   Full build: `npm run build` (runs `tsc -b` first — be mindful of TypeScript project references and `tsconfig.*` files). If `tsc -b` fails, run `tsc --noEmit` locally to get type errors.
-   Lint: `npm run lint` (eslint configured in repo root).
-   When changing global styles or public assets, restart the dev server if Vite HMR doesn't pick up `public` modifications.

## Small contract for automated edits

-   Inputs: path(s) to edit, simple intent (UI change, add route, add slice). Prefer small, focused PRs.
-   Outputs: modified files with consistent naming and exports, no changed project-wide config unless required.
-   Error modes: watch for TypeScript errors from `tsc -b`, missing imports, or broken default exports in components.

## Quick examples from the codebase

-   Bootstrap + inline style pattern (example): `src/components/common/banner-form/BannerForm.tsx` mixes Bootstrap classes with inline React styles for quick visual adjustments — follow the same approach when scope is small.
-   Redux store: `src/redux/store.ts` imports slices from `src/redux/features/*` and dispatches `hydrateCart()` at startup.
-   Global import pattern: `src/main.tsx` imports `../public/assets/scss/main.scss` and `../public/assets/css/main.css` — do the same when introducing new global styles.

If anything in this file is unclear or you'd like more examples (routing, a specific slice, or UI patterns), tell me which area to expand and I'll update this document.
