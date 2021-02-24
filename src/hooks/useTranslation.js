// React/Next Components
import { useRouter } from 'next/router';

const useTranslation = (content) => {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  function translate(key, lib = content) {
    return lib[locale][key] || lib[defaultLocale][key] || '';
  }

  return translate;
};

export default useTranslation;
