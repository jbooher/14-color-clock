function padNumber(num) {
  num = String(num);

  if(num.length === 1) {
    return `0${num}`;
  }
  return num;
}

export default padNumber;
