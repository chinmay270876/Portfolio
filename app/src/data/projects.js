import resumeImage from '../assets/Images/AI resume.png';
import virtualDrawingImage from '../assets/Images/virtual-drawing.png';
import webScrapingImage from '../assets/Images/web-scraping-news.png';
import artAuctionImage from '../assets/Images/art-auction.png';

/**
 * Resume text is the source for the listed projects.
 * Extra tools are included only when a checked README or source file names them.
 * Fields marked placeholder are missing and should be completed manually.
 * Virtual Drawing has no verified repository URL.
 */
export const projects = [
  {
    id: 'ai-resume-evaluator',
    title: 'AI-Powered Resume Screening',
    href: 'https://github.com/chinmay270876/Resume-Analysis',
    image: resumeImage,
    imageAlt: 'AI resume evaluation interface with resume upload, analysis, and interview tools',
    summary:
      'Parses resumes and uses AI to evaluate skills, communication, and experience, generating structured candidate assessments.',
    problem: {
      placeholder: false,
      text: 'Resumes need to be parsed so skills, communication, and experience can be evaluated into structured candidate assessments.',
    },
    solution: {
      placeholder: false,
      text: 'Built a web application that parses resumes and uses AI to evaluate skills, communication, and experience, generating structured candidate assessments. Developed Angular frontend and Node.js backend workflows for resume processing, evaluation, interview scheduling, automated email communication, and online interview access.',
    },
    tools: {
      placeholder: false,
      items: [
        'Angular',
        'TypeScript',
        'HTML',
        'CSS',
        'RxJS',
        'Node.js',
        'Express.js',
        'Multer',
        'PDF Parser',
        'ExcelJS',
        'OpenAI API',
        'GPT-4o Mini',
        'Render',
      ],
    },
  },
  {
    id: 'virtual-drawing',
    title: 'Virtual Drawing System',
    href: null,
    image: virtualDrawingImage,
    imageAlt: 'Virtual drawing canvas with color controls and a hand-tracked sketch',
    summary:
      'A computer-based platform for creating and manipulating digital art with a virtual canvas and drawing tools.',
    problem: {
      placeholder: false,
      text: 'Creating and manipulating digital art on a computer called for a virtual canvas and drawing tools.',
    },
    solution: {
      placeholder: false,
      text: 'Developed a computer-based platform for creating and manipulating digital art using a virtual canvas and drawing tools. Used machine-learning techniques such as CNN and OpenCV for image processing.',
    },
    tools: {
      placeholder: false,
      items: ['CNN', 'OpenCV'],
    },
  },
  {
    id: 'web-scraping-news',
    title: 'WebScraping-News RAG Knowledge Base',
    href: 'https://github.com/chinmay270876/WebScraping-News',
    image: webScrapingImage,
    imageAlt: 'Tech-News chatbot answering questions from a scraped news knowledge base',
    summary:
      'A Python scraping and RAG pipeline that stores news articles in SQLite and indexes them with embeddings for question answering.',
    problem: {
      placeholder: false,
      text: 'News from Times of India, Economic Times, Hindustan Times, and ChemAnalyst needs to be collected, checked, stored, and made available for AI question answering.',
    },
    solution: {
      placeholder: false,
      text: 'Built a Python web-scraping and RAG pipeline that crawls those outlets, validates articles, stores them in SQLite, and indexes the content with embeddings for AI question answering.',
    },
    tools: {
      placeholder: false,
      items: [
        'Python',
        'SQLite',
        'MySQL',
        'ChromaDB',
        'sentence-transformers',
        'all-MiniLM-L6-v2',
        'OpenAI API',
        'GPT-4o Mini',
      ],
    },
  },
  {
    id: 'art-auction',
    title: 'Art Auction System',
    href: 'https://github.com/chinmay270876/ArtAuctionProject',
    image: artAuctionImage,
    imageAlt: 'Art auction catalog with three lots, bids, and time remaining',
    summary:
      'A Django site with pages for artwork categories, future auctions, and winners, plus models for artworks and bids.',
    problem: {
      placeholder: true,
      text: 'Not yet provided. The repository has no written problem statement.',
    },
    solution: {
      placeholder: false,
      text: 'The Django project serves pages for home, paintings, sculptures, engravings, future auctions, and winners. Its models include artists, artworks with an image and price, bids, items, and bidding history tied to a user.',
    },
    tools: {
      placeholder: false,
      items: ['Python', 'Django 5.0.4', 'SQLite', 'HTML', 'CSS', 'JavaScript'],
    },
  },
];
