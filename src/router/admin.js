import AdminLayout from "@/layouts/AdminLayout.vue";

export default [
    {
        path: '/admin',
        component: AdminLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: 'dashboard',
                name: 'admin.dashboard',
                component: () => import('@/views/backend/DashboardView.vue'),
            },
            {
                path: 'article',
                name: 'admin.article',
                component: () => import('@/views/backend/article/ArticleList.vue'),
            },
            {
                path: 'category-article',
                name: 'admin.category_article',
                component: () => import('@/views/backend/article/CategoryList.vue'),
            },
            {
                path: 'category-attribute',
                name: 'admin.category_attribute',
                component: () => import('@/views/backend/attribute/pages/CategoryList.vue'),
            },
            {
                path: 'attribute',
                name: 'admin.attribute',
                component: () => import('@/views/backend/attribute/pages/AttributeList.vue'),
            },
            {
                path: 'category-product',
                name: 'admin.category_product',
                component: () => import('@/views/backend/product/CategoryList.vue'),
            },
            {
                path: 'category-product/add',
                name: 'admin.category_product_add',
                component: () => import('@/views/backend/product/CategoryForm.vue'),
            },
            {
                path: 'category-product/edit',
                name: 'admin.category_product_edit',
                component: () => import('@/views/backend/product/CategoryForm.vue'),
            },
            {
                path: 'product',
                name: 'admin.product',
                component: () => import('@/views/backend/product/ProductList.vue'),
            },
            {
                path: 'product/add',
                name: 'admin.product_add',
                component: () => import('@/views/backend/product/ProductForm.vue'),
            },
            {
                path: 'gallery',
                name: 'admin.gallery',
                component: () => import('@/views/backend/gallery/GalleryList.vue'),
            },
            {
                path: 'category-gallery',
                name: 'admin.category_gallery',
                component: () => import('@/views/backend/gallery/CategoryList.vue'),
            },
            {
                path: 'add/category-gallery',
                name: 'admin.category_gallery_add',
                component: () => import('@/views/backend/gallery/CategoryForm.vue'),
            },
            {
                path: 'page',
                name: 'admin.page',
                component: () => import('@/views/backend/page/PageList.vue'),
            },
            {
                path: 'add/page',
                name: 'admin.add_page',
                component: () => import('@/views/backend/page/PageForm.vue'),
            },
            {
                path: 'user',
                name: 'admin.user',
                component: () => import('@/views/backend/user/pages/UserList.vue'),
            },
            {
                path: 'user/edit',
                name: 'admin.edit_user',
                component: () => import('@/views/backend/user/pages/UserForm.vue'),
            },
            {
                path: 'user/add',
                name: 'admin.add_user',
                component: () => import('@/views/backend/user/pages/UserForm.vue'),
            },
            {
                path: 'category-user',
                name: 'admin.category_user',
                component: () => import('@/views/backend/user/pages/CategoryList.vue'),
            },
            {
                path: 'category-user/edit',
                name: 'admin.category_user_edit',
                component: () => import('@/views/backend/user/pages/CategoryForm.vue'),
            },
            {
                path: 'category-user/add',
                name: 'admin.category_user_add',
                component: () => import('@/views/backend/user/pages/CategoryForm.vue'),
            },
            {
                path: 'tag',
                name: 'admin.tag',
                component: () => import('@/views/backend/tag/pages/TagList.vue'),
            },
            {
                path: 'contact',
                name: 'admin.contact',
                component: () => import('@/views/backend/contact/pages/ContactList.vue'),
            },
            {
                path: 'comment',
                name: 'admin.comment',
                component: () => import('@/views/backend/comment/pages/CommentList.vue'),
            },
            {
                path: 'menu',
                name: 'admin.menu',
                component: () => import('@/views/backend/menu/pages/MenuList.vue'),
            },
            {
                path: 'menu/edit',
                name: 'admin.menu_edit',
                component: () => import('@/views/backend/menu/pages/MenuForm.vue'),
            },
            {
                path: 'setting',
                name: 'admin.setting',
                component: () => import('@/views/backend/setting/pages/SettingList.vue'),
            },
            {
                path: 'order',
                name: 'admin.order',
                component: () => import('@/views/backend/order/pages/OrderList.vue'),
            },
        ]
    }
]