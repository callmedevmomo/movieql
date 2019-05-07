const momo = {
  name: "momo",
  age: 20,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => momo
  }
};

export default resolvers;
