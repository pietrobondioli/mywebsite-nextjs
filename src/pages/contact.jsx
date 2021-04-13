// React/Next Components
import Head from 'next/head';
import { useRouter } from 'next/router';

// Hooks
import useTranslation from '@hooks/useTranslation';

// Components
import ContactForm from '@containers/Contact/ContactForm';
import ContactInfo from '@containers/Contact/ContactInfo';

// Contents
const contactContent = {
  'pt-BR': {
    pageTitle: 'Contato - Pietro Bondioli',
    pageDescription:
      'E-mail: pietrobondiolideveloper@gmail.com \n Github: www.github.com/bondiolipietro \n Linkedin: www.linkedin.com/in/pietrobondioli',
  },
  'en-US': {
    pageTitle: 'Contact - Pietro Bondioli',
    pageDescription:
      'E-mail: pietrobondiolideveloper@gmail.com \n Github: www.github.com/bondiolipietro \n Linkedin: www.linkedin.com/in/pietrobondioli',
  },
};

function Contact() {
  const router = useRouter();
  const translate = useTranslation(contactContent);

  return (
    <>
      <Head>
        <title>{translate('pageTitle')}</title>
        <meta name="description" content={translate('pageDescription')} />
        <meta property="og:title" content={translate('pageTitle')} />
        <meta property="og:description" content={translate('pageDescription')} />
        <meta property="og:url" content={`pietrobondioli.com.br${router.asPath}`} />
        <meta name="twitter:title" content={translate('pageTitle')} />
        <meta name="twitter:description" content={translate('pageDescription')} />
      </Head>
      <main>
        <ContactForm />
        <ContactInfo />
      </main>
    </>
  );
}

export default Contact;
