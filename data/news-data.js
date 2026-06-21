// Add a new post:
//   1. Create a new file:  posts/<your-slug>.md
//   2. Add an entry below with the same slug as `id`.
//
// Fields:
//   id          : slug — must match the filename (without .md) in posts/
//   date        : "YYYY-MM-DD"
//   category    : 'research-news' | 'lab-news' | 'blog' | 'commentary'
//   title       : headline
//   excerpt     : short summary on the listing page
//   tags        : (optional) array of strings
//   externalUrl : (optional) if set, card links out instead of opening post.html

const NEWS_POSTS = [
  {
    id: 'new-website-2026',
    date: '2026-05-21',
    category: 'lab-news',
    title: 'Yang Lab has a new website!',
    excerpt: 'We started a new website.'
  },
  {
    id: 'entangled-brain',
    date: '2026-05-25',
    category: 'blog',
    title: '我写了一本书！| I wrote a book! ',
    excerpt: 'This actually happened half years ago, but I just got this new website.'
  },
  {
    id: 'kashgar2026',
    date: '2026-06-15',
    category: 'blog',
    title: 'Kashgar science outreach',
    excerpt: 'I visited China’s westernmost city, and it was amazing.'
  }
  
];

const NEWS_CATEGORIES = {
  'all':           { label: 'All' },
  'research-news': { label: 'Research News' },
  'lab-news':      { label: 'Lab News' },
  'blog':          { label: 'Blog' },
  'commentary':    { label: 'Commentary' }
};
