function getDay() {
  const days = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];
  const now = new Date();

  return days[now.getDay()];
}

export default getDay;
