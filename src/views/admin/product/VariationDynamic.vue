<template>
  <div>
    <h2 class="font-bold mb-2">Thuộc tính</h2>

    <!-- Danh sách thuộc tính -->
    <div
      v-for="(attr, i) in attributes"
      :key="i"
      class="mb-2 flex items-center gap-2"
    >
      <el-input v-model="attr.name" placeholder="Tên thuộc tính" class="!w-1/4" />

      <el-select v-model="attr.values" multiple placeholder="Giá trị" class="!w-3/4">
        <el-option
          v-for="val in sampleValues"
          :key="val"
          :label="val"
          :value="val"
        />
      </el-select>

      <el-button type="danger" @click="removeAttribute(i)">
        <el-icon><DeleteFilled /></el-icon>
      </el-button>
    </div>

    <el-button type="success" @click="addAttribute">
      <el-icon class="mr-1"><CirclePlus /></el-icon>
      Thêm thuộc tính
    </el-button>

    <el-button type="primary" class="ml-2" @click="generateVariations">
      Tạo biến thể
    </el-button>

    <!-- ========================== -->
    <!--     DANH SÁCH VARIATION    -->
    <!-- ========================== -->
    <div class="mt-6 space-y-4">
      <div
        v-for="(row, i) in variations"
        :key="i"
        class="border p-4 rounded-lg bg-white shadow-sm"
      >
        <!-- CLICK HEADER -->
        <div
          class="flex justify-between items-center cursor-pointer"
          @click="toggle(i)"
        >
          <h3 class="font-bold text-md">
            {{ renderVariationName(row) }}
          </h3>

          <div class="flex items-center gap-2">
            <span v-if="openIndex === i">▲</span>
            <span v-else>▼</span>

            <el-button
              type="danger"
              size="small"
              @click.stop="removeVariation(i)"
            >
              <el-icon><DeleteFilled /></el-icon>
            </el-button>
          </div>
        </div>

        <!-- FORM ẨN / HIỆN -->
        <transition name="fade">
          <div v-if="openIndex === i" class="mt-4 border-t pt-4 grid grid-cols-2 gap-4">

            <div>
              <label class="font-medium">Giá</label>
              <el-input v-model="row.price" class="mt-1" />
            </div>

            <div>
              <label class="font-medium">Số lượng</label>
              <el-input v-model="row.stock" class="mt-1" />
            </div>

            <div>
              <label class="font-medium">SKU</label>
              <el-input v-model="row.sku" class="mt-1" />
            </div>

            <div>
              <label class="font-medium block mb-1">Ảnh</label>
              <el-upload
                action="#"
                list-type="picture-card"
                v-model:file-list="row.imageList"
              >
                <i class="el-icon-plus"></i>
              </el-upload>
            </div>

          </div>
        </transition>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref } from "vue";
import { DeleteFilled, CirclePlus } from "@element-plus/icons-vue";

const sampleValues = ["Red", "Blue", "Green", "S", "M", "L", "Cotton", "Silk"];

const attributes = ref([{ name: "Color", values: [] }]);
const variations = ref([]);

const openIndex = ref(null); // <— chỉ mục đang mở

function toggle(i) {
  openIndex.value = openIndex.value === i ? null : i;
}

// ================================
// TẠO TÊN BIẾN THỂ
// ================================
function renderVariationName(row) {
  return Object.keys(row)
    .filter((k) => k.startsWith("attr_"))
    .map((k) => row[k])
    .join(" / ");
}

// ================================
// THÊM ATTRIBUTE
// ================================
function addAttribute() {
  attributes.value.push({ name: "", values: [] });
}

function removeAttribute(index) {
  attributes.value.splice(index, 1);
}

// ================================
// TẠO BIẾN THỂ (KHÔNG MẤT GIÁ)
// ================================
function generateVariations() {
  const attrList = attributes.value;
  const newCombos = [];

  function build(index, current) {
    if (index >= attrList.length) {
      newCombos.push({ ...current });
      return;
    }
    const attr = attrList[index];
    if (!attr.values.length) return;

    attr.values.forEach((v) => {
      build(index + 1, { ...current, ["attr_" + index]: v });
    });
  }

  build(0, {});

  const oldMap = new Map();

  variations.value.forEach((v) => {
    const key = JSON.stringify(
      Object.fromEntries(
        Object.entries(v).filter(([k]) => k.startsWith("attr_"))
      )
    );
    oldMap.set(key, v);
  });

  const merged = newCombos.map((combo) => {
    const key = JSON.stringify(combo);
    if (oldMap.has(key)) return { ...oldMap.get(key), ...combo };

    return {
      ...combo,
      price: 0,
      stock: 0,
      sku: Object.values(combo).join("-"),
      imageList: [],
    };
  });

  variations.value = merged;
}

// ================================
// XOÁ BIẾN THỂ
// ================================
function removeVariation(index) {
  variations.value.splice(index, 1);

  // nếu đang mở mục bị xoá → đóng lại
  if (openIndex.value === index) openIndex.value = null;
}
</script>