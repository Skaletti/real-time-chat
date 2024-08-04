<template>
  <el-tree-select
    :v-bind="$attrs"
    multiple
    :render-after-expand="false"
    show-checkbox
    class="s-tree-select"
    popper-class="s-tree-select"
    :popper-options="{
      modifiers: [{ name: 'offset', options: { offset: [0, 10] } }],
    }"
  />
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped></style>
