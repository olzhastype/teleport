<script lang="ts" setup>
import { useRouter } from 'vue-router';
import { ScanQr } from 'vue-tg'
const router = useRouter()
const  handleScanResult =(data: string) =>{
  router.push({name:'auth'});
}
</script>

<template>
  <ScanQr @result="handleScanResult" />
</template>