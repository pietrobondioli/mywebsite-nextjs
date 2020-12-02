// React/Next Components
import React from 'react';

// External Libs
import { useForm } from 'react-hook-form';

// Components
import Section from '../../Section';
import SectionTitle from '../../Section/SectionTitle';

// Translations
import useTranslation from '../../../hooks/useTranslation';

// Styles
import styles from '../../../styles/pages/Contact/ContactForm.module.scss';

// Contexts
import { ThemeContext } from '../../../contexts/ThemeContext';

// Content
import contactFormContent from './content';

const ContactForm = () => {
  const { isDarkTheme } = React.useContext(ThemeContext);
  const { register, handleSubmit, watch, errors } = useForm();
  const translate = useTranslation(contactFormContent);

  const onSubmit = (formData) => {
    console.log(JSON.stringify(formData));
  };

  return (
    <Section>
      <SectionTitle title={translate('sectionName')} />
      <form
        className={`${styles.form} ${isDarkTheme && styles.form_darkMode}`}
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className={`${styles.form__group} ${styles.form__name}`}>
          <label htmlFor="name">{translate('name')}</label>
          <input
            name="name"
            id="name"
            type="text"
            ref={register({ required: true, minLength: 1, maxLength: 32 })}
          />
          {errors.name && (
            <div>
              {errors.name?.type === 'required' && <p>{translate('name_error_required')}</p>}
              {errors.name?.type === 'minLength' && <p>{translate('name_error_length')}</p>}
              {errors.name?.type === 'maxLength' && <p>{translate('name_error_length')}</p>}
            </div>
          )}
        </div>
        <div className={`${styles.form__group} ${styles.form__lastName}`}>
          <label htmlFor="lastName">{translate('lastName')}</label>
          <input
            name="lastName"
            id="lastName"
            type="text"
            ref={register({ required: true, minLength: 1, maxLength: 32 })}
          />
          {errors.lastName && (
            <div>
              {errors.lastName?.type === 'required' && (
                <p>{translate('lastName_error_required')}</p>
              )}
              {errors.lastName?.type === 'minLength' && <p>{translate('lastName_error_length')}</p>}
              {errors.lastName?.type === 'maxLength' && <p>{translate('lastName_error_length')}</p>}
            </div>
          )}
        </div>
        <div className={`${styles.form__group} ${styles.form__email}`}>
          <label htmlFor="email">{translate('email')}</label>
          <input name="email" id="email" type="text" ref={register({ required: true })} />
          {errors.email && (
            <div>
              {errors.email?.type === 'required' && <p>{translate('email_error_required')}</p>}
            </div>
          )}
        </div>
        <div className={`${styles.form__group} ${styles.form__subject}`}>
          <label htmlFor="subject">{translate('subject')}</label>
          <input
            name="subject"
            id="subject"
            type="text"
            ref={register({ required: true, minLength: 1, maxLength: 96 })}
          />
          {errors.subject && (
            <div>
              {errors.subject?.type === 'required' && <p>{translate('subject_error_required')}</p>}
              {errors.subject?.type === 'minLength' && <p>{translate('subject_error_length')}</p>}
              {errors.subject?.type === 'maxLength' && <p>{translate('subject_error_length')}</p>}
            </div>
          )}
        </div>
        <div className={`${styles.form__group} ${styles.form__text}`}>
          <label htmlFor="message">{translate('message')}</label>
          <textarea
            className={styles.input}
            name="message"
            id="message"
            type="text"
            ref={register({ required: true, minLength: 1, maxLength: 4096 })}
          />
          {errors.message && (
            <div>
              {errors.message?.type === 'required' && <p>{translate('message_error_required')}</p>}
              {errors.message?.type === 'minLength' && <p>{translate('message_error_length')}</p>}
              {errors.message?.type === 'maxLength' && <p>{translate('message_error_length')}</p>}
            </div>
          )}
        </div>
        <div className={`${styles.form__group} ${styles.form__button}`}>
          <input
            className={`button ${styles.input}`}
            name="submit"
            id="submit"
            type="submit"
            value={translate('button')}
          />
        </div>
      </form>
    </Section>
  );
};

export default ContactForm;
