// Components
import Section from '../../Section';
import SectionTitle from '../../Section/SectionTitle';
import SectionContent from '../../Section/SectionContent';

// Hooks
import useTranslation from '../../../hooks/useTranslation';

// Styles
import styles from '../../../styles/pages/About/AboutContent.module.scss';

// Content
import educationContent from './content';

const sectionContent = {
  'pt-BR': {
    title: 'educação',
  },
  'en-US': {
    title: 'education',
  },
};

const Education = () => {
  let translate = useTranslation(sectionContent);

  return (
    <div id="education">
      <Section key={translate('title')}>
        <SectionTitle title={translate('title')} />
        {educationContent.map((content) => {
          translate = useTranslation(content);
          return (
            <SectionContent image={content.image} readMore={content.readMore}>
              <div className={`${styles.about__text}`}>
                <div className={`${styles.title}`}>{translate('name')}</div>
                <div className={`${styles.subtitle}`}>{translate('course')}</div>
                <div className={`${styles.description}`}>{translate('description')}</div>
                <div className={`${styles.period}`}>{translate('period')}</div>
              </div>
            </SectionContent>
          );
        })}
      </Section>
    </div>
  );
};

export default Education;
