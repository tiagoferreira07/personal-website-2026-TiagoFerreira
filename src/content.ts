export type Lang = 'en' | 'pt';

export const LANGS: readonly Lang[] = ['pt', 'en'];

export const profile = {
  name: 'Tiago Ferreira',
  email: 'tiagoferreira11d@gmail.com',
  linkedin: 'https://www.linkedin.com/in/tiago-ferreira-9790a9207/',
  github: 'https://github.com/tiagoferreira07',
} as const;

export type ProjectId = 'flex2000' | 'mediflex' | 'conformetal' | 'stcp';

/**
 * Project screenshots. Put a 1500×675 .webp in public/projects/ and set the
 * path here (e.g. 'projects/flex2000.webp'). While a value is null the card
 * shows a neutral browser frame instead.
 */
export const shots: Record<ProjectId, string | null> = {
  flex2000: 'projects/flex2000.webp',
  mediflex: 'projects/mediflex.webp',
  conformetal: 'projects/conformetal.webp',
  stcp: 'projects/stcp.webp',
};

/** First year of professional work, used for the "years" figure. */
export const SINCE = 2021;

interface Project {
  id: ProjectId;
  name: string;
  url: string;
  role: string;
  kind: string;
  description: string;
}

interface Service {
  title: string;
  text: string;
}

interface Job {
  start: string;
  end: string | null;
  title: string;
  company: string;
  place: string;
  points: string[];
}

interface Course {
  start: string;
  end: string;
  title: string;
  school: string;
}

export interface Content {
  meta: { title: string; description: string };
  skip: string;
  nav: { work: string; services: string; about: string; cv: string; contact: string };
  navLabel: string;
  langLabel: string;
  hero: { eyebrow: string; title: string[]; lead: string; primary: string; secondary: string };
  stats: { label: string; items: [value: string, label: string][] };
  projects: { title: string; lead: string; credit: string; visit: string; newTab: string; shotAlt: string; items: Project[] };
  services: { title: string; lead: string; items: Service[] };
  about: { title: string; text: string; cta: string };
  cv: { title: string; role: string; place: string; summary: string; print: string; back: string };
  experience: { title: string; present: string; items: Job[] };
  skills: { title: string; tech: string; techItems: string[]; languages: string; languageItems: string[] };
  education: { title: string; items: Course[] };
  contact: { title: string; lead: string; copy: string; copied: string };
  footer: string;
}

/** Build a site-internal URL for a language. PT lives at the root, EN under /en/. */
export function href(lang: Lang, path = ''): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${lang === 'en' ? '/en' : ''}/${path}`;
}

/** URL of a file in public/. */
export function asset(path: string): string {
  return `${import.meta.env.BASE_URL.replace(/\/$/, '')}/${path}`;
}

const urls = {
  flex2000: 'https://www.flex2000.pt/',
  mediflex: 'https://mediflex.pt/',
  conformetal: 'https://www.conformetal.pt/',
  stcp: 'https://stcp.pt/',
};

const techItems = ['JavaScript', 'CSS', 'Twig', 'PHP', 'Responsive design', 'Azure DevOps', 'Agile', 'CMS'];

export const content: Record<Lang, Content> = {
  en: {
    meta: {
      title: 'Tiago Ferreira · Front-End Developer',
      description:
        'Tiago Ferreira, front-end developer in Vila Nova de Gaia, Portugal. Responsive websites and online stores built at Fullscreen since 2021.',
    },
skip: 'Skip to content',
    nav: { work: 'Projects', services: 'Services', about: 'About', cv: 'CV', contact: 'Contact' },
    navLabel: 'Main',
    langLabel: 'Language',
    hero: {
      eyebrow: 'Front-end developer · Vila Nova de Gaia',
      title: ['Websites that look right', 'on every screen.'],
      lead: 'I’m Tiago. I build responsive corporate websites and online stores, from the approved layout to the code in production.',
      primary: 'Talk about a project',
      secondary: 'See the projects',
    },
    stats: {
      label: 'In numbers',
      items: [
        ['{years}', 'years building for the web'],
        ['16+', 'projects delivered'],
        ['B2B · B2C', 'websites and online stores'],
        ['PT · EN', 'working languages'],
      ],
    },
    projects: {
      title: 'Projects at Fullscreen.',
      lead: 'Websites I worked on as an employee of Fullscreen, Lda. They are Fullscreen projects for its clients, not freelance work of mine.',
      credit: 'Developed at Fullscreen, Lda.',
      visit: 'Visit site',
      newTab: 'opens in a new tab',
      shotAlt: 'Screenshot of the {name} website',
      items: [
        {
          id: 'flex2000',
          name: 'Flex2000',
          url: urls.flex2000,
          role: 'Front-end',
          kind: 'Corporate website',
          description: 'Corporate website for a polyurethane foam manufacturer based in Ovar.',
        },
        {
          id: 'mediflex',
          name: 'Mediflex',
          url: urls.mediflex,
          role: 'Front-end',
          kind: 'Product catalogue',
          description: 'Hospital products catalogue with cart, favourites and client area, in Portuguese and English.',
        },
        {
          id: 'conformetal',
          name: 'Conformetal',
          url: urls.conformetal,
          role: 'Front-end',
          kind: 'Corporate website',
          description: 'Corporate website for a metal solutions company.',
        },
        {
          id: 'stcp',
          name: 'STCP',
          url: urls.stcp,
          role: 'Support and fixes',
          kind: 'Public transport',
          description: 'Support tickets and small fixes on the website of Porto’s public bus operator.',
        },
      ],
    },
    services: {
      title: 'What I can do for you.',
      lead: 'Front-end work for businesses that need a website to be proud of.',
      items: [
        {
          title: 'Corporate websites',
          text: 'Responsive websites that present your company clearly on phones, tablets and desktops.',
        },
        {
          title: 'Online stores',
          text: 'B2B and B2C storefronts: catalogue, cart, favourites and client area.',
        },
        {
          title: 'Layout to code',
          text: 'Your designer’s layout turned into an interface that stays faithful to the brand.',
        },
        {
          title: 'Maintenance and support',
          text: 'Fixes, improvements and new sections for a website that already exists.',
        },
      ],
    },
    about: {
      title: 'Client work since 2021. One focus: the front end.',
      text: 'Web Front-End Developer at Fullscreen since 2021, with a BSc in Computer Engineering at ISLA Gaia (2021–2026). I work with CSS, JavaScript, Twig and PHP, and I’m used to gathering requirements directly with clients.',
      cta: 'Read the full CV',
    },
    cv: {
      title: 'Curriculum vitae',
      role: 'Web Front-End Developer',
      place: 'Vila Nova de Gaia, Portugal',
      summary: 'Front-end developer with experience in responsive corporate websites and B2B/B2C online stores, at Fullscreen since 2021.',
      print: 'Print or save as PDF',
      back: 'Back to home',
    },
    experience: {
      title: 'Experience',
      present: 'now',
      items: [
        {
          start: '2021-09',
          end: null,
          title: 'Web Front-End Developer',
          company: 'Fullscreen',
          place: 'Vila Nova de Gaia',
          points: [
            'Builds responsive institutional websites and B2B/B2C online stores with CSS, Twig, JavaScript and PHP.',
            'Maintains and improves the in-house PHP CMS.',
            'Turns layouts from the design team into interfaces that match each client’s brand.',
            'Joins client meetings to gather requirements, and works in Agile sprints with Azure DevOps.',
          ],
        },
        {
          start: '2021-04',
          end: '2021-08',
          title: 'Front-End Intern',
          company: 'Fullscreen',
          place: 'Vila Nova de Gaia',
          points: ['Adapted layouts to phones and tablets and refined interfaces with the designers.'],
        },
      ],
    },
    skills: {
      title: 'Skills',
      tech: 'Technical',
      techItems,
      languages: 'Languages',
      languageItems: ['Portuguese · native', 'English · B2'],
    },
    education: {
      title: 'Education',
      items: [
        { start: '2021', end: '2026', title: 'BSc in Computer Engineering', school: 'ISLA Gaia' },
        { start: '2019', end: '2021', title: 'CTESP in Web and Mobile Development', school: 'ISLA Gaia' },
      ],
    },
    contact: {
      title: 'Have a project in mind?',
      lead: 'Tell me what you need. Email is the fastest way to reach me.',
      copy: 'Copy address',
      copied: 'Address copied',
    },
    footer: 'Built with Astro and TypeScript.',
  },
  pt: {
    meta: {
      title: 'Tiago Ferreira · Front-End Developer',
      description:
        'Tiago Ferreira, front-end developer em Vila Nova de Gaia. Sites responsivos e lojas online desenvolvidos na Fullscreen desde 2021.',
    },
skip: 'Saltar para o conteúdo',
    nav: { work: 'Projetos', services: 'Serviços', about: 'Sobre', cv: 'CV', contact: 'Contacto' },
    navLabel: 'Principal',
    langLabel: 'Idioma',
    hero: {
      eyebrow: 'Front-end developer · Vila Nova de Gaia',
      title: ['Sites que ficam bem', 'em qualquer ecrã.'],
      lead: 'Sou o Tiago. Desenvolvo sites institucionais e lojas online responsivos, do layout aprovado ao código em produção.',
      primary: 'Falar sobre um projeto',
      secondary: 'Ver projetos',
    },
    stats: {
      label: 'Em números',
      items: [
        ['{years}', 'anos a desenvolver para a web'],
        ['16+', 'projetos entregues'],
        ['B2B · B2C', 'sites e lojas online'],
        ['PT · EN', 'línguas de trabalho'],
      ],
    },
    projects: {
      title: 'Projetos na Fullscreen.',
      lead: 'Sites em que trabalhei enquanto colaborador da Fullscreen, Lda. São projetos da Fullscreen para os seus clientes, não trabalhos meus como freelancer.',
      credit: 'Desenvolvido na Fullscreen, Lda.',
      visit: 'Visitar site',
      newTab: 'abre num novo separador',
      shotAlt: 'Captura de ecrã do site {name}',
      items: [
        {
          id: 'flex2000',
          name: 'Flex2000',
          url: urls.flex2000,
          role: 'Front-end',
          kind: 'Site institucional',
          description: 'Site institucional de um fabricante de espumas de poliuretano, em Ovar.',
        },
        {
          id: 'mediflex',
          name: 'Mediflex',
          url: urls.mediflex,
          role: 'Front-end',
          kind: 'Catálogo de produtos',
          description: 'Catálogo de produtos hospitalares com carrinho, favoritos e área de cliente, em português e inglês.',
        },
        {
          id: 'conformetal',
          name: 'Conformetal',
          url: urls.conformetal,
          role: 'Front-end',
          kind: 'Site institucional',
          description: 'Site institucional de uma empresa de soluções metálicas.',
        },
        {
          id: 'stcp',
          name: 'STCP',
          url: urls.stcp,
          role: 'Suporte e correções',
          kind: 'Transportes públicos',
          description: 'Tickets de suporte e pequenas correções no site da transportadora de autocarros do Porto.',
        },
      ],
    },
    services: {
      title: 'O que posso fazer por si.',
      lead: 'Front-end para empresas que precisam de um site de que se orgulhem.',
      items: [
        {
          title: 'Sites institucionais',
          text: 'Sites responsivos que apresentam a sua empresa com clareza em telemóvel, tablet e computador.',
        },
        {
          title: 'Lojas online',
          text: 'Lojas B2B e B2C: catálogo, carrinho, favoritos e área de cliente.',
        },
        {
          title: 'Do layout ao código',
          text: 'O layout do seu designer transformado numa interface fiel à marca.',
        },
        {
          title: 'Manutenção e suporte',
          text: 'Correções, melhorias e novas secções para um site que já existe.',
        },
      ],
    },
    about: {
      title: 'Projetos para clientes desde 2021. Um foco: o front-end.',
      text: 'Web Front-End Developer na Fullscreen desde 2021, com a licenciatura em Engenharia Informática na ISLA Gaia (2021–2026). Trabalho com CSS, JavaScript, Twig e PHP, e estou habituado a levantar requisitos diretamente com os clientes.',
      cta: 'Ler o CV completo',
    },
    cv: {
      title: 'Curriculum vitae',
      role: 'Web Front-End Developer',
      place: 'Vila Nova de Gaia, Portugal',
      summary: 'Front-end developer com experiência em sites institucionais responsivos e lojas online B2B/B2C, na Fullscreen desde 2021.',
      print: 'Imprimir ou guardar em PDF',
      back: 'Voltar ao início',
    },
    experience: {
      title: 'Experiência',
      present: 'hoje',
      items: [
        {
          start: '2021-09',
          end: null,
          title: 'Web Front-End Developer',
          company: 'Fullscreen',
          place: 'Vila Nova de Gaia',
          points: [
            'Desenvolve sites institucionais responsivos e lojas online B2B/B2C com CSS, Twig, JavaScript e PHP.',
            'Mantém e melhora o CMS interno em PHP.',
            'Transforma os layouts da equipa de design em interfaces fiéis à marca de cada cliente.',
            'Participa em reuniões com clientes para levantar requisitos e trabalha em sprints Agile com Azure DevOps.',
          ],
        },
        {
          start: '2021-04',
          end: '2021-08',
          title: 'Estagiário Front-End',
          company: 'Fullscreen',
          place: 'Vila Nova de Gaia',
          points: ['Adaptou layouts a telemóveis e tablets e afinou interfaces com os designers.'],
        },
      ],
    },
    skills: {
      title: 'Competências',
      tech: 'Técnicas',
      techItems: techItems.map((item) => (item === 'Responsive design' ? 'Design responsivo' : item)),
      languages: 'Línguas',
      languageItems: ['Português · nativo', 'Inglês · B2'],
    },
    education: {
      title: 'Formação',
      items: [
        { start: '2021', end: '2026', title: 'Licenciatura em Engenharia Informática', school: 'ISLA Gaia' },
        { start: '2019', end: '2021', title: 'CTESP em Desenvolvimento Web e Mobile', school: 'ISLA Gaia' },
      ],
    },
    contact: {
      title: 'Tem um projeto em mente?',
      lead: 'Diga-me o que precisa. O email é a forma mais rápida de me contactar.',
      copy: 'Copiar endereço',
      copied: 'Endereço copiado',
    },
    footer: 'Feito com Astro e TypeScript.',
  },
};
