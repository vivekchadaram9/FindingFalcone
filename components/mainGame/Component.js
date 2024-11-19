import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import MainGameContainer from './Container';
import {globalStyles} from '../../styles/globalStyles';
import DropDown from '../../features/DropDown';

const MainGame = ({navigation}) => {
  const {
    planets,
    vehicles,
    onChangePlanet,
    onChangeVehicle,
    selection,
    totalTime,
  } = MainGameContainer(navigation);
  console.log(vehicles, 'vehicles');
  console.log(planets, 'planets');

  const renderVehicleDropdown = index => {
    return (
      <DropDown
        placeholder={'Select Vehicle'}
        value={selection?.[index]?.[1]?.name}
        data={vehicles.filter(each => each.total_no > 0)}
        renderItem={item => <Text>{item.name + ` (${item?.total_no})`}</Text>}
        onChange={item => onChangeVehicle(index, item)}
        selectedTextStyle={{color: 'black'}}
        disableItemCondition={item =>
          selection?.[index]?.[0]?.distance <= item?.max_distance
        }
      />
    );
  };

  const renderPlanetDropdown = index => {
    return (
      <DropDown
        placeholder={'Select Planet'}
        value={selection?.[index]?.[0]?.name}
        data={planets.filter(each => !each.selected)}
        renderItem={item => <Text>{item.name}</Text>}
        onChange={item => onChangePlanet(index, item)}
        selectedTextStyle={{color: 'black'}}
      />
    );
  };

  const renderDestinations = index => {
    return (
      <View key={index} style={{width: '90%'}}>
        <Text>Destination {index + 1}:</Text>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: selection?.[index]?.[0]?.name
              ? 'space-between'
              : 'flex-start',
            marginVertical: 20,
          }}>
          {renderPlanetDropdown(index)}
          {selection?.[index]?.[0]?.name ? renderVehicleDropdown(index) : null}
        </View>
      </View>
    );
  };
  return (
    <SafeAreaView>
      <View style={globalStyles.mainContainer}>
        <Text>Finding Falcone</Text>
        <Text>Select planets you want to search in:</Text>
        {[...Array(4)].map((each, index) => renderDestinations(index))}
        <Text>{`Total time taken : ${totalTime}`}</Text>
      </View>
    </SafeAreaView>
  );
};

export default MainGame;

const styles = StyleSheet.create({});
