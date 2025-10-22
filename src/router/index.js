import { createRouter, createWebHistory } from "vue-router";

// Import các page component
import HomePage from "@/pages/index.vue";
import AboutPage from "@/pages/about.vue";
import ContactPage from "@/pages/contact.vue";
import ProductList from "@/pages/products/index.vue";
import ProductDetail from "@/pages/products/[id].vue";
import NotFoundPage from "@/pages/404.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
  {
    path: "/about",
    name: "about",
    component: AboutPage,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactPage,
  },
  {
    path: "/products",
    name: "product_list",
    component: ProductList,
  },
  {
    path: "/products/:id",
    name: "product_detail",
    component: ProductDetail,
    props: true, // giúp truyền param id vào component
  },
  {
    path: "/:pathMatch(.*)*",
    name: "not_found",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
