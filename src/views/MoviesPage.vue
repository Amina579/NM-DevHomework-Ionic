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

    <MoviesComponent />
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import MoviesComponent from '@/components/MoviesComponent.vue';

export default defineComponent({
  name: 'MoviesPage',
  components: { MoviesComponent, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
