import type { ProseP } from '#build/components';
<script setup lang="ts">
import type { ParsedContent } from "@nuxt/content";
const props = defineProps<{
  content: ParsedContent;
}>();

console.log("props", props.content);
</script>

<template>
  <NuxtLink to="/a" class="no-underline">
    <BaseCard class="mt-8">
      <div class="flex gap-6">
        <NuxtImg src="https://vue3-fr.netlify.app/logo.png"></NuxtImg>
        <div class="flex flex-col">
          <h2 class="text-primary text-2xl pb-2">{{ content.title }}</h2>
          <p>
            {{ content.description }}
          </p>
          <p class="mt-auto text-grey-400">Reading time: 5 min</p>
        </div>
      </div>
    </BaseCard>
  </NuxtLink>
</template>
