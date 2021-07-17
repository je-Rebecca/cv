import React from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
import styled from 'styled-components';
const Plot = createPlotlyComponent(Plotly);

// import Plot from 'react-plotly.js';

const FrontSkill = () => {
  return (
    <SkillWrap>
      <Plot
        data={[
          {
            marker: {
              color: '#CDF5C1',
            },
            type: 'bar',
            y: [
              'Styled-  <br>components  ',
              'HTML5  ',
              'CSS3  ',
              'SASS  ',
              'Redux  ',
              'React  ',
              'JavaScrip  ',
            ],
            x: [80, 80, 80, 80, 50, 90, 90],
            orientation: 'h', //가로로 변경
          },
        ]}
        config={{
          modeBarButtonsToRemove: [
            'pan2d',
            'select2d',
            'lasso2d',
            'resetScale2d',
            'zoomOut2d',
            'zoomIn2d',
            'zoom2d',
            'autoScale2d',
            'toImage',
          ],
          displaylogo: false,
          responsive: true,
        }}
        layout={{
          title: 'Frontend',
          width: '350',
          height: '350',
          margin: {
            l: 100,
            r: 50,
            b: 50,
            t: 50,
            pad: 0.5,
          },
          font: {
            family: 'Kalam',
            size: 15,
          },
          // yaxis.fig.update_yaxes(tickwidth=10px),
          xaxis: {
            autorange: true,
            showgrid: false,
            zeroline: false,
            showline: false,
            autotick: true,
            ticks: '',
            showticklabels: false,
          },
          yaxis: {
            tickfont: {
              size: 15,
            },
          },
        }}
      />
    </SkillWrap>
  );
};

const SkillWrap = styled.div``;

export default FrontSkill;
