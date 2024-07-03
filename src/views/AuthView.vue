<script lang="ts" setup>
import { LoginWidget } from 'vue-tg'
import type { LoginWidgetUser } from 'vue-tg'

function handleUserAuth(user: LoginWidgetUser) {
  // ...
}
</script>

<template>
  <LoginWidget 
    bot-username="samplebot"
    @auth="handleUserAuth"
  />
</template>