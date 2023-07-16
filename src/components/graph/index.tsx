import React from 'react';
import dynamic from 'next/dynamic';

const Plot = dynamic(() => import('react-plotly.js'), { ssr: false });


interface EnergyGraphProps {
    data: { Timestamp: string; Energy_Consumption_Prediction: number }[];
  }
  
const EnergyGraph: React.FC<EnergyGraphProps> = ({ data }) => {
    const timestamps = data.map((item) => item.Timestamp);
    const energyConsumptions = data.map((item) => item.Energy_Consumption_Prediction);
  
    const plotData = [
      {
        x: timestamps,
        y: energyConsumptions,
        type: 'scatter',
        mode: 'lines',
        name: 'Energy Consumption',
        marker: { color: 'blue' },
      },
    ];
  
    const layout = {
      title: 'Energy Consumption Prediction',
      xaxis: { title: 'Timestamp' },
      yaxis: { title: 'Energy Consumption' },
    };
  
    return (
      <Plot
        data={plotData}
        layout={layout}
        config={{ displayModeBar: false }}
        style={{ width: '100%', height: '600px' }}
      />
    );
  };
  
export default EnergyGraph;