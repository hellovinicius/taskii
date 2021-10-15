import React, {useContext, useEffect, useState} from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {DateContext} from '../../contexts/dateContext';
import {getDateList} from '../../services/date/getDateList';
import DateTile from '../DateTile';

export default function DatePicker() {
  const {date, setDate} = useContext(DateContext);
  const [flatlist, setFlatlist] = useState<FlatList<Date>>();

  const [dateList, setDateList] = useState(getDateList);

  useEffect(() => {
    const dates = getDateList(date);
    setDateList(dates);
    flatlist?.scrollToIndex({animated: true, index: 14});
  }, [date]);

  const changeDate = (date: Date) => setDate(date);

  return (
    <View style={styles.container}>
      <FlatList
        horizontal
        data={dateList}
        initialScrollIndex={14}
        ref={ref => setFlatlist(ref!)}
        renderItem={({item, index}) => {
          return (
            <>
              <DateTile date={item} selectedDate={date} onClick={changeDate} />
              <View style={{marginRight: 20}} />
            </>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingLeft: 20,
  },
});
