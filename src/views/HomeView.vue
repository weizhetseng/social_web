<template>
  <div class="container">
    <div class="flex flex-col-reverse gap-6 py-12 lg:flex-row">
      <div class="w-full lg:w-3/4">
        <BtnSearchBar />
        <div
          class="rounded-lg border-2 border-black1 bg-white shadow-shadow_black2"
          v-if="!hasPost"
        >
          <div class="border-b-2 border-black1 px-4 py-4.5">
            <div class="flex items-center gap-1.5">
              <div class="h-2.5 w-2.5 rounded-full border border-gray4 bg-red2"></div>
              <div class="h-2.5 w-2.5 rounded-full border border-gray4 bg-yellow1"></div>
              <div class="h-2.5 w-2.5 rounded-full border border-gray4 bg-green1"></div>
            </div>
          </div>
          <div class="flex items-center justify-center">
            <p class="p-8 text-gray3">目前尚無動態，新增一則貼文吧！</p>
          </div>
        </div>
        <ul class="flex flex-col gap-6" v-else>
          <li>
            <div class="rounded-lg border-2 border-black1 bg-white px-7 py-6 shadow-shadow_black2">
              <div class="mb-4 flex items-center gap-2">
                <div class="h-11 w-11 rounded-full border-2 border-black1">
                  <img class="h-full w-full object-cover" src="../assets/img/user.png" alt="" />
                </div>
                <div>
                  <h3 class="font-bold hover:text-blue1 hover:underline">User</h3>
                  <p class="text-xs text-gray3">2022/1/10 12:00</p>
                </div>
              </div>
              <div class="mb-4">
                <p>外面看起來就超冷....</p>
                <p>我決定回被窩繼續睡....</p>
                <br />
                <img class="w-full" src="../assets/img/image.png" alt="" />
              </div>
              <div class="mb-5">
                <button type="button" class="flex items-center gap-1">
                  <VIcon icon="mingcute:thumb-up-2-line" class="text-2xl text-black1" />
                  <p class="text-black1">20</p>
                </button>
              </div>
              <div>
                <div class="mb-4.5 flex items-center gap-2">
                  <div class="h-10 w-10 rounded-full border-2 border-black1">
                    <img class="h-full w-full" src="../assets/img/user.png" alt="" />
                  </div>
                  <form action="" class="flex flex-1 border-2 border-black1">
                    <input type="text" class="w-full flex-1 px-4 py-2" placeholder="留言..." />
                    <button
                      class="border-l-2 border-black1 bg-blue1 px-12 py-4 text-white hover:bg-yellow2 hover:text-blue1"
                      type="submit"
                    >
                      留言
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </li>
          <li>
            <div class="rounded-lg border-2 border-black1 bg-white px-7 py-6 shadow-shadow_black2">
              <div class="mb-4 flex items-center gap-2">
                <div class="h-11 w-11 rounded-full border-2 border-black1">
                  <img class="h-full w-full object-cover" src="../assets/img/user2.png" alt="" />
                </div>
                <RouterLink to="/member">
                  <h3 class="font-bold hover:text-blue1 hover:underline">波吉</h3>
                  <p class="text-xs text-gray3">2022/1/10 12:00</p>
                </RouterLink>
              </div>
              <div class="mb-4">我一定要成為很棒棒的國王！</div>
              <div class="mb-5">
                <button type="button" class="flex items-center gap-1">
                  <VIcon icon="mingcute:thumb-up-2-line" class="text-2xl text-gray3" />
                  <p class="text-gray3">成為第一個按讚的朋友</p>
                </button>
              </div>
              <div>
                <div class="mb-4.5 flex items-center gap-2">
                  <div class="h-10 w-10 rounded-full border-2 border-black1">
                    <img class="h-full w-full" src="../assets/img/user.png" alt="" />
                  </div>
                  <form action="" class="flex flex-1 border-2 border-black1">
                    <input type="text" class="w-full flex-1 px-4 py-2" placeholder="留言..." />
                    <button
                      class="border-l-2 border-black1 bg-blue1 px-12 py-4 text-white hover:bg-yellow2 hover:text-blue1"
                      type="submit"
                    >
                      留言
                    </button>
                  </form>
                </div>
                <ul class="flex flex-col gap-4">
                  <li>
                    <div class="flex gap-3 rounded-xl bg-main px-4 py-4.5">
                      <div class="h-10 w-10 rounded-full border-2 border-black1">
                        <img class="h-full w-full" src="../assets/img/user.png" alt="" />
                      </div>
                      <div>
                        <div class="mb-1">
                          <h3 class="font-bold">波吉</h3>
                          <p class="text-xs text-gray3">2022/1/10 12:00</p>
                        </div>
                        <div>
                          <p>測試內容測試內容測試內容測試內容</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li>
            <div class="rounded-lg border-2 border-black1 bg-white px-7 py-6 shadow-shadow_black2">
              <div class="mb-4 flex items-center gap-2">
                <div class="h-11 w-11 rounded-full border-2 border-black1">
                  <img class="h-full w-full object-cover" src="../assets/img/user2.png" alt="" />
                </div>
                <div>
                  <h3 class="font-bold hover:text-blue1 hover:underline">波吉</h3>
                  <p class="text-xs text-gray3">2022/1/10 12:00</p>
                </div>
              </div>
              <div class="mb-4">各位我有一個作戰計畫</div>
              <div class="mb-5">
                <button type="button" class="flex items-center gap-1">
                  <VIcon icon="mingcute:thumb-up-2-line" class="text-2xl text-black1" />
                  <p class="text-black1">12</p>
                </button>
              </div>
              <div>
                <div class="mb-4.5 flex items-center gap-2">
                  <div class="h-10 w-10 rounded-full border-2 border-black1">
                    <img class="h-full w-full" src="../assets/img/user.png" alt="" />
                  </div>
                  <form action="" class="flex flex-1 border-2 border-black1">
                    <input type="text" class="w-full flex-1 px-4 py-2" placeholder="留言..." />
                    <button
                      class="border-l-2 border-black1 bg-blue1 px-12 py-4 text-white hover:bg-yellow2 hover:text-blue1"
                      type="submit"
                    >
                      留言
                    </button>
                  </form>
                </div>
                <ul class="flex flex-col gap-4">
                  <li>
                    <div class="flex gap-3 rounded-xl bg-main px-4 py-4.5">
                      <div class="h-10 w-10 rounded-full border-2 border-black1">
                        <img class="h-full w-full" src="../assets/img/user.png" alt="" />
                      </div>
                      <div>
                        <div class="mb-1">
                          <h3 class="font-bold">波吉</h3>
                          <p class="text-xs text-gray3">2022/1/10 12:00</p>
                        </div>
                        <div>
                          <p>測試內容測試內容測試內容測試內容</p>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <div class="flex gap-3 rounded-xl bg-main px-4 py-4.5">
                      <div class="h-10 w-10 rounded-full border-2 border-black1">
                        <img class="h-full w-full" src="../assets/img/user.png" alt="" />
                      </div>
                      <div>
                        <div class="mb-1">
                          <h3 class="font-bold">波吉</h3>
                          <p class="text-xs text-gray3">2022/1/10 12:00</p>
                        </div>
                        <div>
                          <p>測試內容測試內容測試內容測試內容</p>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
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
import BtnSearchBar from '@/components/BtnSearchBar.vue'
import { ref } from 'vue'

const hasPost = ref(true)
</script>
