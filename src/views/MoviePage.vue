<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Movies</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Movies</ion-title>
        </ion-toolbar>
      </ion-header>

    <MovieComponent :movie=movieData />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import MovieComponent from '@/components/MovieComponent.vue';

export default defineComponent({
  name: 'MoviePage',
  components: { MovieComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
  data() {
    return{
        movieData: {}
    }
  },
  created(){
    //Inject params into variable movieData to be used within MovieComponent
    this.movieData=this.$route.params.data;
  }
});
</script>
