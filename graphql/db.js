let movies = [
  {
    id: 0,
    name: "Star Wars - The new one",
    score: 2
  },
  {
    id: 1,
    name: "Avengers - The new one",
    score: 5
  },
  {
    id: 2,
    name: "The Godfather I",
    score: 4
  },
  {
    id: 3,
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
  return newMovie;
};
