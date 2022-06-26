import { fetchNewsList, fetchAskList, fetchJobsList, fetchUser } from "@/api/index.js";

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
  FETCH_USER({ commit }, userId) {
    return fetchUser(userId).then((res) => {
      commit("SET_USER", res.data);
    });
  },
};
