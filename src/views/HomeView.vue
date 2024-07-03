<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
const router = useRouter()
const goTo = () => {
  console.log('click')
  router.push('/auth')
}

</script>

<template>
  <div>
    <div @click="goTo">Click</div>
  <RouterView />
</div>
</template>
<style></style>