function solution(year) {
  const map = {
    1: 1,
    2: 101,
    3: 201,
    4: 301,
    5: 401,
    6: 501,
    7: 601,
    8: 701,
    9: 801,
    10: 901,
    11: 1001,
    12: 1101,
    13: 1201,
    14: 1301,
    15: 1401,
    16: 1501,
    17: 1601,
    18: 1701,
    19: 1801,
    20: 1901,
    21: 2001,
    22: 2101,
  };

  let currentCentury;
  for (const [key, value] of Object.entries(map)) {
    if (year >= value) {
      currentCentury = key;
    }
    if (year <= value) {
      return +currentCentury;
    }
  }
}
