// React/Next Components
import { useRouter } from 'next/router';

const useTranslation = (content) => {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  function translate(key, translateLib = content) {
    return translateLib[locale][key] || translateLib[defaultLocale][key] || '';
  }

  return translate;
};

export default useTranslation;
