<template>
  <header class="border border-b-2 border-black1 bg-white">
    <div class="container flex items-center justify-between">
      <h1>
        <RouterLink to="/" class="text-3xl font-bold">MetaWall</RouterLink>
      </h1>
      <div class="group relative">
        <div class="flex w-40 cursor-pointer items-center gap-2.5 py-4">
          <div class="h-7.5 w-7.5">
            <img class="h-full w-full object-cover" src="@/assets/img/user.png" alt="" />
          </div>
          <p class="text-lg font-bold underline underline-offset-4">Member</p>
        </div>
        <div class="absolute top-full hidden w-full -translate-y-2 group-hover:block">
          <ul
            class="relative w-full bg-white after:absolute after:left-1 after:top-1 after:-z-10 after:block after:h-full after:w-full after:border-2 after:border-black1 after:bg-white after:content-['']"
          >
            <li>
              <RouterLink
                to="/myPost"
                class="block whitespace-nowrap border-2 border-b-0 border-black1 p-2 text-center hover:bg-main"
                >我的貼文牆</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to="/edit"
                class="block whitespace-nowrap border-2 border-b-0 border-black1 p-2 text-center hover:bg-main"
                >修改個人資料</RouterLink
              >
            </li>
            <li>
              <RouterLink
                to=""
                class="block whitespace-nowrap border-2 border-black1 p-2 text-center hover:bg-main"
                >登出</RouterLink
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>
<script lang="ts" setup></script>
