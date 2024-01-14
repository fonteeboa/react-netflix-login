import React from 'react';
import SelectLanguage from './selectLanguage';
import { useTranslation } from 'react-i18next';

function Footer() {
  const { t } = useTranslation();
  const links = [
    { href: '/', text: 'footer.questions' },
    { href: '/', text: 'common.faq' },
    { href: '/', text: 'common.helpCenter' },
    { href: '/', text: 'common.termsOfUse' },
    { href: '/', text: 'common.privacy' },
    { href: '/', text: 'common.cookiePreferences' },
    { href: '/', text: 'common.corporateInfo' }
  ];

  return (
    <footer className="fixed-bottom bg-black opacity-75 d-flex flex-column justify-content-center align-items-center" style={{ minHeight: '130px', maxHeight: '130px' }}>
      <div className="d-flex justify-content-center align-items-center flex-wrap">
        <SelectLanguage />
        {links.map(link => (
          <a key={link.text} href={link.href} className="text-white text-decoration-none mx-2">
            {t(link.text)}
          </a>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
