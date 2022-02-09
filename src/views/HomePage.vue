<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Event Cinemas Home</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Home</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <h1>Welcome to Event Cinemas</h1>
        <ion-button href="/eventcinemas/preferences" color="dark" size="large">Book an Experience Now</ion-button>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';

export default  defineComponent({
  name: 'HomePage',
  components: {IonHeader, IonToolbar, IonTitle, IonContent, IonPage },

});
</script>
