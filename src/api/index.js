import axios from "axios";

const api = {
    baseUrl: "https://api.hnpwa.com/v0/",
    news: "https://api.hnpwa.com/v0/news/1.json",
    ask: "https://api.hnpwa.com/v0/ask/1.json",
    jobs: "https://api.hnpwa.com/v0/jobs/1.json",
};

function fetchNewsList() {
    return axios.get(api.news);
}

function fetchAskList() {
    return axios.get(api.ask);
}

function fetchJobsList() {
    return axios.get(api.jobs);
}

export { fetchNewsList, fetchAskList, fetchJobsList };
