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
    id: 'language-model-problem-solving-2025',
    date: '2025-01-15',
    category: 'research-news',
    title: 'New paper out in Current Biology',
    excerpt: 'Our work "A language model of problem solving in humans and macaque monkeys" bridges primate cognition with modern AI. Featured as cover article.',
    tags: ['LLM', 'Cognition', 'Cover article']
  },
  {
    id: 'new-students-fall-2024',
    date: '2024-09-01',
    category: 'lab-news',
    title: 'Welcoming new students',
    excerpt: 'Three new graduate students joined the lab this fall, working on OFC physiology and computational modeling.'
  },
  {
    id: 'two-preprints-june-2024',
    date: '2024-06-15',
    category: 'research-news',
    title: 'Two new preprints on arXiv',
    excerpt: '"Self-attention in transformer networks explains monkeys\' gaze pattern in Pac-Man" and "Distributed rule vectors in LLMs\' in-context learning".',
    tags: ['Transformers', 'Pac-Man', 'In-context learning']
  },
  {
    id: 'on-attention-and-value',
    date: '2024-04-10',
    category: 'commentary',
    title: 'Commentary: What attention does to value coding',
    excerpt: 'Some thoughts on a recent debate in the field about whether OFC encodes value or salience — and why the answer might be "both, on different axes".'
  },
  {
    id: 'optimal-uncertainty-2023',
    date: '2023-03-12',
    category: 'research-news',
    title: 'Optimal uncertainty estimation in Cell Reports',
    excerpt: 'Xinyao and Ruixin\'s collaborative work on uncertainty estimation concurrent with decision making is now published.'
  },
  {
    id: 'ofc-salience-2022',
    date: '2022-10-05',
    category: 'research-news',
    title: 'Reward salience dominates value coding in OFC — Nat Commun',
    excerpt: 'Wenyi and Yang\'s careful dissociation of attention and value in the orbitofrontal cortex.'
  },
  {
    id: 'sequence-wm-science-2022',
    date: '2022-02-18',
    category: 'research-news',
    title: 'Sequence working memory geometry in Science',
    excerpt: 'Collaboration with Liping Wang\'s lab uncovers the geometric structure of sequence representations in macaque PFC.'
  },
  {
    id: 'why-monkeys-blog',
    date: '2023-08-01',
    category: 'blog',
    title: 'Why we still record from monkeys',
    excerpt: 'A short post on why non-human primate electrophysiology remains essential in the era of large-scale mouse imaging and AI models.'
  }
];

const NEWS_CATEGORIES = {
  'all':           { label: 'All' },
  'research-news': { label: 'Research News' },
  'lab-news':      { label: 'Lab News' },
  'blog':          { label: 'Blog' },
  'commentary':    { label: 'Commentary' }
};
