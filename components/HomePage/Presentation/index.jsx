// Components
import PresentationItem from './components/PresentationItem';

// Hooks
import useTranslation from '../../../hooks/useTranslation';

// Contents
import presentationContent from './content';

const Presentation = () => {
  return (
    <>
      {presentationContent.map((content) => {
        const translate = useTranslation(content);
        return (
          <PresentationItem
            key={translate('title')}
            title={translate('title')}
            text={translate('text')}
            image={content.image}
          />
        );
      })}
    </>
  );
};

export default Presentation;
