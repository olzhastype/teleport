<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router'
onMounted(() => {
  fetch("https://2.135.117.252:4444/WeatherForecast").then(async (res) => {
    console.log(res);
    if (res.ok) {
      const data = await res.json();
      alert(data.map(x => x.summary))
    }
  });
})
</script>

<template>
  <div class="card">
    <Toolbar style="border-radius: 3rem; padding: 1rem 1rem 1rem 1.5rem">
      <template #start>
        <div class="flex items-center gap-2">
          <img src="./assets/logo.svg" alt="PrimeVue logo" style="width: 32px" />
        </div>
      </template>

      <template #end>
        <div class="flex items-center gap-2">
          <Avatar image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
            style="width: 32px; height: 32px" />
        </div>
      </template>
    </Toolbar>
  </div>
  <RouterView />
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
