// React/Next Components
import React from 'react';

// Translations
import useTranslation from '../../../../hooks/useTranslation';

// Content
import formAlertContent from './content';

// Styles
import styles from '../../../../styles/pages/Contact/FormAlert.module.scss';

const FormAlert = (props) => {
  const translate = useTranslation(formAlertContent);
  const { show, status } = props;

  return (
    <div
      className={`${styles.formAlert} ${show && styles.formAlert_show} ${
        status ? styles.formAlert_success : styles.formAlert_error
      }`}
    >
      {status ? translate('success') : translate('error')}
    </div>
  );
};

export default FormAlert;
