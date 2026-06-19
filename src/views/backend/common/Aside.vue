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
        <el-menu class="!border-0 !px-3 !mt-4 tx-el-menu-aside" router background-color="#fff" text-color="#333"
          active-text-color="#409EFF" :collapse="isCollapse" :collapse-transition="false"
          default-active="1"
          menu-trigger="hover" popper-append-to-body>

          <!-- Group 1 -->
          <el-menu-item-group>
            <template #title>
              <span class="!px-4" v-show="!isCollapse">Menu</span>
            </template>
            <el-menu-item class="!h-11 " :route="{ name: 'admin.dashboard' }" index="1">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard h-[18px] w-[18px] shrink-0 transition-colors text-sidebar-foreground/50 group-hover:text-sidebar-foreground/80" aria-hidden="true"><rect width="7" height="9" x="3" y="3" rx="1"></rect><rect width="7" height="5" x="14" y="3" rx="1"></rect><rect width="7" height="9" x="14" y="12" rx="1"></rect><rect width="7" height="5" x="3" y="16" rx="1"></rect></svg>
              <span class="ml-2">Dashboard</span>
            </el-menu-item>
          </el-menu-item-group>

          <!-- Group 5 -->
          <el-menu-item-group class="mt-2">
            <template #title>
              <span class="!px-4" v-show="!isCollapse">Auth</span>
            </template>

            <el-sub-menu index="2">
              <template #title>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-cog h-[18px] w-[18px] shrink-0 transition-colors text-sidebar-foreground/50 group-hover:text-sidebar-foreground/80" aria-hidden="true"><path d="M10 15H6a4 4 0 0 0-4 4v2"></path><path d="m14.305 16.53.923-.382"></path><path d="m15.228 13.852-.923-.383"></path><path d="m16.852 12.228-.383-.923"></path><path d="m16.852 17.772-.383.924"></path><path d="m19.148 12.228.383-.923"></path><path d="m19.53 18.696-.382-.924"></path><path d="m20.772 13.852.924-.383"></path><path d="m20.772 16.148.924.383"></path><circle cx="18" cy="15" r="3"></circle><circle cx="9" cy="7" r="4"></circle></svg>
                <span class="ml-2" v-show="!isCollapse">Thành viên</span>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users h-[18px] w-[18px] shrink-0 transition-colors text-sidebar-foreground/50 group-hover:text-sidebar-foreground/80" aria-hidden="true"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                <span class="ml-2" v-show="!isCollapse">Khách hàng</span>
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
              <span class="!px-4" v-show="!isCollapse">App</span>
            </template>

            <el-menu-item :route="{ name: 'admin.page' }" class="!h-10 !px-6" index="4">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-book-open h-[18px] w-[18px] shrink-0 transition-colors text-sidebar-foreground/50 group-hover:text-sidebar-foreground/80" aria-hidden="true"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
              <span class="ml-2" v-show="!isCollapse">Trang</span>
            </el-menu-item>

            <el-sub-menu index="5">
              <template #title>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text h-[18px] w-[18px] shrink-0 transition-colors text-sidebar-foreground/50 group-hover:text-sidebar-foreground/80" aria-hidden="true"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                <span class="ml-2" v-show="!isCollapse">Bài viết</span>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shopping-bag-icon lucide-shopping-bag"><path d="M16 10a4 4 0 0 1-8 0"/><path d="M3.103 6.034h17.794"/><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"/></svg>
                <span class="ml-2" v-show="!isCollapse">Đơn hàng</span>
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
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package-search-icon lucide-package-search"><path d="M12 22V12"/><path d="M20.27 18.27 22 20"/><path d="M21 10.498V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.729l7 4a2 2 0 0 0 2 .001l.98-.559"/><path d="M3.29 7 12 12l8.71-5"/><path d="m7.5 4.27 8.997 5.148"/><circle cx="18.5" cy="16.5" r="2.5"/></svg>
                <span class="ml-2" v-show="!isCollapse">Sản phẩm</span>
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
    border-radius: 8px;

}

:deep(.el-menu-item:hover),
:deep(.el-sub-menu__title:hover),
:deep(.el-menu-item-group > .el-menu-item.is-active),
:deep(.el-sub-menu.is-active.is-opened .el-sub-menu__title) {
  background-color: var(--color-primary);
  color: #fff!important;
  border-radius: 8px;
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
  padding-inline: 16px!important;
  border-radius: 8px;
}

:deep(.el-sub-menu .el-menu-item) {
  padding-left: 16px !important;
  height: 45px;
}

:deep(.menu__title) {
  padding-inline: 16px ! important;
  /* border-radius: 8px; */
  height: 45x;
  color: #141212;
  border-radius: 8px;
  /* margin-bottom: 5px; */
}

:deep(.el-sub-menu .el-menu-item.is-active) {
  background-color: #ddd;
  color: #333;
}

:deep(.el-sub-menu__title) {
  padding-inline: 16px !important;
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
  border-radius: 8px;
  /* Màu chữ khi active */
}

:deep(.el-sub-menu__title *){
  /* color: #000; */
}
</style>