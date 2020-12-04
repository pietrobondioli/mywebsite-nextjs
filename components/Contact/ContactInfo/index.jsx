// React/Next Components
import React from 'react';

// External Lib
import { CopyToClipboard } from 'react-copy-to-clipboard';

// Translations
import useTranslation from '../../../hooks/useTranslation';

// Components
import Section from '../../Section';
import SectionTitle from '../../Section/SectionTitle';
import ContactCard from './ContactCard';

// Content
import contactInfoContent from './content';

// Contexts
import { ThemeContext } from '../../../contexts/ThemeContext';

// Styles
import styles from '../../../styles/pages/Contact/ContactInfo.module.scss';

const sectionContent = {
  'pt-BR': {
    title: 'social',
  },
  'en-US': {
    title: 'social',
  },
};

const ContactInfo = () => {
  let translate = useTranslation(sectionContent);
  const { isDarkTheme } = React.useContext(ThemeContext);

  return (
    <Section>
      <SectionTitle title={translate('title')} />
      <div className={styles.contactInfo}>
        {contactInfoContent.map((card) => {
          translate = useTranslation(card);
          return (
            <ContactCard img={card.image} alt={translate('alt')} cardColor={card.cardColor}>
              {card.type === 'link' && (
                <a
                  href={card.content}
                  target="blank"
                  className={`${styles.card__link} ${isDarkTheme && styles.card__link_darkMode}`}
                >
                  {card.name}
                  <br />
                  <div>{translate('message')}</div>
                </a>
              )}
              {card.type === 'copy' && (
                <CopyToClipboard text={card.content}>
                  <button
                    type="button"
                    className={`${styles.card__button} ${
                      isDarkTheme && styles.card__button_darkMode
                    }`}
                  >
                    {card.content}
                    <br />
                    <div>{translate('message')}</div>
                  </button>
                </CopyToClipboard>
              )}
            </ContactCard>
          );
        })}
      </div>
    </Section>
  );
};

export default ContactInfo;
