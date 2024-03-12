<template>
  <div class="container">
    <div class="flex flex-col-reverse gap-6 py-12 lg:flex-row">
      <div class="w-full lg:w-3/4">
        <div
          class="relative mb-8 flex items-center justify-center border-2 border-black1 bg-white p-4.5 after:absolute after:-left-2 after:top-2 after:-z-10 after:block after:h-full after:w-full after:border-2 after:border-black1 after:bg-white after:content-['']"
        >
          <h2 class="text-2xl font-bold">修改個人資料</h2>
        </div>
        <ul class="flex px-5">
          <li
            class="cursor-pointer rounded-se-lg rounded-ss-lg border-2 border-b-0 border-black1 px-6 py-2"
            :class="[isType === 1 ? 'bg-black text-white' : 'bg-white']"
            @click="isType = 1"
          >
            暱稱修改
          </li>
          <li
            class="cursor-pointer rounded-se-lg rounded-ss-lg border-2 border-b-0 border-black1 px-6 py-2"
            :class="[isType === 2 ? 'bg-black text-white' : 'bg-white']"
            @click="isType = 2"
          >
            重設密碼
          </li>
        </ul>
        <div class="rounded-lg border-2 border-black1 bg-white py-8">
          <form action="" class="mx-auto w-1/2" v-if="isType === 1">
            <div class="flex flex-col items-center gap-5">
              <img class="max-w-25 max-h-25" src="../assets/img/user_default.png" alt="" />
              <label for="">
                <input class="hidden" type="file" name="" id="" />
                <span class="bg-black px-6 py-1 text-white">上傳大頭貼</span>
              </label>
            </div>
            <div class="mb-4">
              <h3 class="mb-1 font-bold">暱稱</h3>
              <input
                type="text"
                placeholder="暱稱"
                class="w-full border-2 border-black1 px-6 py-4"
              />
            </div>
            <div>
              <h3 class="mb-1 font-bold">性別</h3>
              <div class="mb-8 flex items-center gap-6">
                <label for="" class="flex items-center gap-3">
                  <input type="radio" class="h-5 w-5" />
                  <span>男性</span>
                </label>
                <label for="" class="flex items-center gap-3">
                  <input type="radio" class="h-5 w-5" />
                  <span>女性</span>
                </label>
              </div>
            </div>
            <ul class="mb-4 text-sm text-red1">
              <li>1.圖片寬高比必需為 1:1，請重新輸入</li>
              <li>2.解析度寬度至少 300像素以上，請重新輸入</li>
            </ul>
            <button
              class="w-full rounded-lg border-2 border-black1 bg-yellow2 p-4 font-bold shadow-shadow_black hover:bg-blue1 hover:text-white"
              type="submit"
            >
              送出更新
            </button>
          </form>
          <form action="" class="mx-auto w-1/2" v-if="isType === 2">
            <div class="mb-4 flex flex-col">
              <label for="" class="mb-1 font-bold">輸入新密碼</label>
              <input
                type="text"
                placeholder="請輸入新密碼"
                class="p border-2 border-black1 px-6 py-3"
              />
            </div>
            <div class="mb-8 flex flex-col">
              <label for="" class="mb-1 font-bold">再次輸入</label>
              <input
                type="text"
                placeholder="再次輸入新密碼"
                class="p border-2 border-black1 px-6 py-3"
              />
            </div>
            <button
              type="button"
              class="w-full rounded-lg border-2 border-gray2 bg-gray1 p-4 font-bold text-white"
            >
              重設密碼
            </button>
          </form>
        </div>
      </div>
      <div class="w-full lg:w-1/4">
        <BtnAside />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BtnAside from '@/components/BtnAside.vue'
import { ref } from 'vue'

const isType = ref(1)
</script>
