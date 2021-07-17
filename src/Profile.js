import i18next from 'i18next';
import React from 'react';
// import '../src/img/care.JPG'
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
// import lavender from './img/lavender.jpg';
import lavender from './img/labw.JPG';
import { FaLinkedin, FaGithub, FaBloggerB } from 'react-icons/fa';
import { MdEmail, MdPhoneAndroid } from 'react-icons/md';
const Profile = () => {
  const { t } = useTranslation();
  // let phone = t('contact.phone')
  return (
    <First>
      <div className="container" id="profile">
        <Title>Profile</Title>
        {/* <img src={lavender}></img> */}
        <div className="profileWrap">
          <div className="leftBox">
            <div className="borderStyle">
              <img
                alt="pic"
                className="thumbStyle"
                src="https://ifh.cc/g/T5thHR.jpg"
              />

              <h3 className="name">{t('name')}</h3>
              <p className="job-title">{t('title')}</p>
            </div>
          </div>
          <div className="rightBox">
            <div className="textBox">
              <P size="2.2rem" bold="bold">
                About Me{' '}
              </P>
              <P>{t('message')}</P>
              <P>nationality :{t('nationality')}</P>
              <P>
                <MdPhoneAndroid /> {t('contact.phone')}
              </P>
              <P>
                <MdEmail />{' '}
                <a href={t('contact.email')}>{t('contact.email')}</a>
              </P>
              <P>
                <FaBloggerB />{' '}
                <a href={t('contact.blog')}>{t('contact.blog')}</a>
              </P>
              <P>
                <FaLinkedin />{' '}
                <a href={t('contact.linkedIn')}>{t('contact.linkedIn')}</a>
              </P>
              <P>
                <FaGithub />{' '}
                <a href={t('contact.github')}>{t('contact.github')}</a>
              </P>
            </div>
          </div>
        </div>
      </div>
    </First>
  );
};

const Title = styled.h1`
  text-align: center;
  padding: 4rem 0 2rem 0;
  font-family: 'Tillana', cursive;
  font-size: 4rem;
  font-weight: bold;
  color: #674e3c;
`;
const First = styled.div`
  background-image: url(${lavender});
  padding: 0 0 5rem 0;
  background-size: cover;
  @media only screen and (max-width: 600px) {
    width: 100%;
    height: 100%;
  }
  .profileWrap {
    display: flex;
    background: #ffffff78;
    flex-direction: row;
    width: 100%;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
    .leftBox,
    .rightBox {
      width: 50%;
      color: #414240;
      width: 50%;
      align-items: center;
      align-self: center;
      @media only screen and (max-width: 600px) {
        width: 100%;
      }
    }
    .container {
      width: 70%;
      margin: 0 auto;
    }
  }
  .thumbStyle {
    padding: 1rem;
    width: 65%;
  }
  .borderStyle {
    border: 5px solid #ffffff;
    width: 350px;
    height: 350px;
    padding: 0.5rem;
    margin: 0 auto;
    @media only screen and (max-width: 600px) {
      width: 100%;
      height: 100%;
    }
    .name {
      font-size: 2.5rem;
      font-family: 'Kalam';
      font-weight: bold;
    }
    .job-title {
      font-size: 1.2rem;
      font-family: 'Kalam';
      font-weight: bold;
    }
  }
  .textBox {
    padding: 1rem;
    text-align: left;
    margin: 0 auto;
    font-size: 1.3rem;
  }
`;
const P = styled.p`
  font-size: ${(props) => props.size || '1.2rem'};
  padding: 0.5rem;
  margin: 0;
  font-weight: ${(props) => props.bold || '100'};
  a {
    color: #414240;
  }
`;
export default Profile;
