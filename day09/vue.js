// https://www.themoviedb.org/

const API_KEY = '13d5affdceca36df2554659288baf172'
const URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`
// axios.get(URL)
//     .then(response=>{
//         console.log(response.data.results)
//         const movies = response.data.results
//     })

const startApp = async function (){

    const response = await axios.get(URL)
    const movies = response.data.results
    const newMovies = movies.map(movie=>{
        return {title:movie.title, image:'https://image.tmdb.org/t/p/w500'+movie.poster_path}
    })
    const demo = new Vue({
        el:'#main',
        data:{
            searchString: '',
            movies: newMovies,
        }
    })
}

startApp()


