<template>
  <div>
    <div align="center">
      <h1 style=font-size:100px>Movies on Now!</h1>
      <h2>Select a movie name to learn more</h2>
      <table border="1px">
        <tr style=font-size:30px>
            <td>Name</td>
            <td>Genres</td>
            <td>Director</td>
            <td>Cast</td>
        </tr>
        <tr v-for="movie in movieList" v-bind:key="movie.id">
            <td>
                <ion-button @click="loadMoviePage(movie)" color="light" size="small">{{movie.Name}}</ion-button>
            </td>
            <td>{{movie.Genres}}</td>
            <td>{{movie.Director}}</td>
            <td>{{movie.MainCast}}</td>
        </tr>
      </table>
    </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import axios from 'axios'
import MoviePage from '@/views/MoviePage.vue';
export default defineComponent({
    name:"MovieList",
    data() {
        return {movieList: undefined};
    },
    mounted() {
    //Use axios to get data from intended endpoint and populate movieList accordingly.
    //Catch any errors and display the error on console
        try{
            axios.get('https://www.eventcinemas.com.au/Movies/GetNowShowing')
            .then((resp)=>{
            this.movieList=resp.data.Data.Movies;
            })
        } catch(error){
            error => console.log(error);
        }
    },
    methods: {
    //Open MoviePage and push selected movie data to page
        loadMoviePage(movie) {
            this.$router.push({name:'movie', params:movie})
        }
  },
});
</script>