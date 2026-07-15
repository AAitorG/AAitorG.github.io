// Centralized content for Aitor González-Marfil's portfolio.
// Swap in your own content here to update the site.

export const site = {
  name: 'Aitor González-Marfil',
  role: 'PhD Candidate · Machine Learning Engineer',
  email: 'aitorgacad@gmail.com',
  socials: [
    { name: 'GitHub', url: 'https://github.com/AAitorG' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aitor-g' },
    { name: 'Google Scholar', url: 'https://scholar.google.com/citations?user=-U5HQJ8AAAAJ' },
    { name: 'Email', url: 'mailto:aitorgacad@gmail.com' },
  ],
}

export const intro = {
  hi: 'Hi, my name is',
  name: 'Aitor González-Marfil.',
  tagline: 'I build deep learning systems for biomedical imaging.',
  description:
    'I’m a PhD Candidate in Computer Science & AI specializing in computer vision and self-supervised learning for data-scarce, resource-constrained environments. I bridge academic research and industry by turning ML models into reproducible, deployment-ready pipelines.',
  cta: 'Check out my work',
}

export const about = {
  heading: 'About Me',
  paragraphs: [
    "I'm a PhD Candidate in Computer Science & AI working at the intersection of deep learning and biomedical imaging. My focus is on building high-performance computer vision solutions in PyTorch for data-scarce and resource-constrained settings.",
    'I care about the full lifecycle of an ML system — from research prototyping to containerized, reproducible deployment. I collaborate with biologists to put models into real production-level research workflows, and I publish in venues like Nature Methods and Nature Machine Intelligence.',
    'Beyond research, I enjoy implementing algorithms from first principles, whether that’s neuroevolution for game-playing agents or transformer-based NLP pipelines.',
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
    'Vision Transformers',
    'MLOps',
  ],
}

export const experience = {
  heading: 'Where I’ve Worked',
  jobs: [
    {
      title: 'ML Engineer (PhD Research)',
      company: 'Donostia International Physics Center (DIPC)',
      range: 'Mar 2023 — Present',
      points: [
        'Developing PyTorch-based computer vision tools for biomedical imaging, specializing in high-performance solutions for data-scarce and resource-constrained environments.',
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

export const projects = {
  heading: 'Things I’ve Built',
  items: [
    {
      name: 'Light My Cells',
      description:
        'Designed and trained self-supervised Vision Transformers to predict fluorescence from label-free microscopy, then containerized the full pipeline with Docker for one-click, reproducible deployment.',
      tags: ['PyTorch', 'Vision Transformers', 'Docker', 'Biomedical'],
      links: [],
    },
    {
      name: '2048 Bot',
      description:
        'Implemented the NEAT neuroevolution algorithm from scratch in Python to evolve agents that consistently reach the 2048 tile and beyond.',
      tags: ['Python', 'Reinforcement Learning', 'NEAT'],
      links: [],
    },
    {
      name: 'Fake News Detector',
      description:
        'Built an end-to-end NLP pipeline fine-tuning BERT for automated news classification, covering preprocessing, training, and evaluation.',
      tags: ['BERT', 'NLP', 'Transformers'],
      links: [],
    },
  ],
}

export const publications = {
  heading: 'Selected Publications',
  text: 'Published in Nature Methods and Nature Machine Intelligence with 60+ citations.',
  link: { label: 'View full publication list', url: 'https://scholar.google.com/citations?user=-U5HQJ8AAAAJ' },
}

export const contact = {
  heading: "What's Next?",
  text: "I'm currently open to new opportunities and collaborations in applied ML and computer vision. Whether you have a role, a research idea, or just want to say hi — my inbox is always open.",
  cta: 'Say hello',
}