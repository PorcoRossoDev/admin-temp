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

    <div class="variations" style="display: flex; flex-wrap: wrap; gap: 15px; margin-top: 20px;">
      <el-card v-for="(v, index) in variations" :key="index" style="width: 200px;">
        <div>
          <strong>{{ v.color }} / {{ v.size }}</strong>
        </div>
        <el-upload
          action="#"
          list-type="picture-card"
          :file-list="v.imageList"
          :on-remove="(file) => removeImage(v, file)"
          :on-change="(file) => addImage(v, file)"
        >
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-input v-model="v.price" placeholder="Price" style="margin-top: 10px;" />
        <el-input v-model="v.stock" placeholder="Stock" style="margin-top: 5px;" />
        <el-input v-model="v.sku" placeholder="SKU" style="margin-top: 5px;" />
        <el-button type="danger" size="small" @click="removeVariation(index)" style="margin-top: 10px;">Delete</el-button>
      </el-card>
    </div>
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