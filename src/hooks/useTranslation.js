// React/Next Components
import { useRouter } from 'next/router';

const useTranslation = (useContent, useLocale) => {
  const router = useRouter();
  const { locale, defaultLocale } = router;

  function translate(key, lib = useContent) {
    return lib[useLocale || locale][key] || lib[defaultLocale][key] || '';
  }

  return translate;
};

export default useTranslation;
