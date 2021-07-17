import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import i18next from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import App from './App';
import 'flag-icon-css/css/flag-icon.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import Profile from './Profile';
import Experience from './Experience';
import App from './App';
import Header from './Header';
import Home from './Home';
import lavender from './img/labw.JPG';
import './index.css';
import Loading from './Loading';
i18next
  .use(HttpApi)
  .use(LanguageDetector)
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: ['en', 'ko'],
    fallbackLng: 'en',
    debug: false,
    detection: {
      order: ['path', 'cookie', 'htmlTag'],
      caches: ['cookie'],
    },
    backend: {
      loadPath: '/assets/locales/{{lng}}/translation.json',
    },
  });
// i18next.init((err,t)=>{
//   if(err) return console.log('something',err);
//   t('key');
// })
const loadingMarkUp = (
  <div className="py-4 text-center">
    <h2>loading... </h2>
  </div>
);

ReactDOM.render(
  <Suspense fallback={loadingMarkUp}>
    <BrowserRouter>
      <Switch>
        <Route>
          <Header />
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  </Suspense>,
  document.getElementById('root')
);
