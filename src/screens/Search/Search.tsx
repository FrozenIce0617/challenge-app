import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { View, FlatList, RefreshControl, Text } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import RNGooglePlaces from 'react-native-google-places';

import { RootState } from '../../redux/store';
import placeActions from '../../redux/place/actions';
import { Place } from '../../types/global';

import Button from '../../components/Button';
import * as Styled from './Search.style';

const HomeScreen: React.FC = () => {
  const dispatch = useDispatch();
  const { places, loading } = useSelector((state: RootState) => state.Place);

  const handleRefresh = useCallback(() => {
    dispatch(placeActions.getAllPlaces());
  }, [dispatch]);

  useFocusEffect(handleRefresh);

  const handleSearchPlace = () => {
    RNGooglePlaces.openAutocompleteModal({
      country: 'CA',
    })
      .then((place) => {
        const { address, name } = place;

        dispatch(
          placeActions.savePlace({
            keyword: name,
            address,
          }),
        );
      })
      .catch((error) => console.log(error.message));
  };

  const renderPlace = ({ item, index }: { item: Place; index: number }) => (
    <View key={index}>
      <Text>
        {item.keyword} - {item.address}
      </Text>
    </View>
  );

  return (
    <Styled.Container>
      <Button text="Search" onPress={handleSearchPlace} />
      <FlatList
        data={places}
        renderItem={renderPlace}
        refreshControl={
          <RefreshControl
            refreshing={loading}
            onRefresh={handleRefresh}
            title="Loading"
          />
        }
      />
    </Styled.Container>
  );
};

export default HomeScreen;
