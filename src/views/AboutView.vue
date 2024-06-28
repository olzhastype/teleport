<template>
  <div class="card">

  </div>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { ProductService } from '../stores/service';

const products = ref<any>([]);

const getSeverity = (product) => {
  switch (product.inventoryStatus) {
    case 'INSTOCK':
      return 'success';

    case 'LOWSTOCK':
      return 'warn';

    case 'OUTOFSTOCK':
      return 'danger';

    default:
      return null;
  }
};

onMounted(() => {
  ProductService.getProductsSmall().then((data) => (products.value = data.slice(0, 5)));
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
