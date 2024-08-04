<template>
  <el-tab-pane v-bind="$attrs" :name="props.label" class="s-tab-pane">
    <template #label>
      <s-icon v-if="props.iconName" :name="props.iconName" class="s-tab-pane__icon text-xl" />

      <span>{{ props.label }}</span>
    </template>

    <slot v-if="activeTab === props.label" />
  </el-tab-pane>
</template>

<script lang="ts" setup>
import { SIcon } from 'shared/ui'
import { inject, Ref } from 'vue'

type Props = {
  label?: string
  iconName?: string
}

const props = defineProps<Props>()

const activeTab = inject<Ref<string>>('activeTab')
</script>

<style lang="scss" scoped>
.s-tab-pane {
  &__icon {
    margin-right: 6px;
  }
}
</style>
