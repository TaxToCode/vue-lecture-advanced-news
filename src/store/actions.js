import { fetchNewsList, fetchAskList, fetchJobsList } from "@/api/index.js";

export default {
  FETCH_NEWS(context) {
    fetchNewsList()
      .then((res) => {
        context.commit("SET_NEWS", res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  },
  FETCH_ASK(context) {
    fetchAskList()
      .then((res) => context.commit("SET_ASKS", res.data))
      .catch((err) => console.log(err));
  },
  FETCH_JOBS({ commit }) {
    fetchJobsList()
      .then(({ data }) => commit("SET_JOBS", data))
      .catch((err) => console.log(err));
  },
};
