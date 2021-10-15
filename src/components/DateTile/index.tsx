import {getDay} from 'date-fns';
import getDate from 'date-fns/getDate';
import getMonth from 'date-fns/getMonth';
import isSameDay from 'date-fns/isSameDay';
import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {getMonthString} from '../../services/date/getMonthString';
import {getWeekString} from '../../services/date/getWeekString';

interface DateTileProps {
  date: Date;
  selectedDate: Date;
  onClick: (date: Date) => void;
}

export default function DateTile(props: DateTileProps) {
  const {date, selectedDate, onClick} = props;

  const monthString = getMonthString(getMonth(date)).short;
  const dayString = getDate(date);
  const weekdayString = getWeekString(getDay(date)).short;

  return (
    <TouchableOpacity
      onPress={() => onClick(date)}
      style={{
        ...styles.dateTile,
        borderColor: isSameDay(selectedDate, date) ? 'orange' : 'lightgray',
      }}>
      <Text style={styles.otherText}>{monthString}</Text>
      <Text style={styles.dateText}>{dayString}</Text>
      <Text style={styles.otherText}>{weekdayString}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  dateTile: {
    width: 70,
    height: 100,
    borderWidth: 1,
    borderColor: 'lightgray',
    borderStyle: 'solid',
    borderRadius: 10,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  dateText: {
    color: 'black',
    fontWeight: '900',
    fontSize: 25,
  },
  otherText: {
    color: '#757575',
  },
});
