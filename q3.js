// Write a function to get an object and return a new object which the keys become the values and the values are the keys.
function KeysAndValues(obj) {
  const newObject = {};

  for (const key in obj) {
    if (obj.Property(key)) {
      newObject[obj[key]] = key;
    }
  }

  return newObject;
}
