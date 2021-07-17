import i18next from 'i18next';
import React from 'react';
import { useTranslation } from 'react-i18next';
import styled from 'styled-components';
import { MdLocationOn } from 'react-icons/md';
import { FiLink } from 'react-icons/fi';
const Experience = () => {
  const { t } = useTranslation();
  let com = t('experience.experienceData', { returnObjects: true });
  let edu = t('education.educationData', { returnObjects: true });

  return (
    // <BackGroundColor>
    <ContainerBox id="experience">
      <div className="container">
        <Title>Experience </Title>
        <ExpBox>
          <div className="career">
            <Subtitle>Careers</Subtitle>
            {com.map((i) => (
              <CompanyBox key={i.id}>
                <div className="left">
                  <p className="bold">{i.company}</p>
                  <p>{i.timeframe}</p>
                </div>
                <div className="right">
                  <p>{i.jobTitle}</p>
                  <p className="desc">{i.desc}</p>
                  <div className="flexed">
                    <div className="pWrap">
                      <p className="paddingR">
                        <MdLocationOn /> {i.location}
                      </p>{' '}
                      <p>
                        <a href={i.site}>
                          <FiLink />
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </CompanyBox>
            ))}
          </div>

          <div className="education">
            <Subtitle>Educations</Subtitle>
            {edu.map((i) => (
              <CompanyBox>
                <div className="flexed" key={i.id}>
                  <div className="left">
                    <p className="bold">{i.school}</p>
                    <p>{i.time}</p>
                  </div>
                  <div className="right">
                    <p>{i.study}</p>
                  </div>
                </div>
              </CompanyBox>
            ))}
          </div>
        </ExpBox>
      </div>
    </ContainerBox>
    // </BackGroundColor>
  );
};
// const BackGroundColor = styled.div`
// `;
const ContainerBox = styled.div`
  background: #e0cec0;
  .container {
    width: 100%;
    margin: 0 auto;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Title = styled.h1`
  color: #674e3c;
  text-align: center;
  padding: 4rem 0 2rem 0;
  font-family: 'Tillana', cursive;
  font-size: 4rem;
  font-weight: bold;
`;
const ExpBox = styled.div`
  display: flex;
  color: #414240;
  flex-direction: row;
  .career,
  .education {
    width: 50%;
    padding: 2rem;
  }
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
    .career,
    .education {
      width: 100%;
      padding: 2rem;
    }
  }
`;
const Subtitle = styled.h3`
  font-family: 'Kalam';
  font-size: 2.75rem;
`;
const CompanyBox = styled.div`
  display: flex;
  padding: 1rem;
  width: 100%;
  flex-direction: row;
  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
  .left,
  .right {
    flex-direction: column;
    width: 100%;
    padding: 0.5rem;
    @media only screen and (max-width: 600px) {
      flex-direction: row;
    }
    p {
      margin: 0;
      text-align: left;
    }
  }
  .bold {
    font-weight: bold;
    padding-bottom: 0.5rem;
  }
  .desc {
    padding: 1rem 0rem;
  }
  .paddingR {
    padding-right: 5px;
  }
  .flexed {
    display: flex;
    width: 100%;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }
    .pWrap {
      display: flex;
      flex-direction: row;
    }
  }
`;

export default Experience;
