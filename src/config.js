// Centralized data + config for the portfolio.
// Baseline design: Brittany Chiang's v4 (https://github.com/bchiang7/v4)
// — adapted with Aitor González-Marfil's content.

export const site = {
  name: 'Aitor González-Marfil',
  role: 'PhD Candidate · Machine Learning Engineer',
  email: 'aitorgacad@gmail.com',
  description:
    'Aitor González-Marfil is a PhD Candidate in Computer Science & AI specializing in deep learning for biomedical imaging.',
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
  { name: 'Education', url: '#education' },
  { name: 'Projects', url: '#projects' },
  { name: 'Publications', url: '#publications' },
  { name: 'Contact', url: '#contact' },
]

export const hero = {
  greeting: 'Hi, my name is',
  name: 'Aitor González-Marfil.',
  tagline: 'I build deep learning systems for biomedical imaging.',
  description:
    "I'm a PhD Candidate in Computer Science & AI specializing in deep learning for biomedical imaging. I develop high-performance computer vision solutions in PyTorch for data-scarce and resource-constrained environments, bridging academic research and industry by integrating ML into real-world technical workflows. Published in Nature journals with 60+ citations.",
}

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm a PhD Candidate in Computer Science & AI specializing in Deep Learning for Biomedical Imaging. I develop high-performance Computer Vision (CV) solutions using PyTorch for data-scarce and resource-constrained environments.",
    'I bridge academic research and industry application by integrating ML solutions into real-world technical workflows. I collaborate with biologists to deploy models into production-level research pipelines and publish in Nature Methods and Nature Machine Intelligence.',
    'Beyond research, I enjoy building from first principles — from neuroevolution agents to transformer-based NLP pipelines.',
  ],
  skills: [
    'Python',
    'PyTorch',
    'TensorFlow',
    'OpenCV',
    'Hugging Face',
    'Docker',
    'Computer Vision',
    'Self-Supervised Learning',
    'Transformers',
    'CNNs',
    'NumPy / Pandas',
    'Scikit-learn',
    'Git / MLOps',
    'Java / C / C++',
  ],
}

export const jobs = {
  heading: 'Where I’ve Worked',
  items: [
    {
      title: 'ML Engineer (PhD Research)',
      company: 'Donostia International Physics Center (DIPC)',
      range: 'Mar 2023 — Present',
      points: [
        'Developing PyTorch-based Computer Vision tools for biomedical imaging, specializing in high-performance solutions for data-scarce and resource-constrained environments.',
        'Collaborating with biologists to deploy ML models into production-level research workflows.',
      ],
    },
    {
      title: 'ML Engineer (Research)',
      company: 'University of the Basque Country (UPV/EHU)',
      range: 'Aug 2021 — Jun 2022',
      points: [
        'Leveraged multitask neural networks to enhance cross-domain generalization of image models for electron microscopy using TensorFlow.',
      ],
    },
    {
      title: 'Machine Learning Intern',
      company: 'DIPC & IXA Research Group',
      range: 'Jun 2020 — Aug 2021',
      points: [
        'Biomedical CV: implemented Deep Style Transfer for domain adaptation in electron microscopy.',
        'NLP: fine-tuned BERT-based Transformers for multilingual NER and POS tasks using PyTorch.',
      ],
    },
  ],
}

export const education = {
  heading: 'Education',
  items: [
    {
      degree: 'PhD in Computer Science',
      school: 'University of the Basque Country (UPV/EHU)',
      range: 'Expected 2026',
    },
    {
      degree: 'M.Sc. Computational Engineering & Intelligent Systems',
      school: 'University of the Basque Country (UPV/EHU)',
      range: '2022',
    },
    {
      degree: 'B.Sc. Computer Science & Artificial Intelligence',
      school: 'University of the Basque Country (UPV/EHU)',
      range: '2021',
    },
  ],
}

export const projects = {
  heading: 'Things I’ve Built',
  items: [
    {
      name: 'Light My Cells',
      description:
        'Developed and deployed Dockerized self-supervised Vision Transformer models for fluorescence prediction from label-free microscopy.',
      tags: ['PyTorch', 'Vision Transformers', 'Docker', 'Biomedical'],
      github: null,
      external: null,
    },
    {
      name: 'napari-DINOSim',
      description:
        'Leverages the DINOv2 foundation model for zero-shot object detection and segmentation in bioimage analysis.',
      tags: ['Python', 'PyTorch', 'DINOv2', 'Bioimage'],
      github: 'https://github.com/AAitorG/napari-DINOSim',
      external: null,
    },
    {
      name: 'UNETR_2D',
      description:
        '2D UNETR implementation in TensorFlow/Keras for electron-microscopy image segmentation.',
      tags: ['TensorFlow', 'Segmentation', 'Medical Imaging'],
      github: 'https://github.com/AAitorG/UNETR_2D',
      external: null,
    },
    {
      name: '2048 Bot',
      description:
        'Built a reinforcement learning agent using the NEAT neuroevolution algorithm to play the 2048 game.',
      tags: ['Python', 'Reinforcement Learning', 'NEAT'],
      github: null,
      external: null,
    },
    {
      name: 'Fake News Detector',
      description:
        'Deployed an end-to-end NLP pipeline fine-tuning BERT for automated news classification.',
      tags: ['BERT', 'NLP', 'Transformers'],
      github: null,
      external: null,
    },
  ],
}

export const publications = {
  heading: 'Selected Publications',
  text: 'Published in Nature Methods and Nature Machine Intelligence with 60+ citations.',
  link: {
    label: 'View full publication list',
    url: 'https://scholar.google.com/citations?user=-U5HQJ8AAAAJ',
  },
}

export const contact = {
  heading: "What's Next?",
  text: "I'm currently open to new opportunities and collaborations in applied ML and computer vision. Whether you have a role, a research idea, or just want to say hi — my inbox is always open.",
  cta: 'Say hello',
}