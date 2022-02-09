<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Preferences</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">Preferences</ion-title>
        </ion-toolbar>
      </ion-header>
      <ion-list>
        <ion-item>
          <ion-datetime min="2022-01-01" minuteValues="0,15,30,45"></ion-datetime>
        </ion-item>
        <ion-item>
          <ion-label>Filter by PG-13?</ion-label>
          <ion-toggle></ion-toggle>
        </ion-item>
        <ion-segment>
          <ion-segment-button>
            <ion-label>Front Seats</ion-label>
          </ion-segment-button>
          <ion-segment-button>
            <ion-label>Mid Seats</ion-label>
          </ion-segment-button>
          <ion-segment-button>
            <ion-label>Back Seats</ion-label>
          </ion-segment-button>
        </ion-segment>
      </ion-list>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonList, IonSegment, IonLabel, IonToggle, IonItem, IonContent } from '@ionic/vue';

export default defineComponent({
  name: 'PreferencePage',
  components: { IonHeader, IonToolbar, IonTitle, IonContent, IonPage },
});
</script>
