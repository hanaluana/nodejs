// https://www.themoviedb.org/

const API_KEY = '13d5affdceca36df2554659288baf172'
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
// axios.get(URL)
//     .then(response=>{
//         console.log(response.data.results)
//         const movies = response.data.results
//     })

const demo = new Vue({
    el: '#main',
    data: {
        searchString: '',
        movies: [],
    },
    computed: {
        filteredMovies: function () {

            if (!this.searchString) {
                return this.movies
            }
            let searchString = this.searchString.trim().toLowerCase()
            return this.movies.filter(movie => {
                //movie.title에 searchString이 포함되면 반환
                return (movie.title.toLowerCase().includes(searchString))
            })
        }
    },
    async created() { // Vue 인스턴스가 초기화 되고 나서 실행하는 함수
        const response = await axios.get(URL)
        const movies = response.data.results
        this.movies = movies.map(movie => {
            return { title: movie.title, image: 'https://image.tmdb.org/t/p/w500' + movie.poster_path }
        })
    }
})

// 1. 빈 movie 데이터를 가지고 있는 Vue 인스턴스가 만들어진다.
// 2. created 함수가 실행되면서 movies를 불러온다.
// 3. 불러온 movies를 vue의 data 안의 movies에 할당한다.


