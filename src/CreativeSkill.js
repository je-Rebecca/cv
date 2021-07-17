import React from 'react';
import Plotly from 'plotly.js-basic-dist';
import createPlotlyComponent from 'react-plotly.js/factory';
const Plot = createPlotlyComponent(Plotly);

// import Plot from 'react-plotly.js';

const CreativeSkill = () => {
  return (
    <div>
      <Plot
        data={[
          {
            marker: {
              color: '#b4be84',
            },

            title: 'Creative Skills',
            type: 'bar',
            y: ['', '', 'InDesign  ', 'Illustrator  ', 'Photoshop  '],
            x: [0, 0, 80, 80, 80],
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
          title: 'Creative',
          width: '350',
          height: '350',
          font: {
            family: 'Kalam',
            size: 15,
          },
          margin: {
            l: 100,
            r: 50,
            b: 50,
            t: 50,
            pad: 0.5,
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
    </div>
  );
};

export default CreativeSkill;
