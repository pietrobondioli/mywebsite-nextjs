import React from 'react';

// Hooks
import useTranslation from '../../../../../hooks/useTranslation';

// Contents
import presentationItemContent from './content';

// Contexts
import { ThemeContext } from '../../../../../contexts/ThemeContext';

function PresentationItem(props) {
  const { title, text, image, readMore } = props;
  const { isDarkTheme } = React.useContext(ThemeContext);
  const translation = useTranslation(presentationItemContent);

  return (
    <section id={title} className={`presentation ${isDarkTheme && 'presentation_darkMode'}`}>
      <div className="presentation__title">{title}</div>
      <div className="presentation__content">
        <img className="content__image" src={image} alt="img" />
        <div>
          <div className="content__text">{text}</div>
          {readMore && <div className="content__button">{translation('readMore')}</div>}
        </div>
      </div>
    </section>
  );
}

export default PresentationItem;
