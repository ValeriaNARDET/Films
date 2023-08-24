<template>
    <form @submit.prevent="handleSearch">
        <div class="search-wrapper">
            <h4>Click on search icon and type your keyword</h4>
            <div class="search">
                <input type="text" class="search-input" placeholder="Search movie" v-model="keyword"
                    @keydown.enter.prevent="handleSearch" />
            </div>
        </div>
    </form>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';
import { useFilmsStore } from "../stores/filmsStore";
const router = useRouter();

const filmsStore = useFilmsStore();
const keyword = ref("");

function handleSearch() {
    if (keyword.value) {
        let s = keyword.value.toLowerCase().trim();
        filmsStore.getFilmList(s);
    }
    router.push({ name: 'films' });
}

</script>

<style lang="scss" scoped>
.search {
    display: inline-block;
    position: relative;
    filter: drop-shadow(0 1px #0091c2);

    &::after {
        content: "";
        background: white;
        width: 4px;
        height: 20px;
        position: absolute;
        top: 40px;
        right: 2px;
        transform: rotate(135deg);
    }

    &-wrapper {
        margin: 20px;
    }

    &-input {
        color: white;
        font-size: 16px;
        background: transparent;
        width: 25px;
        height: 25px;
        padding: 10px;
        border: solid 3px white;
        outline: none;
        border-radius: 35px;
        transition: width 0.5s;

        &::placeholder {
            color: #efefef;
            opacity: 0;
            transition: opacity 150ms ease-out;
        }

        &:focus::placeholder {
            opacity: 1;
        }

        &:focus,
        &:not(:placeholder-shown) {
            width: 350px;
            padding: 10px 20px;
        }
    }
}

@media (min-width: 1024px) {

    .search-input:focus,
    .search-input:not(:placeholder-shown) {
        width: 600px;
    }
}
</style>