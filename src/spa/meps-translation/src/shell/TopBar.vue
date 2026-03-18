<template>
  <header class="bg-white border-b border-gray-300 flex items-center h-11">
    <!-- Left section -->
    <div class="flex items-center h-full">
      <!-- MEPS Logo -->
      <a href="http://localhost:3000"
         class="flex items-center gap-1 px-3 text-gray-700 font-bold text-sm border-r border-gray-300 h-full hover:bg-gray-50">
        MEPS
      </a>

      <!-- Workspace icon -->
      <button class="flex items-center gap-1 px-3 h-full text-gray-600 hover:bg-gray-100 border-r border-gray-200">
        <span class="text-lg">🔤</span>
        <svg class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>

      <!-- Nav items -->
      <button v-for="item in navItems" :key="item.id"
              :class="['flex items-center gap-1 px-3 h-full text-sm transition-colors border-r border-gray-200',
                        item.active ? 'bg-gray-200 font-semibold text-gray-800' : 'text-gray-700 hover:bg-gray-100']">
        {{ item.label }}
        <svg v-if="item.hasDropdown" class="w-3 h-3 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
        </svg>
      </button>
    </div>

    <!-- Right section -->
    <div class="flex items-center gap-1 ml-auto pr-3">
      <button class="p-2 text-gray-500 hover:text-blue-800" aria-label="Search">
        <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/>
        </svg>
      </button>
      <button class="p-2 text-gray-500 hover:text-blue-800 relative" aria-label="Notifications">
        <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
        </svg>
        <span class="absolute top-1 right-1 w-4 h-4 bg-red-500 rounded-full text-white text-[9px] flex items-center justify-center font-bold">3</span>
      </button>
      <button class="p-2 text-gray-500 hover:text-blue-800" aria-label="Help">
        <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
      </button>
      <button class="p-2 text-gray-500 hover:text-blue-800" aria-label="User" @click="$emit('sign-out')">
        <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
        </svg>
      </button>
      <button class="p-2 text-gray-500 hover:text-blue-800" aria-label="Settings">
        <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/>
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      </button>
      <button class="p-2 text-gray-500 hover:text-blue-800" aria-label="Grid view">
        <svg class="w-[18px] h-[18px]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"/>
        </svg>
      </button>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TopBar",
  emits: ["sign-out"],
  setup() {
    const navItems = [
      { id: "dashboard", label: "Dashboard", active: true, hasDropdown: false },
      { id: "personnel", label: "Personnel", active: false, hasDropdown: true },
      { id: "media", label: "Media", active: false, hasDropdown: true },
      { id: "projects", label: "Projects", active: false, hasDropdown: true },
      { id: "library", label: "Library", active: false, hasDropdown: true },
      { id: "publish", label: "Publish", active: false, hasDropdown: true },
    ];

    return { navItems };
  },
});
</script>
