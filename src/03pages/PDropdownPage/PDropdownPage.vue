<template>
  <div class="container">
    <h1>Dropdown</h1>
    <s-treeselect v-model="valueStrictly" class="mb-16" :data="PDropdownPageMock" />
    <s-autocomplete
      v-model="state1"
      :fetch-suggestions="querySearch"
      clearable
      placeholder="Please Input"
      @select="handleSelect"
    />
  </div>
</template>

<script lang="ts" setup>
import { PDropdownPageMock } from 'pages/PDropdownPage/mock'
import { STreeselect, SAutocomplete } from 'shared/ui'
import { onMounted, ref } from 'vue'

interface RestaurantItem {
  value: string
  link: string
}

const state1 = ref('')

const valueStrictly = ref()

const restaurants = ref<RestaurantItem[]>([])

const querySearch = (queryString: string, cb: any) => {
  const results = queryString ? restaurants.value.filter(createFilter(queryString)) : restaurants.value

  cb(results)
}

const createFilter = (queryString: string) => {
  return (restaurant: RestaurantItem) => {
    return restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
  }
}

const loadAll = () => {
  return [
    { value: 'vue', link: 'https://github.com/vuejs/vue' },
    { value: 'element', link: 'https://github.com/ElemeFE/element' },
    { value: 'cooking', link: 'https://github.com/ElemeFE/cooking' },
    { value: 'mint-ui', link: 'https://github.com/ElemeFE/mint-ui' },
    { value: 'vuex', link: 'https://github.com/vuejs/vuex' },
    { value: 'vue-router', link: 'https://github.com/vuejs/vue-router' },
    { value: 'babel', link: 'https://github.com/babel/babel' },
  ]
}

const handleSelect = (item: RestaurantItem) => {
  console.log(item)
}

onMounted(() => {
  restaurants.value = loadAll()
})
</script>

<style lang="scss" scoped></style>
