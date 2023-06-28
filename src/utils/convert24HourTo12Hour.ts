const zeroFill = (number: string, total = 0) => {
  if (total > number.length) {
    return [
      ...new Array(total - number.length).fill('0'),
      ...number.split(''),
    ].join('');
  }

  return number;
};

const convert24HourTo12Hour = (hour: string) => {
  try {
    let [hours, minutes] = hour.split(':');
    let hr = Number(hours);
    let min = Number(minutes);
    const isPM = hr > 12 || (hr === 12 && min > 0);
    if (isPM && hr >= 12) {
      hr = hr - 12;
    }
    return `${zeroFill(String(hr), 2)}:${zeroFill(String(min), 2)} ${
      isPM ? 'pm' : 'am'
    }`;
  } catch (error) {
    return false;
  }
};

export default convert24HourTo12Hour;
