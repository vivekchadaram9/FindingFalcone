//usuallly all the functionality part stays in the MainGameContainer

import {useEffect, useLayoutEffect, useMemo, useState} from 'react';
import {getPlanets, getVehicles} from '../../Services/ApiServices';

const MainGameContainer = () => {
  const [planets, setPlanets] = useState([]);
  const [vehicles, setVehicles] = useState([]);
  const [selection, setSelection] = useState({});
  const [totalTime, setTotalTime] = useState(0);
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
    let selectedPlanet = selection?.[index]?.[0] ?? {};
    let selectedVehicle = selection?.[index]?.[1];
    setSelection(prev => ({...prev, [index]: [selectedPlanet, val]}));
    let newVehicles = vehicles.map(vehicle => {
      if (val?.name === selectedVehicle?.name) {
        return vehicle;
      } else if (vehicle?.name === selectedVehicle?.name) {
        return {...vehicle, total_no: vehicle?.total_no + 1};
      } else if (vehicle?.name === val?.name) {
        return {...vehicle, total_no: vehicle?.total_no - 1};
      }
      return vehicle;
    });
    setVehicles(newVehicles);
    getTotalTime({...selection, [index]: [selectedPlanet, val]});
  };

  const onChangePlanet = (index, val) => {
    let selectedVehicle = selection?.[index]?.[1] ?? {};
    let selectedPlanet = selection?.[index]?.[0] ?? {};
    setSelection(prev => ({...prev, [index]: [val, selectedVehicle]}));
    let newPlanets = [...planets].map(planet => {
      if (planet?.name === selectedPlanet?.name) {
        return {...planet, selected: false};
      }
      if (planet?.name === val?.name) {
        return {...planet, selected: true};
      } else {
        return planet;
      }
    });
    setPlanets(newPlanets);
  };

  const getTotalTime = newSelection => {
    let time = 0;
    Object.keys(newSelection)?.forEach(each => {
      if (newSelection?.[each]?.[0]?.distance) {
        time +=
          newSelection?.[each]?.[0]?.distance /
          newSelection?.[each]?.[1]?.speed;
      }
    });
    console.log(time);
    setTotalTime(time);
  };

  return {
    planets,
    vehicles,
    onChangePlanet,
    onChangeVehicle,
    selection,
    setSelection,
    totalTime,
  };
};

export default MainGameContainer;
