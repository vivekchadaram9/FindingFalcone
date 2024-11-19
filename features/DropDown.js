import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';

const DropDown = props => {
  const {
    value = '',
    onChange = () => {},
    placeholder,
    data,
    style,
    renderItem = <></>,
    disableItemCondition = () => false,
    disableItemStyle = {},
  } = props;
  const [open, setOpen] = useState(false);
  const renderData = item => {
    const onSelectItem = () => {
      onChange(item);
      setOpen(prev => !prev);
    };
    return (
      <TouchableOpacity
        onPress={onSelectItem}
        disabled={disableItemCondition(item)}>
        {renderItem(item) ?? <Text>{item?.name}</Text>}
      </TouchableOpacity>
    );
  };
  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          setOpen(prev => !prev);
        }}
        disabled={data?.length === 0}
        style={[
          {
            minWidth: '45%',
            backgroundColor: 'white',
            padding: 5,
            borderRadius: 5,
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: 'row',
          },
          style,
        ]}>
        <Text>{value || placeholder}</Text>
        <Text>▼</Text>
      </TouchableOpacity>
      {open && (
        <View
          style={{
            minWidth: '100%',
            backgroundColor: 'white',
            padding: 5,
            borderRadius: 5,
            position: 'absolute',
            zIndex: 10,
            top: 30,
          }}>
          {data.map(each => renderData(each))}
        </View>
      )}
    </View>
  );
};

export default DropDown;

const styles = StyleSheet.create({});
