// Components
import Section from '../../Section';
import SectionTitle from '../../Section/SectionTitle';
import SectionContent from '../../Section/SectionContent';

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
          <Section key={translate('title')}>
            <SectionTitle title={translate('title')} />
            <SectionContent
              text={translate('text')}
              image={content.image}
              readMore={content.readMore}
            />
          </Section>
        );
      })}
    </div>
  );
};

export default Presentation;
