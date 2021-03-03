// Components
import Section from '../../../components/Section';
import SectionTitle from '../../../components/Section/SectionTitle';
import SectionContent from '../../../components/Section/SectionContent';

// Hooks
import useTranslation from '../../../hooks/useTranslation';

// Content
import presentationContent from './content';

const Presentation = () => {
  return (
    <div id="presentation">
      {presentationContent.map((content) => {
        const translate = useTranslation(content);
        return (
          <Section key={translate('title')} sectionType="flex-h">
            <SectionTitle title={translate('title')} />
            <SectionContent
              text={translate('text')}
              image={content.image}
              readMore={content.readMore}
              readMoreLink={content.readMoreLink}
            />
          </Section>
        );
      })}
    </div>
  );
};

export default Presentation;
