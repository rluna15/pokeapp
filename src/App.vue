<script>
import { onMounted, ref } from '@vue/runtime-core'
import { RouterLink, RouterView } from 'vue-router'

import Spinner from './components/Spinner.vue'
export default {
  name: 'Home',
  components: { Spinner },
  setup() {
    const pokes = ref([])

    onMounted(() => {
      let url = "../src/data/pokelist.json";

      fetch(url)
      .then((res) => res.json())
      .then((data) => {
        pokes.value = data;
      })
    })

    return { pokes }
  }
}

</script>

<template>
  <div v-if="pokes.length">
    <ul>
      <li v-for="(poke,index) in pokes" :key="index">
        {{ poke.name }}
      </li>
    </ul>
  </div>
  <div v-else>Loading ...</div>
  <div v-else><spinner/></div>
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
