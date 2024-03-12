<template>
  <div class="container">
    <div class="flex flex-col-reverse gap-6 py-12 lg:flex-row">
      <div class="w-full lg:w-3/4">
        <div
          class="relative mb-8 flex items-center justify-center border-2 border-black1 bg-white p-4.5 after:absolute after:-left-2 after:top-2 after:-z-10 after:block after:h-full after:w-full after:border-2 after:border-black1 after:bg-white after:content-['']"
        >
          <h2 class="text-2xl font-bold">追蹤名單</h2>
        </div>
        <ul class="flex flex-col gap-5">
          <li>
            <div
              class="flex gap-4 rounded-lg border-2 border-black1 bg-white px-4 py-4.5 shadow-shadow_black2"
            >
              <div class="h-10 w-10 rounded-full border-2 border-black1">
                <img src="../assets/img/user2.png" alt="" />
              </div>
              <div class="flex flex-1 items-end justify-between">
                <div>
                  <h3 class="font-bold">User</h3>
                  <p class="text-sm text-gray3">追蹤時間：2022/1/10 12:00</p>
                </div>
                <p>您已追蹤 90 天！</p>
              </div>
            </div>
          </li>
          <li>
            <div
              class="flex gap-4 rounded-lg border-2 border-black1 bg-white px-4 py-4.5 shadow-shadow_black2"
            >
              <div class="h-10 w-10 rounded-full border-2 border-black1">
                <img src="../assets/img/user2.png" alt="" />
              </div>
              <div class="flex flex-1 items-end justify-between">
                <div>
                  <h3 class="font-bold">User</h3>
                  <p class="text-sm text-gray3">追蹤時間：2022/1/10 12:00</p>
                </div>
                <p>您已追蹤 90 天！</p>
              </div>
            </div>
          </li>
          <li>
            <div
              class="flex gap-4 rounded-lg border-2 border-black1 bg-white px-4 py-4.5 shadow-shadow_black2"
            >
              <div class="h-10 w-10 rounded-full border-2 border-black1">
                <img src="../assets/img/user2.png" alt="" />
              </div>
              <div class="flex flex-1 items-end justify-between">
                <div>
                  <h3 class="font-bold">User</h3>
                  <p class="text-sm text-gray3">追蹤時間：2022/1/10 12:00</p>
                </div>
                <p>您已追蹤 90 天！</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="w-full lg:w-1/4">
        <BtnAside />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BtnAside from '@/components/BtnAside.vue'
</script>
