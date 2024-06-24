<template>
  <div class="card">
    <DataTable :value="products" tableStyle="min-width: 50rem">
      <Column field="time" header="Time"></Column>
      <Column field="temperature" header="Temperature"></Column>
    </DataTable>
  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ProductService } from '../stores/service';


const products = ref<any>([]);

onMounted(async () => {
  await ProductService.getWeather().then(data => {
    console.log(data.hourly);

    for (let i = 0; i < data.hourly.time.length; i++) {
      products.value.push({
        time: data.hourly.time[i],
        temperature: data.hourly.temperature_2m[i],
      });
    }
  });
});

</script>
<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
