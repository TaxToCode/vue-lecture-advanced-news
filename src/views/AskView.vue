<template>
  <div>
    <div v-for="ask in askItems" :key="ask.id">
      {{ ask.title }}
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapState } from "vuex";

  export default {
    computed: {
      ...mapGetters({
        // key : value 형태 안하고 key = value일떄 객체 형태로 써도 된다.
        askItems: "fetchedAsks",
      }),
      // 2번 방법
      //   ...mapState({
      //     asks: (state) => state.asks,
      //   }),
      // 1번 방법
      //   asks(){
      //     return this.$store.state.ask;
      //   }
    },

    created() {
      this.$store.dispatch("FETCH_ASK");
    },
  };
</script>

<style></style>
