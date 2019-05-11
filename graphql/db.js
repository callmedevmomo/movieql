let movies = [
  {
    id: 1,
    name: "Star Wars - The new one",
    score: 2
  },
  {
    id: 2,
    name: "Avengers - The new one",
    score: 5
  },
  {
    id: 3,
    name: "The Godfather I",
    score: 4
  },
  {
    id: 4,
    name: "Logan",
    score: 6
  }
];

export const getMovies = () => movies;

export const getById = id => {
  const filteredMovies = movies.filter(movie => movie.id === String(id));
  return filteredMovies[0];
};

export const deleteMovie = id => {
  const cleanMovies = movies.filter(movie => movie.id !== String(id));
  if (movies.length > cleanMovies.length) {
    movies = cleanMovies;
    return true;
  } else {
    return false;
  }
};

export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score
  };
  movies.push(newMovie);
  console.log(movies);
  return newMovie;
};
