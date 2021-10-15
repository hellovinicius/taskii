import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {DateContext} from '../../contexts/dateContext';

export default function TodoList() {
  const {date} = useContext(DateContext);

  async function loadTodos() {}

  useEffect(() => {});

  return (
    <View>
      <Text>Hoje é {date.toString()}</Text>
    </View>
  );
}
