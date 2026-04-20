<template>
  <el-aside :class="[
    'flex flex-col !h-full shadow-[0_1px_3px_0_rgb(0_0_0_/_0.1),_0_1px_2px_-1px_rgb(0_0_0_/_0.1)] bg-white transition-all duration-300',
    isCollapse ? '!w-[70px]' : '!w-[250px]'
  ]">
    <!-- LOGO -->
    <div
      class="h-[70px] flex justify-center items-center border-b border-dashed border-[#6b728040] bg-white z-10 transition-all duration-300">
      <el-image v-if="!isCollapse" class="h-[25px]"
        src="https://themes.coderthemes.com/konrix_r/assets/logo-dark-359bbb7d.png" fit="cover" />
      <el-icon v-else class="text-2xl text-blue-500">
        <Monitor />
      </el-icon>
    </div>

    <!-- MENU -->
    <div class="flex-1 overflow-hidden">
      <el-scrollbar class="h-full">
        <el-menu class="!border-0 !px-0 !mt-4 tx-el-menu-aside" router background-color="#fff" text-color="#333"
          active-text-color="#409EFF" :collapse="isCollapse" :collapse-transition="false"
          default-active="1"
          menu-trigger="hover" popper-append-to-body>

          <!-- Group 1 -->
          <el-menu-item-group>
            <template #title>
              <span class="!px-6" v-show="!isCollapse">Menu</span>
            </template>
            <el-menu-item class="!h-11 " :route="{ name: 'admin.dashboard' }" index="1">
              <el-icon class="flex-left">
                <House />
              </el-icon>
              <span>Dashboard</span>
            </el-menu-item>
          </el-menu-item-group>

          <!-- Group 5 -->
          <el-menu-item-group class="mt-2">
            <template #title>
              <span class="!px-6" v-show="!isCollapse">Auth</span>
            </template>

            <el-sub-menu index="2">
              <template #title>
                <el-icon class="flex-left">
                  <User />
                </el-icon>
                <span v-show="!isCollapse">Thành viên</span>
              </template>
              <el-menu-item :route="{ name: 'admin.user' }" index="2-1"><el-icon class="!w-3">
                  <ArrowRight />
                </el-icon>Danh sách thành viên</el-menu-item>
              <el-menu-item :route="{ name: 'admin.category_user' }" index="2-2"><el-icon class="!w-3">
                  <ArrowRight />
                </el-icon>Danh mục thành viên</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="3">
              <template #title>
                <el-icon class="flex-left">
                  <Coin />
                </el-icon>
                <span v-show="!isCollapse">Khách hàng</span>
              </template>
              <el-menu-item index="3-1"><el-icon class="!w-3">
                  <ArrowRight />
                </el-icon>Danh sách khách hàng</el-menu-item>
              <el-menu-item index="3-2"><el-icon class="!w-3">
                  <ArrowRight />
                </el-icon>Danh mục khách hàng</el-menu-item>
            </el-sub-menu>

          </el-menu-item-group>

          <!-- Group 2 -->
          <el-menu-item-group class="mt-2">
            <template #title>
              <span class="!px-6" v-show="!isCollapse">App</span>
            </template>

            <el-menu-item :route="{ name: 'admin.page' }" class="!h-10 !px-6" index="4">
              <el-icon class="flex-left">
                <Memo />
              </el-icon>
              <span v-show="!isCollapse">Trang</span>
            </el-menu-item>

            <el-sub-menu index="5">
              <template #title>
                <el-icon class="flex-left">
                  <Document />
                </el-icon>
                <span v-show="!isCollapse">Bài viết</span>
              </template>
              <el-menu-item index="5-1" :route="{ name: 'admin.article' }"><el-icon class="!w-3">
                  <ArrowRight />
                </el-icon>Danh sách bài viết</el-menu-item>
              <el-menu-item index="5-2" :route="{ name: 'admin.category_article' }"><el-icon class="!w-3">
                  <ArrowRight />
                </el-icon>Danh mục bài viết</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="101">
              <template #title>
                <el-icon class="flex-left">
                  <ShoppingCartFull />
                </el-icon>
                <span v-show="!isCollapse">Đơn hàng</span>
              </template>
              <el-menu-item index="101-1" :route="{ name: 'admin.order' }"><el-icon class="!w-3">
                  <ArrowRight />
                </el-icon>Danh sách đơn hàng</el-menu-item>
              <el-menu-item index="101-2" :route="{ name: 'admin.category_order' }"><el-icon class="!w-3">
                  <ArrowRight />
                </el-icon>Danh mục đơn hàng</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="6">
              <template #title>
                <el-icon class="flex-left">
                  <Goods />
                </el-icon>
                <span v-show="!isCollapse">Sản phẩm</span>
              </template>
              <el-menu-item index="6-1" :route="{ name: 'admin.product' }"><el-icon class="!w-3">
                  <ArrowRight />
                </el-icon>Danh sách sản phẩm</el-menu-item>
              <el-menu-item index="6-2" :route="{ name: 'admin.category_product' }"><el-icon class="!w-3">
                  <ArrowRight />
                </el-icon>Danh mục sản phẩm</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="7">
              <template #title>
                <el-icon class="flex-left">
                  <Cpu />
                </el-icon>
                <span v-show="!isCollapse">Thuộc tính</span>
              </template>
              <el-menu-item :route="{ name: 'admin.attribute' }" index="7-1"><el-icon class="!w-3">
                  <ArrowRight />
                </el-icon>Danh sách thuộc tính</el-menu-item>
              <el-menu-item :route="{ name: 'admin.category_attribute' }" index="7-2"><el-icon class="!w-3">
                  <ArrowRight />
                </el-icon>Danh mục thuộc tính</el-menu-item>
            </el-sub-menu>

            <el-sub-menu index="8">
              <template #title>
                <el-icon class="flex-left">
                  <VideoPlay />
                </el-icon>
                <span v-show="!isCollapse">Media</span>
              </template>
              <el-menu-item index="8-1" :route="{ name: 'admin.gallery' }"><el-icon class="!w-3">
                  <ArrowRight />
                </el-icon>Danh sách media</el-menu-item>
              <el-menu-item index="8-2" :route="{ name: 'admin.category_gallery' }"><el-icon class="!w-3">
                  <ArrowRight />
                </el-icon>Danh mục media</el-menu-item>
            </el-sub-menu>

            <el-menu-item :route="{ name: 'admin.contact' }" class="!h-10 !px-6" index="9">
              <el-icon class="flex-left">
                <Message />
              </el-icon>
              <span v-show="!isCollapse">Liên hệ</span>
            </el-menu-item>

            <el-menu-item :route="{ name: 'admin.comment' }" class="!h-10 !px-6" index="10">
              <el-icon class="flex-left">
                <ChatDotRound />
              </el-icon>
              <span v-show="!isCollapse">Bình luận</span>
            </el-menu-item>

            <el-menu-item :route="{ name: 'admin.tag' }" class="!h-10 !px-6" index="11">
              <el-icon class="flex-left">
                <CollectionTag />
              </el-icon>
              <span v-show="!isCollapse">Tags</span>
            </el-menu-item>

            <el-menu-item :route="{ name: 'admin.menu' }" class="!h-10 !px-6" index="12">
              <el-icon class="flex-left">
                <Connection />
              </el-icon>
              <span v-show="!isCollapse">Menu</span>
            </el-menu-item>

          </el-menu-item-group>

          <!-- Group 4 -->
          <el-menu-item-group class="mt-2">
            <template #title>
              <span class="!px-6" v-show="!isCollapse">Setting</span>
            </template>

            <el-menu-item :route="{ name: 'admin.setting' }" class="!h-10 !px-6" index="13">
              <el-icon class="flex-left">
                <Setting />
              </el-icon>
              <span v-show="!isCollapse">Cấu hình</span>
            </el-menu-item>

            <el-menu-item class="!h-10 " index="14">
              <el-icon>
                <Operation />
              </el-icon>
              <span v-show="!isCollapse">Cập nhật sitemap</span>
            </el-menu-item>

          </el-menu-item-group>

        </el-menu>
      </el-scrollbar>
    </div>

    <!-- TOGGLE BUTTON -->
    <div class="p-3 shadow-2xl border-t border-gray-200 flex justify-center">
      <el-button circle size="medium" @click="isCollapse = !isCollapse" :icon="isCollapse ? Expand : Fold" />
    </div>
  </el-aside>
</template>

<script setup>
import { ref } from 'vue'
import {
  Monitor, Document, Goods, Expand, Fold, House, ArrowRight, Memo, Cpu, Message,
  VideoPlay, ChatDotRound, CollectionTag, Connection, Setting, Operation, User, Coin,
  ShoppingCartFull
} from '@element-plus/icons-vue'
import { useRoute } from 'vue-router'
const route = useRoute()
const isCollapse = ref(false)
</script>

<style scoped>
:deep(.el-menu--collapse .el-menu-item-group__title) {
  display: none;
}

:deep(.tx-el-menu-aside .el-menu-item-group__title) {
  padding-left: 0 !important;
}

:deep(.el-menu-item:hover),
:deep(.el-sub-menu__title:hover),
:deep(.el-menu-item-group > .el-menu-item.is-active),
:deep(.el-sub-menu.is-active.is-opened .el-sub-menu__title) {
  background-color: var(--color-primary);
  color: #fff!important;
}

/* :deep(.el-menu-item:hover),
:deep(.el-sub-menu__title:hover),
:deep(.el-menu-item-group > .el-menu-item.is-active),
:deep(.el-sub-menu.is-active.is-opened .el-sub-menu__title) {
  background-color: #ecf5ff;
  color: #1e85ff;
} */

:deep(.el-menu-item:hover i),
:deep(.el-sub-menu__title:hover i) {
  color: #fff;
}

:deep(.el-menu-item-group__title) {
  /* border-radius: 8px; */
  padding-inline: 24px!important;
}

:deep(.el-sub-menu .el-menu-item) {
  padding-left: 24px !important;
  height: 45px;
}

:deep(.menu__title) {
  padding-inline: 24px ! important;
  /* border-radius: 8px; */
  height: 45x;
  color: #141212;
  /* margin-bottom: 5px; */
}

:deep(.el-sub-menu .el-menu-item.is-active) {
  background-color: #ddd;
  color: #333;
}

:deep(.el-sub-menu__title) {
  padding-inline: 24px !important;
  height: 45px;
  /* color: #141212!important; */
  /* border-radius: 8px; */
}

:deep(.el-menu--inline) {
  margin-top: 5px;
}

:deep(.el-sub-menu .el-menu--inline) {
  /* margin-bottom: 5px; */
  margin-top: 0!important;
}

:deep(.el-menu-item-group > ul > .el-menu-item) {
  /* margin-bottom: 5px; */
}

:deep(.el-menu--vertical.el-menu--collapse .el-sub-menu__title),
:deep(.el-menu--vertical.el-menu--collapse .el-icon),
:deep(.el-menu--vertical.el-menu--collapse .el-menu-item) {
  /* padding-inline: 0 !important; */
  justify-content: center;
  margin-right: 0;
  /* color: #141212; */
}

:deep(.el-menu-item.is-active) {
  background-color: var(--color-primary);
  /* Màu nền bạn muốn */
  color: #fff;
  /* Màu chữ khi active */
}

:deep(.el-sub-menu__title *){
  /* color: #000; */
}
</style>