import {SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {getAuthenticationToken} from '../../Services/ApiServices';
import MainGameContainer from './Container';
import {globalStyles} from '../../styles/globalStyles';
import {Dropdown} from 'react-native-element-dropdown';

const MainGame = ({navigation}) => {
  const {planets, vehicles, onChangePlanet, onChangeVehicle} =
    MainGameContainer(navigation);

  const renderDropDown = (index, type) => {
    let isVehicle = type === 'vehicles';

    const vehicleOject = {
      placeholder: 'Select Vehicle',
      data: vehicles.filter(each => each.total_no !== 0),
      onChangeFunction: onChangeVehicle,
      // selectedValue : vehicles.find((each)=>each)
    };
    const planetObject = {
      placeholder: 'Select Planet',
      data: planets.filter(each => !each.isSelected),
      onChangeFunction: onChangePlanet,
    };

    let renderObject = isVehicle ? vehicleOject : planetObject;

    return (
      <Dropdown
        placeholder={renderObject.placeholder}
        style={{
          width: '45%',
          backgroundColor: 'white',
          padding: 5,
          borderRadius: 5,
        }}
        value={'some'}
        data={renderObject.data}
        labelField="name"
        valueField="name"
        label="Dropdown"
        renderItem={item => <Text>{item.name}</Text>}
        onChange={item => renderObject.onChangeFunction(item._index)}
        dropdownPosition="auto"
        selectedTextStyle={{color: 'black'}}
      />
    );
  };
  const renderDestinations = index => {
    return (
      <View key={index}>
        <Text>Destination {index + 1}:</Text>
        <View
          style={{
            display: 'flex',
            width: '80%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginVertical: 20,
          }}>
          {renderDropDown(index, 'planets')}
          {renderDropDown(index, 'vehicles')}
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
      </View>
    </SafeAreaView>
  );
};

export default MainGame;

const styles = StyleSheet.create({});
