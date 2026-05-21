# T. Yang Lab Website

Static site, no build step. Edit Markdown files and push to GitHub Pages.

## Adding a new news post / blog / commentary

**Step 1.** Create the post body as a Markdown file in `posts/`:

    posts/my-new-post-2025.md

**Step 2.** Add an entry to `NEWS_POSTS` in `data/news-data.js` with the same slug:

    {
      id: 'my-new-post-2025',          // must match the filename
      date: '2025-06-01',
      category: 'blog',                 // 'research-news' | 'lab-news' | 'blog' | 'commentary'
      title: 'My new post',
      excerpt: 'One-sentence teaser shown on the listing page.',
      tags: ['optional', 'tags']
    }

That's it. The post will appear on `news.html` and render at `post.html?id=my-new-post-2025`.

### External link posts

For announcements that should link out (e.g. a preprint page) instead of opening a full post, add `externalUrl: 'https://...'` to the entry in `news-data.js`. You don't need a `.md` file in that case.

## Markdown features supported

Standard CommonMark via [marked](https://marked.js.org/): headings, lists, links, images, blockquotes, code blocks, tables, etc. Custom styling lives in `css/styles.css` under `.prose-post`.

## Other content

- **Publications:** edit `data/publications-data.js`
- **People:** edit `data/people-data.js`
- **Navigation / footer:** edit `js/nav.js` (one place — applies to all pages)

## Running locally

Markdown files are loaded via `fetch()`, which does **not** work when opening HTML files directly with `file://`. Run a tiny local server:

    python3 -m http.server 8000

Then visit `http://localhost:8000`. On GitHub Pages this works automatically — no server setup needed.

## Deploying to GitHub Pages

1. Create a repo named `<your-username>.github.io`, or any repo with Pages enabled.
2. Commit and push all files (including the `posts/` folder).
3. In repo Settings → Pages, set source to `main` branch, root.
4. Site will be live at `https://<your-username>.github.io/`.
