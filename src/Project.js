import React from 'react';
import styled from 'styled-components';
import { FaGithub, FaLink } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';
const Project = () => {
  const { t } = useTranslation();
  let pro = t('projects.projectData', { returnObjects: true });
  return (
    <ContainerBox id="project">
      <div className="container">
        <Title>Project</Title>
        <SkillRow>
          {/* <Care /> */}
          {pro.map((i) => (
            <div className="flexed" key={i.id}>
              <img className="imgStyle" src={i.imgUrl} alt="" />
              <div className="flexed-row">
                <h3>{i.projectName} </h3>
                <p>{i.desc}</p>
                <p className="icons">
                  <span>
                    <a href={i.gitUrl}>
                      <FaGithub />
                    </a>
                  </span>
                  <span>
                    <a href={i.projectUrl}>
                      <FaLink />
                    </a>{' '}
                  </span>
                </p>
              </div>
            </div>
          ))}
        </SkillRow>
      </div>
    </ContainerBox>
  );
};
const ContainerBox = styled.div`
  .container {
    margin: 0 auto;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const Title = styled.div`
  text-align: center;
  padding: 4rem 0 2rem 0;
  font-family: 'Tillana', cursive;
  font-size: 4rem;
  font-weight: bold;
  color: #c19c81;
`;

const SkillRow = styled.div`
  width: 80%;
  margin: 2rem auto;
  text-align: left;
  display: flex;
  flex-direction: column;
  .flexed {
    display: flex;
    flex-direction: row;
    padding: 1rem;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
    }

    .imgStyle {
      width: 250px;
      height: 200px;
      @media only screen and (max-width: 600px) {
        width: 240px;
        height: 150px;
      }
    }
  }
  .flexed-row {
    flex-direction: row;
    align-self: auto;
    padding: 1rem;
    color: #414240;
    h3 {
      font-family: 'Kalam';
    }
  }
  .icons {
    cursor: pointer;
    font-size: 1.2rem;
    a {
      color: #414240;
      padding-right: 0.5rem;
    }
  }
`;
export default Project;
