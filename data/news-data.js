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
  }
  
];

const NEWS_CATEGORIES = {
  'all':           { label: 'All' },
  'research-news': { label: 'Research News' },
  'lab-news':      { label: 'Lab News' },
  'blog':          { label: 'Blog' },
  'commentary':    { label: 'Commentary' }
};
