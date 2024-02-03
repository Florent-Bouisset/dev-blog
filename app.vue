<template>
  <div class="min-h-screen">
    <div class="flex flex-col">
      <header class="border-b border-grey-800 px-[20%] py-4">
        <NuxtLink
          to="/"
          class="no-underline text-grey-400"
          active-class="text-grey-200"
          >Blog</NuxtLink
        >
      </header>

      <main class="flex-1"><NuxtPage></NuxtPage></main>
      <footer
        class="text-grey-400 px-[20%] py-4 border-t border-grey-800 mt-16"
      >
        This site is built with
        <a href="https://nuxt.com/" class="link text-grey-400">Nuxt</a>, the
        repository is available on
        <a
          href="https://github.com/Florent-Bouisset/dev-blog"
          class="link text-grey-400"
          >Github.</a
        >
      </footer>
    </div>
  </div>
</template>
