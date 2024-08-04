<template>
  <el-tooltip
    ref="elTooltipRef"
    popper-class="s-tooltip"
    v-bind="$attrs"
    :popper-options="{
      modifiers: [{ name: 'offset', options: { offset: [props.offset.x, props.offset.y] } }],
    }"
  >
    <template #content>
      <div class="s-tooltip__content">
        <s-icon v-if="props.iconName" class="text-xl" :name="props.iconName" />
        <slot name="content" />
      </div>
    </template>
    <div class="s-tooltip-trigger">
      <slot />
    </div>
  </el-tooltip>
</template>

<script lang="ts" setup>
import { SIcon } from 'shared/ui'
import { tooltipOffsetType } from 'shared/ui/STooltip/types'

type Props = {
  iconName?: string
  offset?: tooltipOffsetType
}

const props = withDefaults(defineProps<Props>(), {
  iconName: '',
  offset: () => ({
    x: 41,
    y: 8,
  }),
})
</script>

<style lang="scss" scoped>
.s-tooltip {
  --el-text-color-primary: var(--color-black-white-20);
  --el-popper-border-radius: 8px;

  &-trigger {
    width: fit-content;
  }

  &__content {
    display: flex;
    align-items: center;
    border-radius: 8px;
    font-family: $font-primary;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    gap: 4px;
  }
}
</style>
