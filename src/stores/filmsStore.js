import { defineStore } from 'pinia'
import axios from 'axios'

const API_KEY = "5e062a24"
const API_URL = "https://www.omdbapi.com"

export const useFilmsStore = defineStore('films', {
  state: () => ({
		isLoading: false,
		loadingMessage: "Please wait",
		filmList: [],
		film: {},
		keyword: '',
		page: 1,
	}),
	actions: {
		async getFilmList(keyWord) {
			this.filmList = null;
			this.film = null;
			this.page = 1;
			this.isLoading = true;

			if (!keyWord) {
				keyWord = "crazy";
			}
			this.keyword = keyWord;

			try {
				const res = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${keyWord}`);
				this.filmList = res.data.Search;
			} catch (err) {
				console.error(err);
			}

			this.isLoading = false;
		},
		async getFilm(id) {
			this.isLoading = true;
			try {
				const res = await axios.get(`${API_URL}?apikey=${API_KEY}&i=${id}`);
				this.film = res.data;
			} catch (err) {
				console.error(err);
			}
			this.isLoading = false;
		},
		async loadNextPage(page) {
			try {
				const { data } = await axios.get(`${API_URL}?apikey=${API_KEY}&s=${this.keyword}&page=${page}`);
				data.Search.forEach(film => this.filmList.push(film));
			} catch (err) {
				console.error(err);
			}
		} 
	},
})
