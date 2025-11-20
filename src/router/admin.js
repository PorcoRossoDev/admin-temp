import AdminLayout from "@/layouts/AdminLayout.vue";

export default [
    {
        path: '/admin',
        component: AdminLayout,
        meta: { requiresAuth: true },
        children: [
            {
                path: '',
                name: 'admin.dashboard',
                component: () => import('@/views/admin/DashboardView.vue'),
            },
            {
                path: 'article',
                name: 'admin.article',
                component: () => import('@/views/admin/article/Article.vue'),
            },
            {
                path: 'category-article',
                name: 'admin.category_article',
                component: () => import('@/views/admin/article/CategoryArticle.vue'),
            },
            {
                path: 'category-product',
                name: 'admin.category_product',
                component: () => import('@/views/admin/product/CategoryProduct.vue'),
            },
            {
                path: 'product',
                name: 'admin.product',
                component: () => import('@/views/admin/product/Product.vue'),
            },
            {
                path: 'product/add',
                name: 'admin.product_add',
                component: () => import('@/views/admin/product/ProductDetail.vue'),
            },
        ]
    }
]