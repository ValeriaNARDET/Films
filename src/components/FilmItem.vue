<template>
    <div class="card">
        <img class="bg" :src="film.Poster" />
        <div class="card-text">
            <h5>{{ title }}</h5>
            <p>
                <IconCalendar />{{ film.Year }}
            </p>
        </div>
    </div>
</template>
  
<script setup>
import { toRefs, ref } from "vue";
import IconCalendar from "./icons/IconCalendar.vue";

const props = defineProps({ film: Object });
const { film } = toRefs(props);
const title = ref(film.value.Title);

if (title.value && title.value.length > 15) {
    title.value = title.value.substr(0, 20) + "..."
}
</script>

<style lang="scss" scoped>
.card {
    position: relative;
    width: 100%;
    height: 290px;
    perspective: 2500px;
    overflow: hidden;

    &::after {
        content: "";
        position: absolute;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 120px;
        background-color: #000000bf;
    }

    &-text {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: stretch;
        height: 100%;
        z-index: 2;
    }
}

.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    transition: transform 0.5s;
}

.card:hover .bg {
    transform: scale(1.4);
}

h5,
p {
    margin: 0;
    padding: 5px 10px 7px;
    color: #fff;
}

h5 {
    font-size: 22px;
}

p {
    font-size: 12px;
    font-weight: bold;
    text-align: center;

    svg {
        margin-bottom: -5px;
    }
}
</style>