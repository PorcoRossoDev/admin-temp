<template>
  <div>
    <h2 class="font-bold mb-2">Thuộc tính</h2>

    <!-- Danh sách thuộc tính -->
    <div 
    v-for="(attr, i) in attributesActive" 
    :key="i"
    class="mb-2 flex items-center gap-2">
      <el-select v-model="attr.id" placeholder="Tên thuộc tính" class="!w-1/4">
        <el-option
          v-for="item in attributes"
          :key="item.id"
          :label="item.title"
          :value="item.id"
          :disabled="selectedIds.includes(item.id) && attr.id !== item.id"
        />
      </el-select>

      <el-select v-model="attr.attr" multiple placeholder="Giá trị" class="!w-3/4">
        <el-option
          v-for="val in (attributes.find(a => a.id === attr.id)?.attr || [])"
          :key="val.id"
          :label="val.title"
          :value="val.id"
        />
      </el-select>

      <el-button type="danger" @click="removeAttribute(i)">
        <el-icon><DeleteFilled /></el-icon>
      </el-button>
    </div>

    <div><pre class="p-3 bg-gray-200">{{ variations }}</pre></div>

    <div>
      <el-button type="success" @click="addAttribute">
        <el-icon class="mr-1"><CirclePlus /></el-icon>
        Thêm thuộc tính
      </el-button>

      <el-button type="primary" class="ml-2" @click="generateVariations">
        Tạo biến thể
      </el-button>
    </div>

    <!-- Danh sách biến thể -->
    <!-- Accordion cho từng biến thể -->
    <el-collapse v-model="activeNames">
      <el-collapse-item
        v-for="(v, i) in variations"
        :key="v.sku"
        :name="v.sku"
      >
        <template #title>
          <div class="flex justify-between w-full">
            <div>
              {{ v.attributes.map(a => a.value_name).join(" / ") }}
            </div>
            <div>SKU: {{ v.sku }}</div>
          </div>
        </template>

        <!-- Form chi tiết của từng biến thể -->
        <div class="p-3 space-y-3 bg-gray-50 rounded">
          <el-input
            v-model="v.sku"
            placeholder="SKU"
            class="!w-1/2"
          />

          <el-input-number
            v-model="v.price"
            placeholder="Giá"
            :min="0"
            class="!w-1/3"
          />

          <el-input-number
            v-model="v.stock"
            placeholder="Kho"
            :min="0"
            class="!w-1/3"
          />

          <el-input
            v-model="v.note"
            type="textarea"
            placeholder="Ghi chú"
          />
        </div>
      </el-collapse-item>
    </el-collapse>

    <!-- Nút tạo lại biến thể -->
    <div class="mt-4 flex gap-2">
      <el-button type="success" @click="generateVariations">
        Tạo lại biến thể
      </el-button>
    </div>

  </div>
</template>

<script setup>
import { ref, watch, computed } from "vue";
import { DeleteFilled, CirclePlus } from "@element-plus/icons-vue";


// ================================
// THÊM ATTRIBUTE:
// 1. Chọn thuộc tính từ danh sách (select)
// 2. Chọn giá trị từ danh sách (select multiple)
// 3. Xóa thuộc tính
// ================================

// Danh sách thuộc tính
const attributes = ref([
  {
    id: 1,
    title: "Color",
    attr: [
      {
        id: 1,
        title: "Red",
      },
      {
        id: 2,
        title: "Blue",
      },
      {
        id: 3,
        title: "Green",
      }
    ],
  },
  {
    id: 2,
    title: "Size",
    attr: [
      {
        id: 4,
        title: "S",
      },
      {
        id: 5,
        title: "M",
      },
      {
        id: 6,
        title: "L",
      }
    ]
  },
  {
    id: 3,
    title: "Material",
    attr: [
      {
        id: 7,
        title: "Cotton",
      },
      {
        id: 8,
        title: "Silk",
      }
    ]
  }
]);

// Thuộc tính đã chọn
const attributesActive = ref([]);

// Thêm thuộc tính
const addAttribute = () => {
  attributesActive.value.push({
    id: null,
    attr: [],
  });
}

// Xóa thuộc tính
const removeAttribute = (index) => {
  attributesActive.value.splice(index, 1);
}

const selectedIds = computed(() => {
  return attributesActive.value
    .map(item => item.id)
    .filter(id => id !== null);
});

// ================================
// Tạo VARIATIONS: Từ thuộc tính đã chọn
// ================================
const variations = ref([]);

function generateVariations() {
  const attrList = attributesActive.value; // [{id, slug, name, attr: [{id,name,slug}]}]
  const newVariations = [];

  // Lưu map dữ liệu cũ theo SKU
  const oldMap = new Map();
  variations.value.forEach(v => oldMap.set(v.sku, v));

  function build(index, currentAttrs) {
    if (index >= attrList.length) {
      // Tạo SKU từ value_slug theo thứ tự thuộc tính
      const sku = currentAttrs.map(a => a.value_slug).join("-");

      // Merge dữ liệu cũ nếu có
      const oldData = oldMap.get(sku);

      newVariations.push({
        sku,
        price: oldData?.price ?? 0,
        stock: oldData?.stock ?? 0,
        note: oldData?.note ?? "",
        attributes: currentAttrs
      });

      return;
    }

    const attrItem = attrList[index];
    if (!attrItem.attr.length) return;

    attrItem.attr.forEach(value => {
      // value = {id, name, slug}
      const nextAttrs = [
        ...currentAttrs,
        {
          attribute_id: attrItem.id,
          attribute_slug: attrItem.slug,
          value_id: value.id,
          value_slug: value.slug,
          value_name: value.name
        }
      ];
      build(index + 1, nextAttrs);
    });
  }

  build(0, []);
  variations.value = newVariations;
}

// ================================
// Hiển thị các biến thể theo thuộc tính đã chọn
// ================================

</script>