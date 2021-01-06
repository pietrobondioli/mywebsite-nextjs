// Components
import Section from '../../components/Section';
import SectionTitle from '../../components/Section/SectionTitle';
import SectionContent from '../../components/Section/SectionContent';

// Hooks
import useTranslation from '../../hooks/useTranslation';

// Styles
import styles from '../../styles/pages/Projects/Projects.module.scss';

// Content
import projectsContent from './content';

const ProjectsSection = () => {
  return (
    <div>
      {projectsContent.map((content) => {
        const translate = useTranslation(content);
        return (
          <Section key={translate('name')}>
            <SectionTitle title={translate('name')} />
            <SectionContent
              image={content.image}
              readMore={content.readMore}
              readMoreLink={content.readMoreLink}
            >
              <div className={styles.project__text}>
                <div className={styles.subject}>{translate('subject')}</div>
                <div className={styles.description}>{translate('description')}</div>
              </div>
            </SectionContent>
          </Section>
        );
      })}
    </div>
  );
};

export default ProjectsSection;
