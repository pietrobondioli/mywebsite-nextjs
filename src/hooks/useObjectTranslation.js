// Hooks
import useTranslation from './useTranslation';

const useObjectTranslation = (useContent, useLocale) => {
  function translateObject(object, lib = useContent) {
    const translate = useTranslation(lib, useLocale);
    const objectEntries = Object.entries(object);
    const translatedObject = {};
    objectEntries.forEach(([key, value]) => {
      translatedObject[key] = translate(value);
    });
    return translatedObject;
  }

  return translateObject;
};

export default useObjectTranslation;
