'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useTranslation } from 'react-i18next';

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const pathname = usePathname();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    const segments = pathname.split('/');
    if (segments[1] === 'en' || segments[1] === 'uz' || segments[1] === 'ru') {
      segments[1] = lng;
    } else {
      segments.splice(1, 0, lng);
    }
    const newPath = segments.join('/');
    router.replace(newPath);
  };

  return (
    <div className="flex items-center">
      <button onClick={() => changeLanguage('en')} className="mr-2">
        EN
      </button>
      <button onClick={() => changeLanguage('uz')} className="mr-2">
        UZ
      </button>
      <button onClick={() => changeLanguage('ru')}>RU</button>
    </div>
  );
}