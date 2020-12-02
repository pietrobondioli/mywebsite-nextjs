// React/Next Components
import Head from 'next/head';

// Hooks
import useTranslation from '../hooks/useTranslation';

// Components
import ContactForm from '../components/Contact/ContactForm';

// Contents
const contactContent = {
  'pt-BR': {
    pageTitle: 'Contato',
  },
  'en-US': {
    pageTitle: 'Contact',
  },
};

function Contact() {
  const translate = useTranslation(contactContent);

  return (
    <>
      <Head>
        <title>{translate('pageTitle')}</title>
      </Head>
      <ContactForm />
    </>
  );
}

export default Contact;
