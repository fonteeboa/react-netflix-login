import React from 'react';
import { useTranslation } from 'react-i18next';

function SelectLanguage() {
  const { i18n } = useTranslation();

  const changeLanguage = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const language = event.target.value;
    i18n.changeLanguage(language);
  };

  return (
    <div className="select-language-container">
      <select id="language-select" className="language-select" onChange={changeLanguage} defaultValue={i18n.language}>
        <option value="pt">Português</option>
        <option value="en">English</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}

export default SelectLanguage;
