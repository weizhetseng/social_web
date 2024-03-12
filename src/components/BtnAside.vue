<template>
  <div class="border-2 border-black1 bg-white px-6 py-8">
    <RouterLink
      to="/post"
      class="mb-6 block w-full rounded-lg border-2 border-black1 bg-blue1 p-4 text-center font-bold text-white hover:bg-yellow2 hover:shadow-shadow_black"
    >
      張貼動態
    </RouterLink>
    <ul class="flex flex-col gap-6 px-2">
      <li class="flex items-center gap-3">
        <div class="h-12.5 w-12.5 rounded-full border-2 border-black1">
          <img class="h-full w-full object-cover" src="../assets/img/user.png" alt="" />
        </div>
        <p class="font-bold">User</p>
      </li>
      <li>
        <RouterLink class="group flex items-center gap-3" to="/follow">
          <div
            class="flex h-12.5 w-12.5 items-center justify-center rounded-full border-2 border-black1 bg-blue2 group-hover:bg-blue1"
          >
            <VIcon icon="akar-icons:bell" class="text-2xl text-black1 group-hover:text-white" />
          </div>
          <p class="font-bold group-hover:text-blue1">追蹤名單</p>
        </RouterLink>
      </li>
      <li>
        <RouterLink to="/like" class="group flex items-center gap-3">
          <div
            class="flex h-12.5 w-12.5 items-center justify-center rounded-full border-2 border-black1 bg-blue2 group-hover:bg-blue1"
          >
            <VIcon
              icon="mingcute:thumb-up-2-line"
              class="text-2xl text-black1 group-hover:text-white"
            />
          </div>
          <p class="font-bold group-hover:text-blue1">我按讚的文章</p>
        </RouterLink>
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup></script>
