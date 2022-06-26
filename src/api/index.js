import axios from "axios";

// 1. HTTP Request & Response와 관련된 기본 설정
const api = {
  baseUrl: "https://api.hnpwa.com/v0/",
  news: "https://api.hnpwa.com/v0/news/1.json",
  ask: "https://api.hnpwa.com/v0/ask/1.json",
  jobs: "https://api.hnpwa.com/v0/jobs/1.json",
};

// 2. API 함수들을 정리
function fetchNewsList() {
  return axios.get(api.news);
}

function fetchAskList() {
  // return axios.get(`${api.baseUrl}ask/1.json`)
  return axios.get(api.ask);
}

function fetchJobsList() {
  return axios.get(api.jobs);
}

function fetchUser(id) {
  return axios.get(`${api.baseUrl}user/${id}.json`);
}

export { fetchNewsList, fetchAskList, fetchJobsList, fetchUser };
