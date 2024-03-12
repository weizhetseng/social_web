<template>
  <div class="container">
    <div class="flex flex-col-reverse gap-6 py-12 lg:flex-row">
      <div class="w-full lg:w-3/4">
        <div
          class="relative mb-8 flex items-center justify-center border-2 border-black1 bg-white p-4.5 after:absolute after:-left-2 after:top-2 after:-z-10 after:block after:h-full after:w-full after:border-2 after:border-black1 after:bg-white after:content-['']"
        >
          <h2 class="text-2xl font-bold">張貼動態</h2>
        </div>
        <div class="rounded-lg border-2 border-black1 bg-white p-8">
          <form action="">
            <div class="mb-4 flex flex-col">
              <label class="mb-1 font-bold" for="">貼文內容</label>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                class="w-full border-2 border-black1 px-4 py-3"
                placeholder="輸入您的貼文內容"
              ></textarea>
            </div>
            <div class="mb-8">
              <label for="" class="mb-4 block">
                <input class="hidden" type="file" name="" id="" />
                <span class="rounded-md bg-black px-8 py-1 text-white">上傳圖片</span>
              </label>
              <img class="w-full" src="../assets/img/image.png" alt="" />
            </div>
            <p class="mx-auto mb-4 w-1/2 text-center text-red1">圖片檔案過大，僅限 1mb 以下檔案</p>
            <p class="mx-auto mb-4 w-1/2 text-center text-red1">圖片格式錯誤，僅限 JPG、PNG 圖片</p>
            <button
              type="button"
              class="mx-auto block w-3/4 rounded-lg border-2 border-black1 bg-gray1 p-4 font-bold"
            >
              送出貼文
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
</script>
