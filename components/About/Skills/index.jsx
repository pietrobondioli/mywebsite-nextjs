// Components
import Section from '../../Section';
import SectionTitle from '../../Section/SectionTitle';
import SkillItem from './SkillItem';

// Hooks
import useTranslation from '../../../hooks/useTranslation';

// Styles
import styles from '../../../styles/pages/About/Skills.module.scss';

// Content
import skillsContent from './content';

const sectionContent = {
  'pt-BR': {
    title: 'conhecimentos',
  },
  'en-US': {
    title: 'skills',
  },
};

const Skills = () => {
  const translate = useTranslation(sectionContent);
  return (
    <div className={styles.skills__section}>
      <Section key={translate('title')}>
        <SectionTitle title={translate('title')} />
        {skillsContent.map((skillType) => {
          return (
            <div className={styles.skills__content}>
              <div className={styles.name}>{skillType.typeName}</div>
              <div className={styles.skills}>
                {skillType.skills.map((skill) => {
                  return (
                    <SkillItem
                      skillLink={skill.link}
                      skillName={skill.name}
                      skillImage={skill.image}
                    />
                  );
                })}
              </div>
            </div>
          );
        })}
      </Section>
    </div>
  );
};

export default Skills;