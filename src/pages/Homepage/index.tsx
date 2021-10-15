import React from 'react';
import {ScrollView} from 'react-native';
import DatePicker from '../../components/DatePicker';
import Header from '../../components/Header';
import TodoList from '../../components/TodoList';
import DateProvider from '../../contexts/dateContext';

export default function Homepage() {
  return (
    <ScrollView>
      <Header />
      <DateProvider>
        <DatePicker />
        <TodoList />
      </DateProvider>
    </ScrollView>
  );
}
