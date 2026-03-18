<template>
  <AuthGuard>
    <App />
  </AuthGuard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AuthGuard from "./AuthGuard.vue";
import App from "./App.vue";

export default defineComponent({
  name: "Root",
  components: { AuthGuard, App },
});
</script>
