<script setup lang="ts">
const contents = await useAsyncData("content", async () =>
  queryContent().find()
);
</script>

<template>
  <div class="w-full px-[20%] pt-8">
    <h1 class="text-primary pb-4">Welcome to my Dev blog</h1>
    <p>
      This is the place where I post my thoughts and experimentation about
      technology.
    </p>
    <p>
      Javascript and Typescript are my go-to languages. I am a great enjoyer of
      the project
      <a href="https://vuejs.org/" class="link">Vue</a>.
    </p>
    <br />
    <p>
      This site is made with the amazing framework
      <a href="https://nuxt.com/" class="link">Nuxt</a>.
    </p>
    <PostCard
      v-if="contents.data"
      v-for="content in contents.data.value"
      :content="content"
      :key="content._id"
    />
  </div>
</template>
