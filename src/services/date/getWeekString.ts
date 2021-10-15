/**
 * Generated weekString result
 */
const weekStringObj = (full: string, short: string) => {
  return {full, short};
};

/**
 * Generate full and short weekday names given a zero-based weekday index.
 *
 * The week starts at sunday, index 0.
 */
export const getWeekString = (weekday: number) => {
  switch (weekday) {
    case 0:
      return weekStringObj('Sunday', 'Sun');
    case 1:
      return weekStringObj('Monday', 'Mon');
    case 2:
      return weekStringObj('Tuesday', 'Tue');
    case 3:
      return weekStringObj('Wednesday', 'Wed');
    case 4:
      return weekStringObj('Thursday', 'Thu');
    case 5:
      return weekStringObj('Friday', 'Fri');
    case 6:
      return weekStringObj('Saturday', 'Sat');
    default:
      return weekStringObj('Sunday', 'Sun');
  }
};
