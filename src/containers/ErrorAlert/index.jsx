// Translations
import useTranslation from '@hooks/useTranslation';

// Styles
import styles from '@styles/pages/Error/Error.module.scss';

import errorAlertContent from './content';

const ErrorAlert = (props) => {
  const translations = useTranslation(errorAlertContent);
  const { statusCode } = props;
  return (
    <div className={styles.error}>
      <div className={styles.errorImage} />
      <div className={styles.errorCode}>{statusCode}</div>
      <div className={styles.errorMessage}>
        {statusCode ? translations('serverError') : translations('clientError')}
      </div>
    </div>
  );
};

export default ErrorAlert;
