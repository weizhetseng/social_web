<template>
  <form action="" class="mb-4 flex items-center gap-3">
    <select
      name=""
      id=""
      class="bg-angleD bg-5 bg-right-4 w-38 appearance-none border-2 border-black1 bg-no-repeat px-4 py-3"
    >
      <option value="">最新貼文</option>
    </select>
    <div class="flex flex-1 border-2 border-black1">
      <input type="text" placeholder="搜尋貼文" class="w-full px-4 py-3" />
      <button
        type="submit"
        class="flex w-12 flex-shrink-0 items-center justify-center border-l-2 border-black1 bg-blue1"
      >
        <VIcon icon="iconamoon:search-thin" class="text-3xl text-white" />
      </button>
    </div>
  </form>
</template>

<script lang="ts" setup></script>
