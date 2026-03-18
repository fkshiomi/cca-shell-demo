<template>
  <div v-if="isLoading" class="flex items-center justify-center h-screen">
    <p class="text-gray-500 text-lg">Loading...</p>
  </div>
  <div v-else-if="error" class="flex items-center justify-center h-screen">
    <div class="text-center">
      <p class="text-red-500 mb-4">Authentication error: {{ error }}</p>
      <button @click="signIn" class="px-6 py-2 bg-blue-800 text-white rounded">Try Again</button>
    </div>
  </div>
  <div v-else-if="!isAuthenticated" class="flex items-center justify-center h-screen">
    <div class="text-center bg-white p-10 rounded-lg shadow-md">
      <h1 class="text-2xl font-bold text-blue-800 mb-2">MEPS</h1>
      <p class="text-gray-500 mb-6">Translation — Sign in to continue</p>
      <button @click="signIn" class="px-8 py-3 bg-blue-800 text-white rounded-lg hover:bg-blue-900 text-lg">
        Sign in with Google
      </button>
    </div>
  </div>
  <slot v-else />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useAuth } from "../auth/useAuth";

export default defineComponent({
  name: "AuthGuard",
  setup() {
    const { isLoading, isAuthenticated, error, signIn } = useAuth();
    return { isLoading, isAuthenticated, error, signIn };
  },
});
</script>
