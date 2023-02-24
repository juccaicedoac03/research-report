import Plot from 'react-plotly.js';


const TopoPlot = ({ topoData }) => {
    const data = [
        {
          x: [-0.618, 0.618, 0, -0.707, 0.707, -0.813, 0.813, -0.5, 0.5, 0, -0.5, 0.5, -0.276, 0.276, -0.864, 0.864, -0.138, 0.138, -0.688, 0.688, -0.425, 0.425],
          y: [0.809, 0.809, 1, 0.707, 0.707, 0.587, 0.587, 0.309, 0.309, 0, -0.309, -0.309, -0.447, -0.447, -0.5, -0.5, -0.809, -0.809, -0.262, -0.262, -0.809, -0.809],
          mode: 'markers',
          marker: {
            color: 'blue',
            size: 8
          },
          type: 'scatterradius',
        }
    ];
    const layout = {
        xaxis: {
            range: [-1, 1],
            showgrid: false,
            showticklabels: false
        },
        yaxis: {
            range: [-1, 1],
            showgrid: false,
            showticklabels: false
        },
        height: 400,
        width: 400,
        margin: {
            t: 20,
            b: 20,
            l: 20,
            r: 20
        },
        images: [{
            x: -1,
            y: 1,
            sizex: 2,
            sizey: 2,
            source: 'https://raw.githubusercontent.com/plotly/plotly.js/master/test/image/head.png',
            xref: 'x',
            yref: 'y',
            layer: 'below'
          }]
    };
    
    return (
        <Plot
        data={data}
        layout={layout}
        />
    );
}

export default TopoPlot;