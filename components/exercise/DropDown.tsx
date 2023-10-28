import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Rest of your component code...

const DropdownFilter = ({ selectedOption,handleFilter }:any) => {

  return (
    <View style={{display:'flex',paddingTop:10,justifyContent:'space-between'}}>
      <Text style={{right:14}}>{selectedOption}</Text>
      <Picker
        selectedValue={selectedOption}
        onValueChange={itemValue => handleFilter(itemValue)}
        style={{width:46,right:-15,top:-32,padding:10}}
      >
        <Picker.Item label="All" value="All" />
        <Picker.Item label="Cable" value="cable" />
        <Picker.Item label="Body Weight" value="body weight" />
        <Picker.Item label="Barbell" value="barbell" />
        <Picker.Item label="Dumbbell" value="dumbbell" />
      </Picker>
    </View>
  );
};

export default DropdownFilter;
