import { View, Text } from 'react-native';
import styled from 'styled-components/native';

export const Container = styled(View)`
  flex: 1;
  padding: 24;
  background-color: #eaeaea;
`;

export const Title = styled(Text)`
  margin-top: 32;
  margin-bottom: 32;
  padding-top: 8 0;
  border-width: 4;
  border-color: #20232a;
  border-radius: 6;
  background-color: #0ea0f5;
  color: #20232a;
  text-align: center;
  font-size: 30;
  font-weight: bold;
`;

export const Content = styled(View)`
  flex-direction: column;
  padding: 4 0;
`;

export const SensorType = styled(Text)`
  font-size: 24;
  font-weight: bold;
`;

export const StatusWrapper = styled(View)`
  flex-direction: row;
`;

export const ContentTitle = styled(Text)`
  font-size: 18;
  font-weight: bold;
`;

export const ContentValue = styled(Text)`
  font-size: 18;
`;
