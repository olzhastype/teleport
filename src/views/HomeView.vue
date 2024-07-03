<script setup lang="ts">
import { RouterView, useRouter } from 'vue-router'
const router = useRouter()
const goTo = () => {
  console.log('click')
  router.push('/auth')
}
const goToQr = () => {
  console.log('click')
  router.push('/qr')
}
</script>

<template>
  <div>
    <div @click="goTo">Click Auth</div>
    <div @click="goToQr">Click Qr</div>
  <RouterView />
</div>
</template>
<style></style>