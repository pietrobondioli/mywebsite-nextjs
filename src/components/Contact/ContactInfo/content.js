import gmailImg from '../../../public/icons/contact/gmail-128px.png';
import githubImg from '../../../public/icons/contact/github-128px.png';
import instagramImg from '../../../public/icons/contact/instagram-128px.png';
import linkedinImg from '../../../public/icons/contact/linkedin-128px.png';
import telegramImg from '../../../public/icons/contact/telegram-128px.png';

export default [
  {
    type: 'copy',
    image: gmailImg,
    cardColor: '#d44a3c',
    content: 'bondiolipietrodev@gmail.com',
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
    image: githubImg,
    cardColor: '#222222',
    name: 'github/bondioli-pietro',
    content: 'https://github.com/Bondioli-Pietro',
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
    type: 'link',
    image: linkedinImg,
    cardColor: '#5793ce',
    name: 'linkedin/pietrobondioli',
    content: 'https://www.linkedin.com/',
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
    image: instagramImg,
    cardColor: '#ff8a80',
    name: 'instagram/pietrobondioli',
    content: 'https://instagram.com/pietrobondioli/',
    'pt-BR': {
      alt: 'instagram',
      message: 'clique para abrir instagram',
    },
    'en-US': {
      alt: 'instagram',
      message: 'click to open instagram',
    },
  },
];
