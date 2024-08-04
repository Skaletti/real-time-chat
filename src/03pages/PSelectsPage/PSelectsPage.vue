<template>
  <div class="container">
    <h1>Selects</h1>
    <div class="selects">
      <s-select v-model="value1" label="Outside" label-position="outside" class="mb-16">
        <template #prefix>
          <s-icon name="interface-error" class="text-xl" />
        </template>
        <s-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </s-select>

      <s-select v-model="value1" label="Inside" label-position="inside" class="mb-16">
        <s-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </s-select>

      <s-select v-model="value1" label="Inside" label-position="inside" class="mb-16">
        <template #prefix>
          <s-icon name="interface-error" class="text-xl" />
        </template>
        <s-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </s-select>

      <s-select v-model="value1" label="Outside" label-position="outside" size="sm" class="mb-16">
        <s-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </s-select>
      <s-select v-model="value1" label="Readonly" label-position="outside" size="sm" class="mb-16" readonly>
        <s-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </s-select>
      <s-select v-model="value1" label="Outside" label-position="outside" size="sm" class="mb-16" disabled>
        <template #prefix>
          <s-icon name="interface-error" class="text-xl" />
        </template>
        <s-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </s-select>
      <s-select v-model="value2" label="multi-select" multiple collapse-tags placeholder="Select" class="mb-16">
        <s-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </s-select>
      <s-select
        v-model="value2"
        label="multi-select small"
        multiple
        collapse-tags
        placeholder="Select"
        size="sm"
        class="mb-16"
      >
        <s-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value" />
      </s-select>
      <s-treeselect v-model="value3" :data="data" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { SIcon, STreeselect } from 'shared/ui'
import SOption from 'shared/ui/SOption'
import SSelect from 'shared/ui/SSelect'
import { ref } from 'vue'

const value1 = ref([])
const value2 = ref([])
const value3 = ref([])
const options = [
  {
    value: 'Option1',
    label: 'Option1',
  },
  {
    value: 'Option2',
    label: 'Option2',
  },
  {
    value: 'Option3',
    label: 'Option3',
  },
  {
    value: 'Option4',
    label: 'Option4',
  },
  {
    value: 'Option5',
    label: 'Option5',
  },
  {
    value: 'Option6',
    label: 'Option6',
  },
  {
    value: 'Option7',
    label: 'Option7',
  },
  {
    value: 'Option8',
    label: 'Option8',
  },
  {
    value: 'Option9',
    label: 'Option9',
  },
]

const data = [
  {
    value: '1',
    label: 'Level one 1',
    children: [
      {
        value: '1-1',
        label: 'Level two 1-1',
        children: [
          {
            value: '1-1-1',
            label: 'Level three 1-1-1',
          },
        ],
      },
    ],
  },
  {
    value: '2',
    label: 'Level one 2',
    children: [
      {
        value: '2-1',
        label: 'Level two 2-1',
        children: [
          {
            value: '2-1-1',
            label: 'Level three 2-1-1',
            disabled: true,
          },
        ],
      },
      {
        value: '2-2',
        label: 'Level two 2-2',
        children: [
          {
            value: '2-2-1',
            label: 'Level three 2-2-1',
          },
        ],
      },
    ],
  },
  {
    value: '3',
    label: 'Level one 3',
    children: [
      {
        value: '3-1',
        label: 'Level two 3-1',
        children: [
          {
            value: '3-1-1',
            label: 'Level three 3-1-1',
          },
        ],
      },
      {
        value: '3-2',
        label: 'Level two 3-2',
        children: [
          {
            value: '3-2-1',
            label: 'Level three 3-2-1',
          },
        ],
      },
    ],
  },
]
</script>

<style lang="scss" scoped>
.selects {
  display: flex;
  flex-direction: column;
}
</style>
