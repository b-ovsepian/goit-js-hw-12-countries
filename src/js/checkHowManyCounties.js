function checkHowManyCounties(countries) {
  return new Promise((res, rej) => {
    if (countries.status === 404) {
      rej("There is no such country");
    } else {
      if (countries.length <= 10) {
        res(countries);
      } else rej("Too many countries");
    }
  });
}

export default checkHowManyCounties;
