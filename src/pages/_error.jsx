// Components
import ErrorAlert from '../containers/ErrorAlert';

const Error = (props) => {
  const { statusCode } = props;
  return (
    <>
      <ErrorAlert statusCode={statusCode} />
    </>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
