<template>
  <div class="restaurant-card">
    <v-card
      :loading="false"
      class="mx-auto my-12"
      max-width="400"
    >
      <v-img
        height="300"
        :src="restaurant.image_url"
      />

      <v-card-title>{{ restaurant.name }}</v-card-title>

      <v-card-text>
        <v-row
          align="center"
          class="mx-0"
        >
          <StarRating
            :rating="restaurant.rating"
            :show-rating="false"
            :read-only="true"
            :round-start-rating="false"
            :star-size="20"
          />

          <div class="grey--text ml-4">
            {{ restaurant.rating }} ({{ restaurant.review_count }})
          </div>
         
        </v-row>
        <v-row 
          align="center"
          class="mx-0">

          <div class="my-4 subtitle-1">
          {{ restaurant.price }} | {{ restaurant.categories[0].title}}
          </div>
        </v-row>
        <v-card-actions>
          <v-btn 
            color="deep-purple"
            @click="detail"
            >
            <router-link :to="`/details/${restaurant.alias}`">
            See more
            </router-link>
          </v-btn>
        </v-card-actions>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
import StarRating from 'vue-star-rating';

export default {
  name: 'RestoCard',
  components: { StarRating },

  props: {
    restaurant: {
      type: Object,
      required: true,
    },
  },

};
</script>

<style lang="scss" scoped>
</style>
