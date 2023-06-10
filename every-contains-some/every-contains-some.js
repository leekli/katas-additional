// Please do not change the name of these functions

const every = (list, predicate) => {
  if (list === undefined || list.length === 0) return false;

  let result = false;

  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i]) === true) {
      result = true;
    } else {
      return false;
    }
  }

  return result;
};

const contains = (list, value) => {
  if (list === undefined || list.length === 0) return false;

  for (let i = 0; i < list.length; i++) {
    if (list[i] === value) {
      return true;
    }
  }

  return false;
};

const some = (list, predicate) => {
  if (list === undefined || list.length === 0) return false;

  for (let i = 0; i < list.length; i++) {
    if (predicate(list[i]) === true) {
      return true;
    }
  }

  return false;
};

module.exports = {
  every,
  contains,
  some,
};
