export const people = [
  {
    id: "1",
    name: "momo1",
    age: 20,
    gender: "male"
  },
  { id: "2", name: "momo2", age: 10, gender: "male" },
  { id: "3", name: "momo3", age: 40, gender: "male" },
  { id: "4", name: "momo4", age: 50, gender: "male" },
  { id: "5", name: "momo5", age: 11, gender: "male" },
  { id: "6", name: "momo6", age: 15, gender: "male" },
  { id: "7", name: "momo7", age: 42, gender: "male" },
  { id: "8", name: "momo8", age: 14, gender: "male" },
  { id: "9", name: "momo9", age: 26, gender: "male" }
];

export const getById = id => {
  const filteredPeople = people.filter(person => person.id === String(id));
  return filteredPeople[0];
};
