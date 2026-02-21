<template>
  <div>
    <h3>Attributes</h3>
    <el-select v-model="selectedColors" multiple placeholder="Select colors">
      <el-option v-for="c in colors" :key="c" :label="c" :value="c" />
    </el-select>
    <el-select v-model="selectedSizes" multiple placeholder="Select sizes">
      <el-option v-for="s in sizes" :key="s" :label="s" :value="s" />
    </el-select>
    <el-button type="primary" @click="generateVariations">Generate Variations</el-button>

    <el-table :data="variations" style="width: 100%; margin-top: 20px;">
      <el-table-column prop="color" label="Color" width="100" />
      <el-table-column prop="size" label="Size" width="100" />
      <el-table-column label="Price" width="100">
        <template #default="scope">
          <el-input v-model="scope.row.price" size="small" />
        </template>
      </el-table-column>
      <el-table-column label="Stock" width="100">
        <template #default="scope">
          <el-input v-model="scope.row.stock" size="small" />
        </template>
      </el-table-column>
      <el-table-column label="SKU" width="120">
        <template #default="scope">
          <el-input v-model="scope.row.sku" size="small" />
        </template>
      </el-table-column>
      <el-table-column label="Image" width="120">
        <template #default="scope">
          <el-upload
            action="#"
            list-type="picture-card"
            :file-list="scope.row.imageList"
            :on-remove="(file) => removeImage(scope.row, file)"
            :on-change="(file) => addImage(scope.row, file)"
          >
            <i class="el-icon-plus"></i>
          </el-upload>
        </template>
      </el-table-column>
      <el-table-column label="Actions" width="100">
        <template #default="scope">
          <el-button type="danger" size="small" @click="removeVariation(scope.$index)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup>
import { ref } from "vue";

const colors = ["Red", "Blue", "Green"];
const sizes = ["S", "M", "L"];
const selectedColors = ref([]);
const selectedSizes = ref([]);
const variations = ref([]);

function generateVariations() {
  variations.value = [];
  selectedColors.value.forEach(color => {
    selectedSizes.value.forEach(size => {
      variations.value.push({
        color,
        size,
        price: 0,
        stock: 0,
        sku: `${color[0]}${size}`,
        imageList: [],
      });
    });
  });
}

function removeVariation(index) {
  variations.value.splice(index, 1);
}

function addImage(row, file) {
  row.imageList.push(file.file);
}

function removeImage(row, file) {
  row.imageList = row.imageList.filter(f => f !== file);
}
</script>