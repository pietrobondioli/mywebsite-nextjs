// Hooks
import useTranslation from '../../../../../hooks/useTranslation';

// Contents
import presentationItemContent from './content';

function PresentationItem(props) {
  const { title, text, image } = props;
  const translation = useTranslation(presentationItemContent);

  return (
    <section className="presentation">
      <div className="presentation__title">{title}</div>
      <div className="presentation__content">
        <img className="content__image" src={image} alt="img" />
        <div>
          <div className="content__text">{text}</div>
          <div className="content__button">{translation('readMore')}</div>
        </div>
      </div>
    </section>
  );
}

export default PresentationItem;
