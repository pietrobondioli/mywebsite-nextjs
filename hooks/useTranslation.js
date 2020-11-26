// React/Next Components
import { useRouter } from 'next/router';

const useTranslation = (content) => {
  const router = useRouter();
  const { locale, defaultLocale } = router;
  console.log(`local: ${locale}`);

  function translate(key) {
    if (!content[locale][key]) {
      console.warn(`Translation '${key}' for locale '${locale}' not found.`);
    }
    return content[locale][key] || content[defaultLocale][key] || '';
  }

  return translate;
};

export default useTranslation;
