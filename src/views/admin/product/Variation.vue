<template>
  <div>
    <h2 class="font-bold mb-2 text-lg">Thuộc tính</h2>

    <!-- Danh sách thuộc tính -->
    <div v-for="(attr, i) in attributesActive" :key="i" class="mb-2 flex items-center gap-2">
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

    <!-- Nút thêm thuộc tính và tạo biến thể -->
    <div class="flex mb-4 mt-3">
      <el-button type="success" @click="addAttribute">
        <el-icon class="mr-1"><CirclePlus /></el-icon>
        Thêm thuộc tính
      </el-button>

      <el-button type="primary" @click="generateVariations">
        Tạo biến thể
      </el-button>
    </div>

    <!-- Accordion hiển thị biến thể -->
    <el-collapse v-model="activeNames" accordion>
      <el-collapse-item
        v-for="v in variations"
        :key="v.sku"
        :name="v.sku"
      >
        <template #title>
          <div class="flex justify-between w-full">
            <div class="font-bold"><span class="">{{ v.attributes.map(a => a.value_name).join(' / ') }}</span></div>
            <div>SKU: {{ v.sku }}</div>
          </div>
        </template>

        <div class="p-3 bg-gray-50 rounded">

          <div>
            <!-- Hình ảnh -->
            <el-upload
              v-model:file-list="v.images"
              class="!w-auto"
              :limit="1"
            >
              <el-button size="small" class="!w-auto">Upload</el-button>
            </el-upload>
          </div>

          <div class="grid grid-cols-3 gap-x-3">
            <!-- SKU -->
            <div class="">
              <h3 class="text-xs font-bold">Mã sản phẩm:</h3>
              <el-input v-model="v.sku" placeholder="SKU" class="mt-2"/>
            </div>
            
            <!-- Price -->
            <div class="">
              <h3 class="text-xs font-bold">Giá</h3>
              <el-input-number v-model="v.price" :min="0" :controls="false" placeholder="Giá" class="mt-2 !w-full"/>
            </div>

            <div class="">
              <h3 class="text-xs font-bold">Giá khuyến mãi</h3>
              <el-input-number v-model="v.price" :min="0" :controls="false" placeholder="Giá" class="mt-2 !w-full"/>
            </div>
          </div>

          <div>
            <div class="mt-4">
                <!-- Note -->
                <h3 class="text-xs font-bold">Mô tả</h3>
                <el-input v-model="v.note" type="textarea" placeholder="Ghi chú" class="mt-2 !w-full !text-xs"/>
            </div>
            <div>
                <el-switch
                v-model="v.isStock"
                active-text="Quản lý kho hàng"
                size="small"
                class="!mt-3"
              />
              <div 
              class="border border-gray-200 p-3 rounded-xl mt-3"
              v-if="v.isStock == true"
              >
                <div class="">
                  <h3 class="text-xs font-bold">Số lượng kho:</h3>
                  <el-input-number v-model="v.price" :min="0" :controls="false" placeholder="Số lượng kho" class="mt-2 !w-full"/>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { DeleteFilled, CirclePlus } from "@element-plus/icons-vue";

// Danh sách thuộc tính
const attributes = ref([
  { id: 1, title: "Color", attr: [ { id: 1, title:"Red" }, { id: 2, title:"Blue" }, { id: 3, title:"Green" } ] },
  { id: 2, title: "Size", attr: [ { id: 4, title:"S" }, { id: 5, title:"M" }, { id: 6, title:"L" } ] },
  { id: 3, title: "Material", attr: [ { id: 7, title:"Cotton" }, { id: 8, title:"Silk" } ] },
]);

// Thuộc tính đã chọn
const attributesActive = ref([]);

// Nút add/remove
const addAttribute = () => attributesActive.value.push({ id:null, attr:[] });
const removeAttribute = (index) => attributesActive.value.splice(index,1);

// Các id đã chọn để disable option
const selectedIds = computed(() => attributesActive.value.map(a=>a.id).filter(id=>id!==null));

// Variations
const variations = ref([]);
const activeNames = ref([]);

// Generate variations chuẩn, giữ dữ liệu cũ
function generateVariations() {
  const oldMap = new Map();

  variations.value.forEach(v => oldMap.set(v.sku, v));

  const newVariations = [];

  function build(index, currentAttrs) {
    if(index >= attributesActive.value.length){
      const sku = currentAttrs.map(a => a.value_id).join("-");
      const oldData = oldMap.get(sku);

      newVariations.push({
        sku,
        price: oldData?.price ?? 0,
        stock: oldData?.stock ?? 0,
        isStock: oldData?.is_stock ?? false,
        note: oldData?.note ?? "",
        images: oldData?.images ?? [],
        attributes: currentAttrs
      });
      return;
    }

    const attrItem = attributesActive.value[index];
    if(!attrItem.attr.length) return;

    attrItem.attr.forEach(valueId => {
      // Lấy thông tin đầy đủ từ attributes gốc
      const valueData = attributes.value
        .find(a => a.id === attrItem.id)?.attr
        .find(v => v.id === valueId) || { id: valueId, title: '' };

      const nextAttrs = [
        ...currentAttrs,
        { attribute_id: attrItem.id, value_id: valueData.id, value_name: valueData.title }
      ];

      build(index + 1, nextAttrs);
    });
  }

  build(0, []);
  variations.value = newVariations;
  activeNames.value = variations.value.map(v => v.sku);
}

// Khởi tạo lần đầu
// generateVariations();
</script>

<style scoped>
.el-collapse-item__header {
  font-weight: 600;
}
:deep(.el-input-number.is-center .el-input__inner ){
  text-align: left !important;
}
</style>