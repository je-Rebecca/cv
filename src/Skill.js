import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import FrontSkill from './FrontSkill';
import BackendSkill from './BackendSkill';
import styled from 'styled-components';
import { useRef } from 'react';
import CreativeSkill from './CreativeSkill';
// const Barchart = React.lazy(() => import('./BarChart'));

const Skill = () => {
  const skillBox = useRef();
  // const { scrollTop, clientHeight } = skillBox.current;
  // console.log(scrollTop, clientHeight);
  // let tem = document.querySelector('Title');
  // let tem = document.querySeletor.title;
  // console.log(tem.offset());
  // function toSkill() {
  //   return (skillBox.current.scrollTop = clientHeight);
  // }
  // const {scrollTop , setScrollTop} = useState(0);
  // setScrollTop('900px');
  // console.log(skillBox);
  console.log(skillBox.current);
  // console.log(skillBox.current.scrollHeight);
  // console.log(skillBox[scrollHeight]);
  const { t } = useTranslation();
  return (
    <ContainerBox ref={skillBox} id="skill">
      <div className="container">
        <Title>Skills</Title>

        {/* {Barchart} */}
        <ChartWrap>
          <FrontSkill />
          <BackendSkill />
          <CreativeSkill />
        </ChartWrap>
        <p>Creative Skills</p>
        <p>Adobe Photoshop, illustrator, InDesign </p>
      </div>
    </ContainerBox>
  );
};

const ContainerBox = styled.div`
  .container {
    width: 100%;
    margin: 0 auto;
  }
  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;
const ChartWrap = styled.div`
  display: flex;
  flex-direction: row;
  @media only screen and (max-width: 1000px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  text-align: center;
  padding: 4rem 0 2rem 0;
  font-family: 'Tillana', cursive;
  font-size: 4rem;
  font-weight: bold;
  color: #c19c81;
`;
export default Skill;
