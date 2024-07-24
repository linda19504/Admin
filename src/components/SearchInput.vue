<template>
    <nav class="navbar">
        <div class="searchInput">
            <input type="text" />
            <TheIcon icon="search" />
        </div>

        <div class="navItems">
            <router-link to="/">
                <TheIcon icon="home" />
            </router-link>
            <button @click="">
                <TheIcon icon="publish" />
            </button>
            <div class="profileDropDown">
                <TheAvatar :width="42" :height="42" style="cursor: pointer" />
            </div>
        </div>
    </nav>
    <script setup>
import TheIcon from "./TheIcon.vue";
import TheAvatar from "./TheAvatar.vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
import { ref, computed } from "vue";

// const showDropdown = ref(false);
const store = useStore();
// const router = useRouter();

// const user = computed(() => store.state.user.user);

function publishPost() {
  store.commit("changeShowPostUpload", true);//触发changeShowPostUpload的mutation，并将值设置为true 
}

// async function searchPosts(e) {
//   await store.dispatch("searchPosts", e.target.value);
//   router.push({
//     name: "search_result",
//     params: {
//       term: e.target.value,
//     },
//   });
// }

// async function logout() {
//   await store.dispatch("logoutUser");
//   router.push("/login");
// }
</script>
