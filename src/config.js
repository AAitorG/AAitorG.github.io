// Centralized data + config for the portfolio.
// Baseline design: Brittany Chiang's v4 (https://github.com/bchiang7/v4)
// — adapted with Aitor González-Marfil's content.

export const site = {
  name: 'Aitor González Marfil',
  role: 'Machine Learning & Computer Vision Engineer',
  email: 'aitorgacad@gmail.com',
  description:
    'Portfolio of Aitor González Marfil, a Machine Learning & Computer Vision Engineer specializing in deep learning, Vision Transformers, and self-supervised learning.',
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
    "I'm a Machine Learning & Computer Vision Engineer (PhD Candidate) specializing in deep learning and self-supervised vision models. I build tools that helps scientists analyze and understand complex biological data.",
}

export const about = {
  heading: 'About Me',
  imageUrl: new URL('./assets/photo.jpg', import.meta.url).href,
  paragraphs: [
    "Hello! I'm Aitor, and I love building machine learning systems. My journey into ML began with a fascination for how computer vision could transform tedious scientific analysis into something faster, more scalable, and more insightful.",
    "Today, I design and deploy end-to-end deep learning pipelines for real-world scientific workflows. I focus on building methods that perform reliably under scarce labels and strict compute constraints, and shipping them as open-source tools. I'm proud to have my work published in venues like Nature Methods and Nature Machine Intelligence.",
    "When I'm not writing code, I'm passionate about exploring how AI can make a meaningful difference in real world challenges.",
    "Here are a few technologies I've been working with recently:",
  ],
  skills: [
    'Python',
    'PyTorch',
    'Deep Learning',
    'Computer Vision',
    'Vision Transformers',
    'Foundation Models',
    'Self-Supervised Learning',
    'Knowledge Distillation',
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
        'Developed PhenoMe, an open-source phenotyping framework that combines foundation-model embeddings with classical computer vision for automated, dataset-agnostic image analysis.',
        'Engineered a knowledge-distillation framework (with University of Gothenburg) to compress large Vision Transformers into lightweight models for compute-constrained deployment.',
        'Developed DINOSim, an open-source bioimage analysis method using DINOv2 embeddings for robust, training-free segmentation with minimal annotations.',
        'Packaged and shipped deep learning methods as user-facing Python tools and interactive napari plugins, enabling non-technical users to run inference out of the box.',
        'Built and scaled PyTorch training and data-processing pipelines on HPC clusters across high-volume image datasets.',
      ],
    },
    {
      title: 'ML Research Intern',
      company: 'University of Gothenburg',
      companyShort: 'GU',
      url: 'https://www.gu.se',
      range: 'May 2025 — Aug 2025',
      points: [
        'Developed self-supervised learning and knowledge-distillation methods for image representation.',
        'Compressed Vision Transformer architectures to achieve a 27x inference speed-up with 99.4% fewer parameters while improving reconstruction quality.',
      ],
    },
    {
      title: 'ML Engineer (Research)',
      company: 'University of the Basque Country',
      companyShort: 'UPV/EHU',
      url: 'https://www.ehu.eus',
      range: 'Aug 2021 — Jun 2022',
      points: [
        'Built unsupervised domain-adaptation pipelines across multi-domain electron microscopy volumes to handle severe distribution shifts.',
        'Designed multi-task neural architectures in PyTorch and TensorFlow/Keras that prevented model collapse on unlabeled target domains and improved cross-domain generalization.',
      ],
    },
    {
      title: 'Machine Learning Intern',
      company: 'Donostia International Physics Center',
      companyShort: 'DIPC',
      url: 'https://www.dipc.org',
      range: 'Jun 2021 — Aug 2021',
      points: [
        'Implemented deep style-transfer models for unsupervised domain adaptation across electron microscopy datasets.',
        'Built end-to-end image processing and evaluation workflows in Python (PyTorch, TensorFlow/Keras), outperforming single-task baselines on held-out cross-domain benchmarks.',
      ],
    },
    {
      title: 'NLP Engineer Intern',
      company: 'IXA Research Group',
      companyShort: 'IXA',
      url: 'http://ixa.eus/',
      range: 'Jun 2020 — Sep 2020',
      points: [
        'Fine-tuned large language models (PyTorch, Flair) for Named Entity Recognition (NER) and Part-of-Speech (POS) tagging in underrepresented languages.',
        'Engineered Python client-server communication protocols for remote execution of deployed NLP models.',
      ],
    },
  ],
}

export const projects = {
  heading: 'Some Things I’ve Built',
  items: [
    {
      name: 'PhenoMe',
      overline: 'Featured Project',
      description:
        'An open-source, dataset- and model-agnostic phenotyping framework that combines deep learning embeddings with classical computer vision features to analyze large-scale microscopy datasets.',
      tags: ['Python', 'Phenotyping', 'Interactive', 'Bioimage'],
      github: 'https://github.com/PhenoMe-Ecosystem/PhenoMe',
      external: 'https://phenome-ecosystem.github.io/PhenoMe/',
      image: new URL('./assets/phenome.png', import.meta.url).href,
    },
    {
      name: 'napari-DINOSim',
      overline: 'Featured Project',
      description:
        'An interactive napari plugin bringing foundation models to bioimaging, leveraging DINOv2 for training-free semantic segmentation of biomedical images.',
      tags: ['Python', 'PyTorch', 'DINOv2', 'Segmentation'],
      github: 'https://github.com/AAitorG/napari-DINOSim',
      external: null,
      image: new URL('./assets/DINOSim-simplest.png', import.meta.url).href,
      imageHeight: 158,
      imageNudgeX: 48,
    },
    {
      name: 'Light My Cells',
      overline: 'Featured Project',
      description:
        'Dockerized self-supervised Vision Transformers built for the IEEE ISBI challenge to predict four fluorescent organelle channels from label-free microscopy images.',
      tags: ['PyTorch', 'Vision Transformers', 'Self-Supervised', 'Docker'],
      github: null,
      external: 'https://doi.org/10.1109/ISBI56570.2024.10635818',
      image: new URL('./assets/lightmycell.png', import.meta.url).href,
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
  text: "I'm currently looking for new opportunities and collaborations in applied ML and Computer Vision. Whether you have an open position, a project in mind, or just want to say hi, my inbox is always open!",
  cta: 'Say hello',
}
