// Centralized data + config for the portfolio.
// Baseline design: Brittany Chiang's v4 (https://github.com/bchiang7/v4)
// — adapted with Aitor González-Marfil's content.

export const site = {
  name: 'Aitor González Marfil',
  role: 'PhD Candidate · Machine Learning Engineer',
  email: 'aitorgacad@gmail.com',
  description:
    'Aitor González Marfil is a PhD Candidate in Computer Science & AI specializing in deep learning for biomedical imaging.',
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

export const hero = {
  greeting: 'Hi, my name is',
  name: 'Aitor González Marfil',
  tagline: 'I build deep learning systems for biomedical imaging.',
  description:
    "I'm a PhD Candidate in Computer Science & AI specializing in deep learning for biomedical imaging. I develop high-performance computer vision solutions in PyTorch for data-scarce and resource-constrained environments, bridging academic research and industry by integrating ML into real-world technical workflows. Published in Nature journals with 60+ citations.",
}

export const about = {
  heading: 'About Me',
  imageUrl: new URL('./assets/photo.jpg', import.meta.url).href,
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
      company: 'Donostia International Physics Center',
      companyShort: 'DIPC',
      url: 'https://www.dipc.org',
      range: 'Mar 2023 — Present',
      points: [
        'Developing PyTorch-based Computer Vision tools for biomedical imaging, specializing in high-performance solutions for data-scarce and resource-constrained environments.',
        'Collaborating with biologists to deploy ML models into production-level research workflows.',
      ],
    },
    {
      title: 'ML Engineer (Research)',
      company: 'University of the Basque Country',
      companyShort: 'UPV/EHU',
      url: 'https://www.ehu.eus',
      range: 'Aug 2021 — Jun 2022',
      points: [
        'Leveraged multitask neural networks to enhance cross-domain generalization of image models for electron microscopy using TensorFlow.',
      ],
    },
    {
      title: 'Machine Learning Intern',
      company: 'DIPC & IXA Research Group',
      companyShort: 'DIPC & IXA',
      url: 'https://www.dipc.org',
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
        'Developed and deployed Dockerized self-supervised Vision Transformer models for fluorescence prediction from label-free microscopy.',
      tags: ['PyTorch', 'Vision Transformers', 'Docker', 'Biomedical'],
      github: null,
      external: 'https://doi.org/10.1109/ISBI56570.2024.10635818',
      image: new URL('./assets/lightmycell.png', import.meta.url).href,
      imageHeight: 250,
    },
    {
      name: 'napari-DINOSim',
      description:
        'Leverages the DINOv2 foundation model for zero-shot object detection and segmentation in bioimage analysis.',
      tags: ['Python', 'PyTorch', 'DINOv2', 'Bioimage'],
      github: 'https://github.com/AAitorG/napari-DINOSim',
      external: null,
      image: new URL('./assets/DINOSim-simplest.png', import.meta.url).href,
      imageHeight: 140,
    },
    {
      name: 'ComparaPerfumes',
      description:
        'A web tool to compare perfume prices across different retailers, helping users find the best deals.',
      tags: ['Web', 'Price Comparison', 'Perfumes'],
      github: null,
      external: 'https://comparaperfumes.com',
      image: new URL('./assets/web_sample.png', import.meta.url).href,
      imageHeight: 250,
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
  text: "I'm currently open to new opportunities and collaborations in applied ML and computer vision. Whether you have a role, a research idea, or just want to say hi — my inbox is always open.",
  cta: 'Say hello',
}