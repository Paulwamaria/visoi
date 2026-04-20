# Website Review: visoimachineriesnakuru.netlify.app

Date: 2026-04-20
Reviewer: Codex

## Scope and method
- Attempted to load the deployed site and inspect rendered output.
- Reviewed the React source in this repository to identify UX, accessibility, SEO, and conversion issues.

## Key findings

### 1) Navigation uses full page reloads instead of SPA links (High)
The navigation uses `href` on internal routes (`/`, `/gallery`, `/contacts`) even though the app is using React Router.

**Impact**
- Extra full-page reloads.
- Worse perceived performance.
- Potential state loss between route changes.

**Recommendation**
- Replace internal `Nav.Link href` with React Router link integration (`as={Link} to="..."`).

---

### 2) Multiple images are missing `alt` text (High)
Several `img` elements have no `alt` attributes.

**Impact**
- Screen reader users lose context.
- SEO misses descriptive image metadata.

**Recommendation**
- Add concise `alt` text for all product photos and decorative images.

---

### 3) Contact information has inconsistency/typos (High)
The email appears as both `Mburujosehp383@gmail.com` and `mburujoseph383@gmail.com`.

**Impact**
- Lost enquiries and trust issues.
- Perception of low quality.

**Recommendation**
- Standardize to one verified email and phone format across all pages.

---

### 4) Social links open in same tab (Medium)
External social links in navbar do not use explicit new-tab behavior.

**Impact**
- Users can accidentally leave the site.
- Harder path back to enquiry flow.

**Recommendation**
- Add `target="_blank" rel="noopener noreferrer"` for external platforms.

---

### 5) Spelling/label quality issues in customer-facing copy (Medium)
Examples include "Maintainance" and "acebook".

**Impact**
- Reduces professionalism and trust.

**Recommendation**
- Do one proofreading pass for headings, labels, and service bullets.

---

### 6) Brand and metadata are too generic in deployed HTML (Medium)
Observed page title appears as "React App" in the deployed page shell.

**Impact**
- Weak SEO and social sharing previews.
- Lower brand discoverability.

**Recommendation**
- Use a branded `<title>` and meaningful meta description in `public/index.html`.

---

### 7) Footer image strip lacks semantic structure (Low)
Footer displays many product images but no links or captions.

**Impact**
- Looks rich visually but gives little navigational utility.

**Recommendation**
- Add captions and link each image to relevant gallery/product section.

## Quick-win priority list (next 1 week)
1. Standardize contact email + phone format site-wide.
2. Fix internal routing links to avoid reloads.
3. Add `alt` text for every image.
4. Correct visible copy errors.
5. Set branded document title and meta description.

## Notes on runtime inspection
- Direct runtime rendering could not be fully inspected in this environment because the deployment serves a JavaScript app shell and requires browser JS execution for full content.
- Source review in this repository was used for detailed findings.
