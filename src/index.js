function countSimpleDouble(number, double) {
  return new Array(+number)
        .fill(0)
        .map((value, indx) => indx + 1)
        .filter((value) => {
          if (double) {
            return value % 2 === number % 2;
          }
          return true;
        })
        .reduce((acc, value) => {
          let twoCounter = value,
              fiveCounter = value;
              
          for (let i = acc[0] + acc[1] - 1; i < acc[0] + acc[1]; i += 1) {
            if (twoCounter % 2 === 0) {
              acc[0] += 1;
              twoCounter /= 2;
            }
            if (fiveCounter % 5 === 0) {
              acc[1] += 1;
              fiveCounter /= 5;
            }
          }
          
          return acc;
        }, [0, 0]);
}

module.exports = function zeros(expression) {
  return Math.min(...expression.split('*').reduce((acc, value) => {
    let result = [0, 0];

    if (value.endsWith("!!")) {
      result = countSimpleDouble(value.slice(0, -2), true);
    } else if (value.endsWith("!")) {
      result = countSimpleDouble(value.slice(0, -1), false);
    }

    return [acc[0] + result[0], acc[1] + result[1]];
  }, [0, 0]));
}
