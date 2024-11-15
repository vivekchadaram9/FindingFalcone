//usuallly all the functionality part stays in the MainGameContainer

import {useEffect, useLayoutEffect, useState} from 'react';
import {getPlanets, getVehicles} from '../../Services/ApiServices';

const MainGameContainer = () => {
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const callApis = () => {
    getVehicles(
      res => setVehicles(res),
      err => console.log(err),
    );
    getPlanets(
      res => setPlanets(res),
      err => console.log(err),
    );
  };
  useLayoutEffect(() => {
    callApis();
  }, []);

  const onChangeVehicle = (index, val) => {
    console.log(index, 'index');
    let updatedVehicles = vehicles.map(each => {
      if (each._index === index) {
        return {...each, total_no: each.total_no - 1};
      } else {
        return each;
      }
    });
    setVehicles(updatedVehicles);
  };

  const onChangePlanet = (index, val) => {
    let updatedPlanets = planets.map(each => {
      if (each._index === index) {
        return {...each, isSelected: true};
      } else {
        return each;
      }
    });

    setPlanets(updatedPlanets);
  };

  return {
    planets,
    vehicles,
    onChangePlanet,
    onChangeVehicle,
  };
};

export default MainGameContainer;
