import React, { useCallback, useState } from 'react';
import { View, Text, FlatList, RefreshControl } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import UserInactivity from 'react-native-user-inactivity';

import { RootState } from '../../redux/store';
import sessionActions from '../../redux/session/actions';

import Button from '../../components/Button/Button';
import { Session } from '../../types/global';
import * as Styled from './Home.style';

const IDLE_TIMER = 3 * 1000; // 3s

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [active, setActive] = useState(true);
  const { sessions, loading } = useSelector(
    (state: RootState) => state.Session,
  );

  let startTime = new Date();
  let stopTime = new Date();

  const handleRefresh = useCallback(() => {
    dispatch(sessionActions.getAllSessions());
  }, [dispatch]);

  useFocusEffect(handleRefresh);

  const handlePressSensor = useCallback(() => {
    navigation.navigate('Sensor');
  }, [navigation]);

  const handleSearch = useCallback(() => {
    navigation.navigate('Search');
  }, [navigation]);

  const handleActionChanged = useCallback(
    (isActive: boolean) => {
      if (!active && isActive) {
        startTime = new Date();
      }
      if (active && !isActive) {
        stopTime = new Date();

        dispatch(
          sessionActions.saveSession({
            start: startTime,
            end: stopTime,
            sensor: 'sensor string',
          }),
        );
      }

      setActive(isActive);
    },
    [setActive],
  );

  const renderSession = ({ item, index }: { item: Session; index: number }) => (
    <View key={index}>
      <Text>Start Time - {item.start}</Text>
      <Text>End Time - {item.end}</Text>
    </View>
  );

  return (
    <Styled.Container>
      <UserInactivity
        isActive={active}
        timeForInactivity={IDLE_TIMER}
        onAction={handleActionChanged}>
        <Button text="Sensors" onPress={handlePressSensor} />
        <Button text="Search Places" onPress={handleSearch} />
        <Styled.StatusText>
          Home Session Status: {active ? 'Active' : 'Inactive'}
        </Styled.StatusText>
        <FlatList
          data={sessions}
          renderItem={renderSession}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={handleRefresh}
              title="Loading"
            />
          }
        />
      </UserInactivity>
    </Styled.Container>
  );
};

export default HomeScreen;
