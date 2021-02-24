// React/Next Components
import Head from 'next/head';

// Hooks
import useTranslation from '../hooks/useTranslation';

// Components
import ContactForm from '../containers/Contact/ContactForm';
import ContactInfo from '../containers/Contact/ContactInfo';

// Contents
const contactContent = {
  'pt-BR': {
    pageTitle: 'Contato',
    pageDescription:
      'E-mail: pietrobondiolideveloper@gmail.com \n Github: www.github.com/bondiolipietro \n Linkedin: www.linkedin.com/in/pietrobondioli/',
  },
  'en-US': {
    pageTitle: 'Contact',
    pageDescription:
      'E-mail: pietrobondiolideveloper@gmail.com \n Github: www.github.com/bondiolipietro \n Linkedin: www.linkedin.com/in/pietrobondioli',
  },
};

function Contact() {
  const translate = useTranslation(contactContent);

  return (
    <>
      <Head>
        <title>{translate('pageTitle')}</title>
        <meta name="description" content={translate('pageDescription')} />
      </Head>
      <main>
        <ContactForm />
        <ContactInfo />
      </main>
    </>
  );
}

export default Contact;
