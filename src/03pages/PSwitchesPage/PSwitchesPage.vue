<template>
  <div class="container">
    <s-checkbox>
      <label>Label</label>
    </s-checkbox>
    <s-checkbox>
      <label>Label</label>
      <span>Small text</span>
    </s-checkbox>
    <s-checkbox checked disabled>
      <label>Label</label>
    </s-checkbox>

    <el-radio-group v-model="radio" class="mr-8 mt-8">
      <s-radio v-model="radio" class="mb-4" value="selected and disabled" disabled>
        label4 selected and disabled
      </s-radio>
    </el-radio-group>

    <el-radio-group v-model="radio2">
      <s-radio v-model="radio2" class="mb-4" value="1"> label </s-radio>
      <s-radio v-model="radio2" class="mb-4" value="2"> <label>Label2</label> <span>Small text</span> </s-radio>
      <s-radio v-model="radio2" class="mb-4" value="3"> label3 </s-radio>
    </el-radio-group>

    <div class="toggle">
      <s-toggle v-model="toggleValue1"> <label>Label1</label> <span>Small text</span></s-toggle>
      <s-toggle v-model="toggleValue2"> <label>Label2</label> <span>Small text</span></s-toggle>
      <s-toggle v-model="toggleValue3" disabled> <label>Label2</label> <span>Small text</span></s-toggle>
    </div>

    <s-button appearance="link" as="router-link" class="uikit" :to="ROUTE_NAMES.uikit">Назад</s-button>
  </div>
</template>

<script setup lang="ts">
import { ROUTE_NAMES } from 'shared/constants'
import { SRadio, SCheckbox, SButton, SToggle } from 'shared/ui'
import { ref } from 'vue'

const radio = ref('selected and disabled')
const radio2 = ref('1')
const toggleValue1 = ref(true)
const toggleValue2 = ref(false)
const toggleValue3 = ref(false)
</script>

<style scoped></style>
