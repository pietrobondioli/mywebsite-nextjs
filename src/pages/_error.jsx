// React/Next Components
import Head from 'next/head';

// Components
import ErrorAlert from '@containers/ErrorAlert';

// Hooks
import useTranslation from '@hooks/useTranslation';

const errorContent = {
  'pt-BR': {
    pageTitle: 'Erro',
  },
  'en-US': {
    pageTitle: 'Error',
  },
};

const Error = (props) => {
  const translate = useTranslation(errorContent);
  const { statusCode } = props;

  return (
    <>
      <Head>
        <title>
          {translate('pageTitle')} {statusCode}
        </title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <ErrorAlert statusCode={statusCode} />
    </>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
