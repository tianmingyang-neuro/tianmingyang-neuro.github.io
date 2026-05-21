// Add a publication: append to PUBLICATIONS.
// fields: year, authors, title, journal, journalTier ('top'|'specialty'), topic, url
const PUBLICATIONS = [
  {
    year: 2026,
    authors: 'Zheng B.*, Ma, M.*, ..., Yang, T.#',
    title: 'Label Words as Local Task Vectors in In-Context Learning',
    journal: 'ACL Findings',
    journalType: 'conference',
    topic: 'AI',
    url: 'https://arxiv.org/abs/2406.16007'
  },
  {
    year: 2025,
    authors: 'Yang, Q.*#, Zhu, Z.*, ..., Yang, T.#',
    title: 'A language model of problem solving in humans and macaque monkeys',
    journal: 'Current Biology',
    journalType: '',
    topic: 'cognition computational problem',
    url: 'https://www.sciencedirect.com/science/article/pii/S096098222401501X'
  },
  {
    year: 2025,
    authors: 'Wang, Z.*, X..., Yang, T., Dai W-Z#',
    title: 'From End-to-end to Step-by-step: Learning to Abstract via Abductive Reinforcement Learning',
    journal: 'IJCAI',
    journalType: 'conference',
    topic: 'AI',
    url: 'https://www.ijcai.org/proceedings/2025/725'
  },
  {
    year: 2023,
    authors: 'Liu, X.*, Su, R.*, Chen, Y., Yang, T.#',
    title: 'Optimal uncertainty estimation concurrent with decision making',
    journal: 'Cell Reports',
    journalType: '',
    topic: 'decision computational',
    url: 'https://www.sciencedirect.com/science/article/pii/S2211124723002437'
  },
  {
    year: 2022,
    authors: 'Zhang, W.*, Xie, Y.*, Yang, T.#',
    title: 'Reward salience dominates value coding in the orbitofrontal cortex',
    journal: 'Nature Communications',
    journalType: '',
    topic: 'value',
    url: 'https://www.nature.com/articles/s41467-022-34084-0'
  },
  {
    year: 2022,
    authors: 'Zhang, Z.*, Yin C., Yang, T.#',
    title: 'Evidence accumulation occurs locally in the parietal cortex',
    journal: 'Nature Communications',
    journalType: '',
    topic: 'decision',
    url: 'https://www.nature.com/articles/s41467-022-32210-6'
  },
  {
    year: 2022,
    authors: 'Chen, X.*, Li, X.*, Zhou Y.#, Yang, T.#',
    title: 'DDDM: a Brain-Inspired Framework for Robust Classification',
    journal: 'IJCAI',
    journalType: 'conference',
    topic: 'AI',
    url: 'https://www.ijcai.org/proceedings/2022/397'
  },
  {
    year: 2021,
    authors: 'Yang, Q.*, ..., Yang, T.#',
    title: 'Monkey plays Pac-Man with compositional strategies and hierarchical decision-making',
    journal: 'eLife',
    journalType: '',
    topic: 'cognition problem computational',
    url: 'https://elifesciences.org/articles/74500'
  },{
    year: 2020,
    authors: 'Lin, Z.*, Nie C.*, Zhang, Y.*, Yang, T.#',
    title: 'Evidence accumulation for value computation in the prefrontal cortex during decision making',
    journal: 'PNAS',
    journalType: '',
    topic: 'decision value',
    url: 'https://www.pnas.org/doi/abs/10.1073/pnas.2019077117'
  },
  {
    year: 2020,
    authors: 'Lin, Z.*, Nie C.*, Zhang, Y.*, Yang, T.#',
    title: 'A recurrent neural network framework for flexible and adaptive decision making based on sequence learning',
    journal: 'PLoS Computational Biology',
    journalType: '',
    topic: 'decision computational cognition',
    url: 'https://journals.plos.org/ploscompbiol/article?id=10.1371/journal.pcbi.1008342'
  }
];

const PUB_TOPICS = {
  'all':           'All',
  'decision':      'Decision Making',
  'problem':	   'Problem Solving',
  'value':         'Value',
  'computational': 'Computational Models',
  'cognition':     'Cognition',
  'AI':			   'AI'
};
