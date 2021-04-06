import gmailImg from '../../../public/icons/contact/gmail-128px.png';
import githubImg from '../../../public/icons/contact/github-black-128px.png';
import instagramImg from '../../../public/icons/contact/instagram-128px.png';
import linkedinImg from '../../../public/icons/contact/linkedin-128px.png';
import telegramImg from '../../../public/icons/contact/telegram-128px.png';
import twitterImg from '../../../public/icons/contact/twitter-128px.png';

export default [
  {
    type: 'link',
    image: linkedinImg,
    cardColor: '#80d8ff',
    name: 'linkedin/pietrobondioli',
    content: 'https://www.linkedin.com/in/pietrobondioli',
    'pt-BR': {
      alt: 'linkedin',
      message: 'clique para abrir linkedin',
    },
    'en-US': {
      alt: 'linkedin',
      message: 'click to open linkedin',
    },
  },
  {
    type: 'link',
    image: githubImg,
    cardColor: '#7c7c7c',
    name: 'github/bondiolipietro',
    content: 'https://github.com/bondiolipietro',
    'pt-BR': {
      alt: 'github',
      message: 'clique para abrir github',
    },
    'en-US': {
      alt: 'github',
      message: 'click to open github',
    },
  },
  {
    type: 'copy',
    image: gmailImg,
    cardColor: '#ff8a80',
    content: 'pietrobondiolideveloper@gmail.com',
    'pt-BR': {
      alt: 'e-mail',
      message: 'clique para copiar o email',
    },
    'en-US': {
      alt: 'e-mail',
      message: 'click to copy email',
    },
  },
  {
    type: 'copy',
    image: telegramImg,
    cardColor: '#80d8ff',
    content: '+55(12)99634-1642',
    'pt-BR': {
      alt: 'telegram',
      message: 'clique para copiar o número de telefone',
    },
    'en-US': {
      alt: 'telegram',
      message: 'click to copy phone number',
    },
  },
  {
    type: 'link',
    image: instagramImg,
    cardColor: '#ff8a80',
    name: 'instagram/pietrobondioli',
    content: 'https://instagram.com/pietrobondioli',
    'pt-BR': {
      alt: 'instagram',
      message: 'clique para abrir o instagram',
    },
    'en-US': {
      alt: 'instagram',
      message: 'click to open instagram',
    },
  },
  {
    type: 'link',
    image: twitterImg,
    cardColor: '#80D8FF',
    name: 'twitter/bondioli_pietro',
    content: 'https://twitter.com/bondioli_pietro',
    'pt-BR': {
      alt: 'twitter',
      message: 'clique para abrir o twitter',
    },
    'en-US': {
      alt: 'twitter',
      message: 'click to open twitter',
    },
  },
];
