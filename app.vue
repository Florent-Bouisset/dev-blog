<script setup lang="ts">
import Fuse from "fuse.js";
import type { IFuseOptions } from "fuse.js";
import type { MarkdownParsedContent, MarkdownNode } from "@nuxt/content/types";

const getAllTextChildren = (contentNodes: MarkdownNode[]): string[] => {
  const result = contentNodes.map((node) => {
    let a;
    if (node.type === "text") {
      a = node.value ?? "";
    } else {
      a = getAllTextChildren(node.children ?? []);
    }
    return a;
  });
  return result.flat();
};

const contents = await useAsyncData("content", async () =>
  queryContent<MarkdownParsedContent>().find()
);

const options: IFuseOptions<MarkdownParsedContent> = {
  includeScore: true,
  ignoreLocation: true,
  keys: [
    {
      name: "title",
      getFn: (content: MarkdownParsedContent) => content.title ?? "",
    },
    {
      name: "description",
      getFn: (content: MarkdownParsedContent) => content.description,
    },
    {
      name: "body",
      getFn: (content: MarkdownParsedContent) =>
        getAllTextChildren(content.body.children),
    },
  ],
};

const list = contents.data.value ?? [];
const fuse = new Fuse(list, options);
const search = ref("");

const results = computed(() => fuse.search(search.value, { limit: 5 }));
</script>

<template>
  <div class="min-h-screen">
    <div class="flex flex-col">
      <header class="flex border-b border-grey-800 px-[20%] py-4">
        <NuxtLink
          to="/"
          class="no-underline text-grey-400"
          active-class="text-grey-200"
          >Blog</NuxtLink
        >
        <input
          class="ml-auto px-4 rounded-full bg-grey-800"
          type="text"
          placeholder="Search"
          v-model="search"
        />
      </header>

      <div>
        <div v-for="result in results">
          <p>"title": {{ result.item.title }}</p>
          <p>"score": {{ result.score }}</p>
        </div>
      </div>

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
