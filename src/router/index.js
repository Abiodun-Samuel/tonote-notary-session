import { createRouter, createWebHistory } from "vue-router";
import NProgress from "nprogress";

const TestComponent = () =>
  import(
    /* webpackChunkName: "settings" */ "@/components/Test/TestComponent.vue"
  );
const HomePage = () =>
  import(/* webpackChunkName: "settings" */ "../views/HomePage.vue");

const VideoView = () =>
  import(/* webpackChunkName: "settings" */ "../views/VideoView.vue");

const routes = [
  {
    path: "/test",
    name: "Test",
    component: TestComponent,
    meta: {
      title: "Test Page",
      metaTags: [
        {
          name: "description",
          content: "The login page of ToNote.",
        },
        {
          property: "og:description",
          content: "The login page of ToNote.",
        },
      ],
    },
  },
  {
    path: "/",
    name: "Home",
    component: HomePage,
    meta: {
      title: "ToNote Notary Session",
      metaTags: [
        {
          name: "description",
          content: "This is the page for tonote notary video session",
        },
        {
          property: "og:description",
          content: "This is the page for tonote notary video session",
        },
      ],
    },
  },
  {
    path: "/:role",
    component: HomePage,
    meta: {
      title: "ToNote Notary Session",
      metaTags: [
        {
          name: "description",
          content: "This is the page for tonote notary video session",
        },
        {
          property: "og:description",
          content: "This is the page for tonote notary video session",
        },
      ],
    },
  },
  {
    path: "/video",
    name: "Video",
    component: VideoView,
    meta: {
      title: "ToNote Notary Session",
      metaTags: [
        {
          name: "description",
          content: "This is the page for tonote notary video session",
        },
        {
          property: "og:description",
          content: "This is the page for tonote notary video session",
        },
      ],
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  linkActiveClass: "active",
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return {
        savedPosition,
        behavior: "smooth",
      };
    } else {
      return { x: 0, y: 0 };
    }
  },
});

router.beforeEach((to, from, next) => {
  NProgress.start();

  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);
  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  // if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) return next();

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
