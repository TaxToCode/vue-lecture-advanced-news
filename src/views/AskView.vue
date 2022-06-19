<template>
  <div>
    <p v-for="ask in askItems" :key="ask.id">
      <a :href="ask.url">{{ ask.title }}</a>
      <small> {{ ask.time_ago }} by {{ ask.user }}</small>
    </p>
  </div>
</template>

<script>
  import { mapGetters } from "vuex";

  export default {
    computed: {
      ...mapGetters({
        // key : value 형태 안하고 key = value일떄 객체 형태로 써도 된다.
        askItems: "fetchedAsks",
      }),
    },
    created() {
      this.$store.dispatch("FETCH_ASK");
    },
  };
</script>

<style></style>
