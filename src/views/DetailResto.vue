<template>
    <v-container>
        <v-app-bar class="detail">
            <img
                src="../assets/yelp_reserv.svg"
                alt="Yelp REserv'"
                class="yelp-logo"
        />

        <v-layout row wrap>
            <v-flex 
            v-for="(photo,i) in details.photos"
            v-bind:key="i">

                <v-card>
                    <v-img :src="photo"></v-img>
                </v-card>

            </v-flex>
        
        <v-row
          align="left"
          class="mx-0">
            <div class="name"><h1> {{ details.name }} </h1></div>
        </v-row>
            <v-row 
                align="left"
                class="mx-0">
            
                <StarRating
                :rating="details.rating"
                :show-rating="false"
                :read-only="true"
                :round-start-rating="false"
                :star-size="20"
                />

                <div class="grey--text ml-4">
                    {{ details.rating }} ({{ details.review_count }})
                </div>
         
            </v-row>
            <v-row align="left" class="mx=0">
                <div class="price-cat"> 
                    {{ restaurant.price }} | {{ restaurant.categories[0].title}} 
                </div>
            </v-row>
            <v-row align="left" class="mx=0">
                <div class="contact">
                    {{ details.display_phone }}
                </div>
            </v-row>
            <v-row align="left" class="mx=0">
                <div class="horraires">
                    <div>Ouvret de : {{ details.hours.open[0].start }} a : {{ details.hours.open[0].end }} </div>
                    <div>Et de : {{details.hours.open[1].start }} a : {{ details.hours.open[1].end }}  </div>
                </div>
            </v-row>
            <v-row align="left" class="mx=0"></v-row>

        </v-layout>
    </v-container>
    
</template>

<script>
export default {
  name: "Home",

  components: {},
  mounted() {
    this.$store.dispatch("getRestoDetail", this.$route.params.id);
  },
  computed: {
    details() {
      return this.$store.state.detailRestaurant;
    },
  },
};
</script>

<style lang="scss" scoped>
.vue-eat-logo {
  max-width: 100px;
  max-height: 50px;
}
</style>