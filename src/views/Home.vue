<template>
  <div class="home">
    <v-app-bar>
      <img
        src="../assets/yelp_reserv.svg"
        alt="Yelp REserv'"
        class="yelp-logo"
      />

      <MainBar v-if="$route.name === 'Home'" />
    </v-app-bar>

    <v-main>
      <RestoCardList />
    </v-main>
  </div>
</template>

<script>
import RestoCardList from '@/components/RestoCardList.vue';
import MainBar from '../components/MainBar';

export default {
  name: 'Home',

  components: {
    RestoCardList,
    MainBar,
  },
};
</script>

<style lang="scss" scoped>
.vue-eat-logo {
  max-width: 100px;
  max-height: 50px;
}
</style>
