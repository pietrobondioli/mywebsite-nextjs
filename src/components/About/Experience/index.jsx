// Components
import Section from '../../Section';
import SectionTitle from '../../Section/SectionTitle';
import SectionContent from '../../Section/SectionContent';

// Hooks
import useTranslation from '../../../hooks/useTranslation';

// Styles
import styles from '../../../styles/pages/About/AboutContent.module.scss';

// Content
import experienceContent from './content';

const sectionContent = {
  'pt-BR': {
    title: 'experiência',
  },
  'en-US': {
    title: 'experience',
  },
};

const Experience = () => {
  let translate = useTranslation(sectionContent);

  return (
    <Section key={translate('title')}>
      <SectionTitle title={translate('title')} />
      {experienceContent.map((content) => {
        translate = useTranslation(content);
        return (
          <SectionContent key={translate('name')} image={content.image} readMore={content.readMore}>
            <div className={`${styles.about__text}`}>
              <div className={`${styles.title}`}>{translate('name')}</div>
              <div className={`${styles.subtitle}`}>{translate('position')}</div>
              <div className={`${styles.description}`}>{translate('description')}</div>
              <div className={`${styles.period}`}>{translate('period')}</div>
            </div>
          </SectionContent>
        );
      })}
    </Section>
  );
};

export default Experience;
