import presentationImage from '../../../public/icons/home/profile-512px.png';
import aboutImage from '../../../public/icons/home/brain-256px.png';
import articlesImage from '../../../public/icons/home/article-256px.png';
import projectsImage from '../../../public/icons/home/book-256px.png';
import contactImage from '../../../public/icons/home/contact-256px.png';

export default [
  {
    image: presentationImage,
    readMore: false,
    'pt-BR': {
      title: '',
      text: `Meu nome é Pietro Bondioli, tenho 19 anos, e curso Análise e Desenvolvimento de Sistemas na Mackenzie. Sempre gostei de tecnologia em geral, mas a área que mais me deixa animado é a de desenvolvimento web ligado a qualquer assunto financeiro, como e-commerces, mercado financeiro  e criptomoedas.
      Esse site foi feito por mim com a intenção de ser um lugar onde eu posso apresentar melhor meu trabalho e minhas habilidades, além de compartilhar meus conhecimentos, pensamentos e idéias (através de artigos e projetos).`,
    },
    'en-US': {
      title: '',
      text: `My name is Pietro Bondioli, I'm 19 years old, and I'm a student of Software Analysis and Development at Mackenzie. I've always liked technology, but the area that most excites me is web development related to any financial subject, such as e-commerces, financial market and cryptocurrencies. This website was created by me with the intention of being a place where I can better present my work and skills, ando also share my knowledge, thoughts and ideas (through articles and projects).`,
    },
  },
  {
    image: aboutImage,
    readMore: true,
    readMoreLink: '/about',
    'pt-BR': {
      title: 'sobre',
      text: `Nesta seção voce vai encontrar informação sobre minhas educação, experiências e conhecimento específicos de tecnologia (como linguagens de programação, frameworks, ferramentas, etc).`,
    },
    'en-US': {
      title: 'about',
      text: `In this section you will find information about my education, experiences and specific knowledge of technology (such as programming languages, frameworks, tools, etc.). `,
    },
  },
  {
    image: articlesImage,
    readMore: true,
    readMoreLink: '/articles',
    'pt-BR': {
      title: 'artigos',
      text: `Qualquer coisa que eu ache que vale a pena ser compartilhado vai ser encontrado aqui, desde artigos compartilhando conhecimento até artigos contendo apenas  alguns "pensamentos esquecíveis".`,
    },
    'en-US': {
      title: 'articles',
      text: `Anything that I think is worth sharing will be found here, from articles sharing knowledge to articles containing just a few "forgettable thoughts". `,
    },
  },
  {
    image: projectsImage,
    readMore: true,
    readMoreLink: '/projects',
    'pt-BR': {
      title: 'projetos',
      text: `Provavelmente eu tenho mais projetos próprios do que essa seção vai te mostrar, mas antes de postar qualquer projeto eu prefiro amadurecer não só a ideia do projeto como também o código base (além de criar um boa documentação inicial para o projeto).`,
    },
    'en-US': {
      title: 'projects',
      text: `I probably have more projects of my own than this section will show you, but before posting any project I prefer to mature not only the project idea but also the base code (in addition to creating a good initial documentation for the project). `,
    },
  },
  {
    image: contactImage,
    readMore: true,
    readMoreLink: '/contact',
    'pt-BR': {
      title: 'contato',
      text: `Nesta seção estão todas as minhas redes sociais, desde as mais profissionais até as mais pessoais, além disso voce também pode usar o formulário da seção caso você queira me enviar alguma mensagem.`,
    },
    'en-US': {
      title: 'contact',
      text: `In this section are all my social networks, from the most professional to the most personal, in addition you can also use the form in the section if you want to send me a message. `,
    },
  },
];
