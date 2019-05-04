import { fetchFilms } from './apiCalls.js';

describe('fetchFilms', () => {
	let mockFilmResponse;

	beforeEach(() => {
		mockFilmResponse = [{ name: 'starwars', body: 'starwars movie' }];

	window.fetch=jest.fn().mockImplementation(() => {
		return Promise.resolve({
			ok: true,
			json: () => Promise.resolve(mockFilmResponse)
			})
		})
	});

	it('should be called with correct params', () => {
		const expected = 'https://swapi.co/api/films'
		fetchFilms('https://swapi.co/api/films');
		expect(window.fetch).toHaveBeenCalledWith(expected)
	});

 	it('should return a response if the status is ok', async () => {
 		const result = await fetchFilms()
 		expect(result).toEqual(mockFilmResponse)
 	});

 	it('should return an error if status is not ok', async () => {
 		window.fetch= jest.fn().mockImplementation(() => {
 			return Promise.resolve({
 				ok: false
 			})
 		})

 		await expect (fetchFilms()).rejects.toEqual(Error('Error fetching film'))
 	});
})

describe('fetchCategories', () => {
	let mockCategories;

	
})
