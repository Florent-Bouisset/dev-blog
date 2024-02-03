<script setup lang="ts"></script>

<template>
  <div class="w-full px-[20%] pt-8">
    <h1 class="text-primary pb-4">Welcome to my dev blog</h1>
    <p>
      This is the place where I post my thoughts and experimentation about
      technology.
    </p>
    <p>
      Javascript and Typescript are my go-to languages. I am a great enjoyer of
      the project
      <a href="https://vuejs.org/">Vue</a>.
    </p>
    <br />
    <p>
      This site is made with the amazing framework
      <a href="https://nuxt.com/">Nuxt</a>.
    </p>
    <BaseCard class="mt-8">
      <div class="flex gap-6">
        <NuxtImg src="https://vue3-fr.netlify.app/logo.png"></NuxtImg>
        <div class="flex flex-col">
          <h2 class="text-primary text-2xl pb-2">Deep dive into Vue.js</h2>
          <p>
            Post description: Vue is an amazing framework, let's deep dive with
            a guide to create your application with Vue.
          </p>
          <p class="mt-auto text-grey-400">Reading time: 5 min</p>
        </div>
      </div>
    </BaseCard>
  </div>
</template>
