<template>
  <div class="min-h-screen flex flex-col bg-gray-100">
    <TopBar @sign-out="signOut" />
    <ContentArea />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TopBar from "./TopBar.vue";
import ContentArea from "./ContentArea.vue";
import { useAuth } from "../auth/useAuth";

export default defineComponent({
  name: "App",
  components: { TopBar, ContentArea },
  setup() {
    const { signOut } = useAuth();
    return { signOut };
  },
});
</script>
