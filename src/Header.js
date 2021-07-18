import React, { useEffect } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap';
import i18next from 'i18next';
import cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
// console.log(toSkill);

const languages = [
  {
    code: 'ko',
    lang_name: '한국어',
    country_code: 'kr',
  },
  {
    code: 'en',
    lang_name: 'English',
    country_code: 'us',
  },
];

// const skilledClicked = () => {
//   console.log(Skill.toSkill());
//   // Skill.skillBox.scrollTop = '980px';
// };
const Header = () => {
  // const [scroll, setScroll] = useState(0);
  // function scrollSkill() {
  //   setScroll(900);
  //   console.log(scroll);
  //   document.body.scrollTop = scroll;
  // }
  const scrollToProfile = () => {
    window.scrollTo(0, 0);
  };
  const scrollToSkill = () => {
    window.scrollTo(0, 1000);
  };
  const scrollToExp = () => {
    window.scrollTo(0, 2000);
  };
  const scrollToProject = () => {
    window.scrollTo(0, 3000);
  };
  const { t } = useTranslation();
  useEffect(() => {
    console.log('Setting page stuff');
    document.title = t('app_title');
  }, [t]);
  const currentLanguageCode = cookies.get('i18next') || 'en';
  return (
    <Div className="navbar navbar-light">
      <DropdownButton id="dropdown-basic-button" variant="light" title="">
        {languages.map(({ code, lang_name, country_code }) => (
          <Dropdown.Item
            key={code}
            onClick={() => i18next.changeLanguage(code)}
            disabled={code === currentLanguageCode}
          >
            <span className={`flag-icon flag-icon-${country_code} mx-2`}></span>
            {lang_name}
          </Dropdown.Item>
        ))}
      </DropdownButton>
      <NavWrap>
        <a href="#profile" className="linkStyle">
          <button onClick={scrollToProfile}>Profile</button>
        </a>
        <a href="#skill" className="linkStyle">
          <button onClick={scrollToSkill}>Skills</button>
        </a>
        <a href="#experience" className="linkStyle">
          <button onClick={scrollToExp}>Experience</button>
        </a>
        <a href="#project" className="linkStyle">
          <button onClick={scrollToProject}>Project</button>
        </a>
      </NavWrap>
    </Div>
  );
};

const Div = styled.div`
  background-color: #f9dfe2;
  position: fixed;
  width: 100%;
  z-index: 100;
`;
const NavWrap = styled.div`
  button {
    border: none;
    background: none;
    font-size: 1.2rem;
    font-family: 'Tillana';
    color: #73553e;
  }
`;

export default Header;
