// Centralized data + config for the portfolio.
// Baseline design: Brittany Chiang's v4 (https://github.com/bchiang7/v4)
// — adapted with Aitor González-Marfil's content.

export const site = {
  name: 'Aitor González Marfil',
  role: 'Machine Learning & Computer Vision Engineer',
  email: 'aitorgacad@gmail.com',
  description:
    'Portfolio of Aitor González Marfil, a Machine Learning Engineer specialized in biomedical computer vision and deep learning.',
  url: 'https://aaitorg.github.io',
  attribution: {
    text: 'Design inspired by Brittany Chiang',
    url: 'https://github.com/bchiang7/v4',
  },
}

export const socialMedia = [
  { name: 'GitHub', url: 'https://github.com/AAitorG' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aitor-g' },
  { name: 'Scholar', url: 'https://scholar.google.com/citations?user=-U5HQJ8AAAAJ' },
  { name: 'Email', url: 'mailto:aitorgacad@gmail.com' },
]

export const navLinks = [
  { name: 'About', url: '#about' },
  { name: 'Experience', url: '#experience' },
  { name: 'Projects', url: '#projects' },
  { name: 'Publications', url: '#publications' },
  { name: 'Contact', url: '#contact' },
]

// Primary nav CTA (outlined button). Useful on mobile where the side
// social rail is hidden.
export const navCta = {
  name: 'LinkedIn',
  url: 'https://www.linkedin.com/in/aitor-g',
}

export const hero = {
  greeting: 'Hi, my name is',
  name: 'Aitor González Marfil.',
  tagline: 'I teach computers to see biology.',
  description:
    "I'm a Machine Learning Engineer and PhD Candidate blending computer vision and biomedical imaging. I specialize in building tools that extract meaningful insights from microscopy data.",
}

export const about = {
  heading: 'About Me',
  imageUrl: new URL('./assets/photo.jpg', import.meta.url).href,
  paragraphs: [
    "Hello! I'm Aitor, and I love building machine learning systems. My journey into ML began with a fascination for how computer vision could transform tedious scientific analysis into something faster, more scalable, and more insightful.",
    "Today, I work closely with biologists to design and deploy tailored AI pipelines. I focus on foundation models and self-supervised learning, developing methods that remain effective when data and computing resources are limited and translating cutting-edge research into practical tools.",
    "When I'm not writing code, I'm passionate about exploring how AI can make a meaningful difference in real world challenges. I'm proud to have my work featured in venues like Nature Methods and Nature Machine Intelligence.",
    "Here are a few technologies I’ve been working with recently:",
  ],
  skills: [
    'Python',
    'PyTorch',
    'Computer Vision',
    'Vision Transformers',
    'DINOv2',
    'OpenCV',
    'NumPy / Pandas',
    'Scikit-learn',
  ],
}

export const jobs = {
  heading: 'Where I’ve Worked',
  items: [
    {
      title: 'ML Engineer (PhD Research)',
      company: 'Donostia International Physics Center',
      companyShort: 'DIPC',
      url: 'https://www.dipc.org',
      range: 'Mar 2023 — Present',
      points: [
        'Developed DINOSim, an open-source bioimage analysis method using DINOv2 embeddings for robust, training-free segmentation with minimal annotations.',
        'Engineered a knowledge-distillation framework (with University of Gothenburg) that compresses large Vision Transformers for resource-constrained biomedical workflows.',
        'Designed high-throughput phenotyping software to automate structural analysis in microscopy while preserving morphological fidelity.',
        'Shipped ML methods as user-facing tools, including a napari plugin that bridges deep learning models and domain researchers.',
        'Managed large-scale PyTorch training pipelines on HPC clusters across high-volume image datasets.',
      ],
    },
    {
      title: 'ML Research Intern',
      company: 'University of Gothenburg',
      companyShort: 'GU',
      url: 'https://www.gu.se',
      range: 'May 2025 — Aug 2025',
      points: [
        'Developed self-supervised learning and model-distillation methods for microscopy image representation.',
        'Designed domain-specific distillation achieving a 27× speed-up with 99.4% fewer parameters while improving reconstruction quality.',
      ],
    },
    {
      title: 'ML Engineer (Research)',
      company: 'University of the Basque Country',
      companyShort: 'UPV/EHU',
      url: 'https://www.ehu.eus',
      range: 'Aug 2021 — Jun 2022',
      points: [
        'Built unsupervised domain-adaptation solutions across multiple electron microscopy image domains.',
        'Designed multitask networks (Python, TensorFlow/Keras, PyTorch) to improve cross-domain generalization.',
        'Result: a method that prevents model collapse on unlabeled target domains.',
      ],
    },
    {
      title: 'Machine Learning Intern',
      company: 'Donostia International Physics Center',
      companyShort: 'DIPC',
      url: 'https://www.dipc.org',
      range: 'Jun 2021 — Aug 2021',
      points: [
        'Applied deep style transfer for unsupervised domain adaptation across electron microscopy domains.',
        'Built image processing and data-science workflows in Python, TensorFlow, Keras, and PyTorch.',
        'Result: improved cross-domain generalization on held-out EM benchmarks vs single-task baselines.',
      ],
    },
    {
      title: 'NLP Engineer Intern',
      company: 'IXA Research Group',
      companyShort: 'IXA',
      url: 'http://ixa.eus/',
      range: 'Jun 2020 — Sep 2020',
      points: [
        'Fine-tuned transformer language models (PyTorch, Flair) for NER and POS tagging in underrepresented languages.',
        'Built Python client/server comunication protocols for remote execution of the deployed NLP models.',
      ],
    },
  ],
}

export const projects = {
  heading: 'Some Things I’ve Built',
  items: [
    {
      name: 'Light My Cells',
      overline: 'Featured Project',
      description:
        'Developed Dockerized self-supervised Vision Transformers for the ISBI challenge to predict four fluorescent organelle channels from label-free microscopy images.',
      tags: ['PyTorch', 'Vision Transformers', 'Docker', 'Biomedical'],
      github: null,
      external: 'https://doi.org/10.1109/ISBI56570.2024.10635818',
      image: new URL('./assets/lightmycell.png', import.meta.url).href,
    },
    {
      name: 'napari-DINOSim',
      overline: 'Featured Project',
      description:
        'A powerful napari plugin that bridges foundation models and bioimaging, leveraging DINOv2 for training-free semantic segmentation of biomedical images.',
      tags: ['Python', 'PyTorch', 'DINOv2', 'Bioimage'],
      github: 'https://github.com/AAitorG/napari-DINOSim',
      external: null,
      image: new URL('./assets/DINOSim-simplest.png', import.meta.url).href,
      imageHeight: 170,
      imageNudgeX: 48,
    },
    {
      name: 'ComparaPerfumes',
      overline: 'Side Project',
      description:
        'A full-stack price comparison platform that aggregates and analyzes perfume prices across major retailers, helping users find the best deals through a centralized dashboard.',
      tags: ['Web', 'Data Aggregation'],
      github: null,
      external: 'https://comparaperfumes.com',
      image: new URL('./assets/web_sample.png', import.meta.url).href,
    },
  ],
}

export const publications = {
  heading: 'Selected Publications',
  papers: [
    {
      title: 'BiaPy: accessible deep learning on bioimages',
      journal: 'Nature Methods',
      year: '2025',
      url: 'https://doi.org/10.1038/s41592-025-02699-y',
    },
    {
      title: 'A deep learning method that identifies cellular heterogeneity using nanoscale nuclear features',
      journal: 'Nature Machine Intelligence',
      year: '2024',
      url: 'https://doi.org/10.1038/s42256-024-00883-x',
    },
  ],
  link: {
    label: 'View full publication list',
    url: 'https://scholar.google.com/citations?user=-U5HQJ8AAAAJ',
  },
}

export const contact = {
  heading: "What's Next?",
  text: "I'm currently looking for new opportunities and collaborations in applied ML and Computer Vision. Whether you have an open role, a research idea, or just want to say hi, my inbox is always open!",
  cta: 'Say hello',
}
