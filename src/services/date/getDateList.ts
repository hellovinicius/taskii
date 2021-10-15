import addDays from 'date-fns/addDays';
import subDays from 'date-fns/subDays';

/**
 * Generates an array of dates with 15 days going forward and backward today (or from given date).
 */
export const getDateList = (from?: Date) => {
  const mainDate = from || new Date();

  let dateList = [];

  //Generate 15 days backward
  for (let i = 15; i >= 1; i--) {
    dateList.push(subDays(mainDate, i));
  }

  //Add main date
  dateList.push(mainDate);

  //Generate 15 days forward
  for (let i = 1; i <= 15; i++) {
    dateList.push(addDays(mainDate, i));
  }

  return dateList;
};
