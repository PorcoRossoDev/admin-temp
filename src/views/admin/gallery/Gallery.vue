<template>
  <div class="row g-4" id="gallery-album" :style="{position: 'relative', height: galleryHeight + 'px'}">
    <div
      v-for="(item, index) in galleryItems"
      :key="index"
      :class="['col-sm-6 col-md-4 col-xl-3 isotope-item', item.type]"
      :style="{
        visibility: 'visible',
        position: 'absolute',
        left: item.position.left + 'px',
        top: item.position.top + 'px'
      }"
    >
      <div class="album-item position-relative overflow-hidden">
        <a class="text-decoration-none" :href="item.link">
          <div class="photo-stack">
            <template v-if="item.type === 'image'">
              <div
                v-for="(img, i) in item.images"
                :key="i"
                class="rounded-2 overflow-hidden"
                :class="['photo-stack-' + iName(i)]"
              >
                <img class="w-100 object-fit-cover" :src="img" alt="" />
              </div>
            </template>

            <template v-else-if="item.type === 'video'">
              <div class="rounded-2 overflow-hidden photo-stack-top">
                <div class="video-container">
                  <video
                    class="video d-block h-100 w-100 overflow-hidden rounded-2"
                    muted
                    :poster="item.poster"
                    data-play-on-hover
                  >
                    <source :src="item.video" type="video/mp4" />
                  </video>
                  <div class="circle-icon-item position-absolute top-50 start-50 translate-middle bg-body-emphasis rounded-pill bg-opacity-50">
                    <svg
                      class="svg-inline--fa fa-video fs-9 fs-sm-8 text-body"
                      aria-hidden="true"
                      focusable="false"
                      data-prefix="fas"
                      data-icon="video"
                      role="img"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 576 512"
                    >
                      <path
                        fill="currentColor"
                        d="M0 128C0 92.7 28.7 64 64 64l256 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2l0 256c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1l0-17.1 0-128 0-17.1 14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z"
                      ></path>
                    </svg>
                  </div>
                </div>
              </div>
              <div
                v-for="(img, i) in item.images"
                v-if="i > 0"
                :key="i"
                class="rounded-2 overflow-hidden"
                :class="['photo-stack-' + iName(i)]"
              >
                <img class="w-100 object-fit-cover" :src="img" alt="" />
              </div>
            </template>
          </div>
          <h4 class="mt-5 title">{{ item.title }}</h4>
          <p class="mb-0 fs-9 text-body">{{ item.count }} Items</p>
        </a>

        <div class="dropdown position-absolute top-0 end-0 mt-3 me-3 z-5">
          <button
            class="btn btn-sm px-3 dropdown-toggle dropdown-caret-none"
            type="button"
            data-bs-toggle="dropdown"
            data-boundary="window"
            aria-haspopup="true"
            aria-expanded="false"
            data-bs-reference="parent"
          >
            <svg
              class="svg-inline--fa fa-ellipsis"
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              data-icon="ellipsis"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z"
              ></path>
            </svg>
          </button>
          <div class="dropdown-menu dropdown-menu-end py-2">
            <a class="dropdown-item" href="#!">Edit</a>
            <a class="dropdown-item text-danger" href="#!">Delete</a>
            <a class="dropdown-item" href="#!">Download</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GalleryAlbum",
  data() {
    return {
      galleryHeight: 777, // chiều cao container tạm thời
      galleryItems: [
        {
          type: "image",
          title: "Trip",
          count: 43,
          link: "../../apps/gallery/gallery-grid.html",
          images: [
            "../../assets/img/gallery/109.png",
            "../../assets/img/gallery/77.png",
            "../../assets/img/gallery/78.png",
          ],
          position: { left: 0, top: 0 },
        },
        {
          type: "video",
          title: "Hotel",
          count: 23,
          link: "../../apps/gallery/gallery-grid.html",
          video: "../../assets/video/1.mp4",
          poster: "../../assets/video/1.png",
          images: ["../../assets/img/gallery/81.png", "../../assets/img/gallery/80.png"],
          position: { left: 288, top: 0 },
        },
        // Add thêm các items khác theo mẫu tương tự
      ],
    };
  },
  methods: {
    iName(index) {
      if (index === 0) return "top";
      if (index === 1) return "middle";
      if (index === 2) return "bottom";
      return index;
    },
  },
};
</script>

<style scoped>
.video-container {
  position: relative;
}
.circle-icon-item {
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>