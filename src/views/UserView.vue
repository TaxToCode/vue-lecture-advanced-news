<template>
    <div>
        <div v-for="user in users" :key="user.id">
            {{ user.title }}
        </div>
    </div>
</template>

<script>
    // import axios from "axios";
    import { fetchNewsList } from "@/api/index.js";

    export default {
        data() {
            return {
                users: [],
            };
        },
        created() {
            fetchNewsList()
                .then((res) => (this.users = res.data))
                .catch(function (error) {
                    console.log(error);
                });
        },
    };
</script>

<style></style>
