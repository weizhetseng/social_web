<template>
  <div
    class="m-auto my-20 flex w-11/12 max-w-4xl flex-col-reverse items-center gap-12 border-2 border-solid border-black1 bg-main px-12 py-16 shadow-shadow_gray md:flex-row"
  >
    <div class="md:w-1/2">
      <img src="@/assets/img/login.svg" alt="" />
    </div>
    <div class="md:w-1/2">
      <h3 class="text-center text-6xl font-bold leading-normal">MetaWall</h3>
      <p class="mb-9 text-center text-2xl font-bold">從元宇宙展開全新社交圈</p>
      <form
        @submit.prevent="router.push('/home')"
        class="flex flex-col items-center"
        v-if="!isRegister"
      >
        <div class="mb-4 w-full">
          <input
            type="email"
            name="email"
            id="email"
            autocomplete="username"
            placeholder="Email"
            class="mb-1 w-full border-2 border-solid border-black1 px-6 py-4"
          />
          <span class="text-red1">請輸入帳號</span>
        </div>
        <div class="mb-8 w-full">
          <input
            type="password"
            name="password"
            id="password"
            autocomplete="current-password"
            placeholder="Password"
            class="mb-1 w-full border-2 border-solid border-black1 px-6 py-4"
          />
          <span class="text-red1">請輸入密碼</span>
        </div>
        <p class="mb-4 text-red1">帳號或密碼錯誤，請重新輸入！</p>
        <button
          class="mb-4 w-full rounded-lg border-2 border-solid border-black1 bg-blue1 p-4 font-bold text-white shadow-shadow_black"
          type="submit"
        >
          <!-- bg-gray1 border-gray2 -->
          登入
        </button>
        <button type="button" class="mx-auto block text-center" @click="isRegister = true">
          註冊帳號
        </button>
      </form>
      <form @submit.prevent="" class="flex flex-col" v-else>
        <div class="mb-4">
          <input
            type="text"
            name="newName"
            id="newName"
            autocomplete="username"
            placeholder="暱稱"
            class="mb-1 w-full border-2 border-solid border-black1 px-6 py-4"
          />
          <span class="text-red1">暱稱至少兩個字元以上</span>
        </div>
        <div class="mb-4">
          <input
            type="email"
            name="newEmail"
            id="newEmail"
            autocomplete="email"
            placeholder="Email"
            class="mb-1 w-full border-2 border-solid border-black1 px-6 py-4"
          />
          <span class="text-red1">帳號已被註冊，請替換新的Email!</span>
        </div>
        <div class="mb-8">
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            autocomplete="new-password"
            placeholder="Password"
            class="mb-1 w-full border-2 border-solid border-black1 px-6 py-4"
          />
          <span class="text-red1">密碼至少需要8碼以上，並中英混合</span>
        </div>
        <button
          class="mb-4 w-full rounded-lg border-2 border-solid border-gray2 bg-gray1 p-4 font-bold text-white"
          type="submit"
        >
          註冊
        </button>
        <button type="button" class="mx-auto block text-center" @click="isRegister = false">
          登入
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
const isRegister = ref<boolean>(false)
const router = useRouter()
</script>
