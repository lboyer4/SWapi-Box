export const fetchFilms = () => {
  return fetch('https://swapi.co/api/films')
  .then(response => {
    if (!response.ok) {
      throw Error('Error fetching film')
    } else {
      return response.json()
    }
  })
}

export const fetchCategories = () => {
  const categoryUrls = ['https://swapi.co/api/people', 'https://swapi.co/api/planets', 'https://swapi.co/api/vehicles']
    return categoryUrls.map(url => {
      return fetch(url).then(response => {
        if (!response.ok) {
          throw Error ('Error Fetching category')
        } else {
          return response.json()
        }
      })
    })
}

export const fetchHomeWorld = (homeworld) => {
  return fetch(homeworld)
    .then(response => {
      if(!response.ok) {
        throw Error('Error fetching homeworld')
      } else {
        return response.json()
      }
    })
}

export const fetchSpecies = (species) => {
  return fetch(species)
    .then(response => {
      if(!response.ok) {
        throw Error('Error fetching species')
      } else {
        return response.json()
      }
    })
}

export const fetchResidents = (residents) => {
  return fetch(residents)
    .then(response => {
      if(!response.ok) {
        throw Error('Error fetching residents')
      } else {
        return response.json()
      }
    })
}