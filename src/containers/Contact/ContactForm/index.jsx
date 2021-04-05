// React/Next Components
import React from 'react';

// External Libs
import { useForm } from 'react-hook-form';

// Components
import Section from '../../../components/Section';
import SectionTitle from '../../../components/Section/SectionTitle';
import FormAlert from './FormAlert';

// Translations
import useTranslation from '../../../hooks/useTranslation';

// Styles
import styles from '../../../styles/pages/Contact/ContactForm.module.scss';

// Content
import contactFormContent from './content';

const sectionContent = {
  'pt-BR': {
    title: 'contate-me',
  },
  'en-US': {
    title: 'contact me',
  },
};

const ContactForm = () => {
  const { register, handleSubmit, errors, reset } = useForm({ mode: 'onChange' });
  const translate = useTranslation(contactFormContent);
  const [submitStatus, setSubmitStatus] = React.useState(false);
  const [alreadySubmited, setAlreadySubmited] = React.useState(false);
  const [submitVisibility, setSubmitVisibility] = React.useState(false);

  const handleSubmitStatus = (status) => {
    setSubmitStatus(status);
    setSubmitVisibility(true);
    setAlreadySubmited(!alreadySubmited);
    reset();
    setTimeout(() => {
      setSubmitVisibility(false);
    }, 2000);
  };

  const onSubmit = (formData) => {
    if (!alreadySubmited) {
      setAlreadySubmited(!alreadySubmited);
      fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(formData),
      })
        .then((response) => {
          handleSubmitStatus(response.ok);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  return (
    <Section>
      <SectionTitle title={translate('title', sectionContent)} />
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
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
            ref={register({ required: false, minLength: 1, maxLength: 32 })}
          />
          {errors.lastName && (
            <div>
              {errors.lastName?.type === 'minLength' && <p>{translate('lastName_error_length')}</p>}
              {errors.lastName?.type === 'maxLength' && <p>{translate('lastName_error_length')}</p>}
            </div>
          )}
        </div>
        <div className={`${styles.form__group} ${styles.form__email}`}>
          <label htmlFor="email">{translate('email')}</label>
          <input
            name="email"
            id="email"
            type="text"
            ref={register({
              required: true,
              pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            })}
          />
          {errors.email && (
            <div>
              {errors.email?.type === 'required' && <p>{translate('email_error_required')}</p>}
              {errors.email?.type === 'pattern' && <p>{translate('email_error_pattern')}</p>}
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
            spellCheck="true"
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
      {submitStatus ? (
        <FormAlert show={submitVisibility} status={true} />
      ) : (
        <FormAlert show={submitVisibility} status={false} />
      )}
    </Section>
  );
};

export default ContactForm;
