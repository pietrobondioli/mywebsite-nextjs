import { Link as ScrollLink } from 'react-scroll';
import presentationImage from '../../../public/icons/presentation/profile-256px.png';
import aboutImage from '../../../public/icons/presentation/brain-256px.png';
import articlesImage from '../../../public/icons/presentation/article-256px.png';
import projectsImage from '../../../public/icons/presentation/book-256px.png';
import contactImage from '../../../public/icons/presentation/contact-256px.png';

export default [
  {
    image: presentationImage,
    readMore: false,
    'pt-BR': {
      title: '',
      text:
        'Esse site foi construído por mim com a intenção de apresentar formalmente meu trabalho. Você poderá encontrar nas próximas sessões alguns artigos redigidos por mim, ler mais, conhecer dos quais eu participei ou me contatar',
    },
    'en-US': {
      title: '',
      text:
        'This site was built by me with the intent of presenting my work formally.You can take a look at the next sections for some articles of my own, read about me, check out projects which i have participated or contact me',
    },
  },
  {
    image: aboutImage,
    readMore: true,
    readMoreLink: '/about',
    'pt-BR': {
      title: 'sobre',
      text:
        'Iste velit quia est ipsa quod ad. Praesentium fuga est quos deleniti doloribus. Aut ducimus dolorem beatae dolore aliquam. Maiores maiores quae minima eos quae. Dolorum praesentium nam officiis aut et ut et. Rerum aut placeat dolorem libero repellendus quia unde tempore.',
    },
    'en-US': {
      title: 'about',
      text:
        'Iste velit quia est ipsa quod ad. Praesentium fuga est quos deleniti doloribus. Aut ducimus dolorem beatae dolore aliquam. Maiores maiores quae minima eos quae. Dolorum praesentium nam officiis aut et ut et. Rerum aut placeat dolorem libero repellendus quia unde tempore.',
    },
  },
  {
    image: articlesImage,
    readMore: true,
    readMoreLink: '/articles',
    'pt-BR': {
      title: 'artigos',
      text:
        'Iste velit quia est ipsa quod ad. Praesentium fuga est quos deleniti doloribus. Aut ducimus dolorem beatae dolore aliquam. Maiores maiores quae minima eos quae. Dolorum praesentium nam officiis aut et ut et. Rerum aut placeat dolorem libero repellendus quia unde tempore.',
    },
    'en-US': {
      title: 'articles',
      text:
        'Iste velit quia est ipsa quod ad. Praesentium fuga est quos deleniti doloribus. Aut ducimus dolorem beatae dolore aliquam. Maiores maiores quae minima eos quae. Dolorum praesentium nam officiis aut et ut et. Rerum aut placeat dolorem libero repellendus quia unde tempore.',
    },
  },
  {
    image: projectsImage,
    readMore: true,
    readMoreLink: '/projects',
    'pt-BR': {
      title: 'projetos',
      text:
        'Iste velit quia est ipsa quod ad. Praesentium fuga est quos deleniti doloribus. Aut ducimus dolorem beatae dolore aliquam. Maiores maiores quae minima eos quae. Dolorum praesentium nam officiis aut et ut et. Rerum aut placeat dolorem libero repellendus quia unde tempore.',
    },
    'en-US': {
      title: 'projects',
      text:
        'Iste velit quia est ipsa quod ad. Praesentium fuga est quos deleniti doloribus. Aut ducimus dolorem beatae dolore aliquam. Maiores maiores quae minima eos quae. Dolorum praesentium nam officiis aut et ut et. Rerum aut placeat dolorem libero repellendus quia unde tempore.',
    },
  },
  {
    image: contactImage,
    readMore: true,
    readMoreLink: '/contact',
    'pt-BR': {
      title: 'contato',
      text:
        'Iste velit quia est ipsa quod ad. Praesentium fuga est quos deleniti doloribus. Aut ducimus dolorem beatae dolore aliquam. Maiores maiores quae minima eos quae. Dolorum praesentium nam officiis aut et ut et. Rerum aut placeat dolorem libero repellendus quia unde tempore.',
    },
    'en-US': {
      title: 'contact',
      text:
        'Iste velit quia est ipsa quod ad. Praesentium fuga est quos deleniti doloribus. Aut ducimus dolorem beatae dolore aliquam. Maiores maiores quae minima eos quae. Dolorum praesentium nam officiis aut et ut et. Rerum aut placeat dolorem libero repellendus quia unde tempore.',
    },
  },
];
