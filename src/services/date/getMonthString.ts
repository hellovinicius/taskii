/**
 * Generated monthString result
 */
const monthStringObj = (full: string, short: string) => {
  return {full, short};
};

/**
 * Generate full and short month names given a zero-based month index.
 */
export const getMonthString = (month: number) => {
  switch (month) {
    case 0:
      return monthStringObj('January', 'Jan');
    case 1:
      return monthStringObj('February', 'Feb');
    case 2:
      return monthStringObj('March', 'Mar');
    case 3:
      return monthStringObj('April', 'Apr');
    case 4:
      return monthStringObj('May', 'May');
    case 5:
      return monthStringObj('June', 'Jun');
    case 6:
      return monthStringObj('July', 'Jul');
    case 7:
      return monthStringObj('August', 'Aug');
    case 8:
      return monthStringObj('September', 'Sep');
    case 9:
      return monthStringObj('October', 'Oct');
    case 10:
      return monthStringObj('November', 'Nov');
    case 11:
      return monthStringObj('December', 'Dec');
    default:
      return monthStringObj('January', 'Jan');
  }
};
