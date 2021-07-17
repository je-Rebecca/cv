import React, { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { DropdownButton, Dropdown } from 'react-bootstrap';
// import { globe } from './globe';

function App() {
  // const currentLanguage = languages.find(i =>i.code ===currentLanguageCode);
  const { t } = useTranslation();

  return (
    <div className="container">
      <div className="d-flex flex-column algin-items-start">
        <h1>app</h1>
      </div>
      <div className="d-flex justify-content-end"></div>
    </div>
  );
}

export default App;
