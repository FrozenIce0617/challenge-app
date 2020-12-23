import React from 'react';

import useSensors, { SensorData, BarometerData } from '../../hooks/useSensors';
import * as Styled from './Sensor.style';

const SensorScreen: React.FC = () => {
  const {
    accelerometerState,
    gyroscopeState,
    magnetometerState,
    barometerState,
  } = useSensors();

  const renderSensorStatus = (
    title: string,
    status?: SensorData | BarometerData,
  ) => {
    if (!status) {
      return <></>;
    }

    return (
      <Styled.Content>
        <Styled.SensorType>{title}</Styled.SensorType>
        {Object.keys(status).map((statusKey: string) => {
          return (
            <Styled.StatusWrapper key={statusKey}>
              <Styled.ContentTitle>{statusKey} : </Styled.ContentTitle>
              <Styled.ContentValue>{status[statusKey]}</Styled.ContentValue>
            </Styled.StatusWrapper>
          );
        })}
      </Styled.Content>
    );
  };

  return (
    <Styled.Container>
      <Styled.Title>Sensor Info:</Styled.Title>
      {renderSensorStatus('Accelerometer', accelerometerState)}
      {renderSensorStatus('Gyroscope', gyroscopeState)}
      {renderSensorStatus('Magnetometer', magnetometerState)}
      {renderSensorStatus('Barometer', barometerState)}
    </Styled.Container>
  );
};

export default SensorScreen;
