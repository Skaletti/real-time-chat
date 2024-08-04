<template>
  <el-tag :class="classTag" v-bind="$attrs">
    <span class="s-tag__content">
      <slot v-if="$slots.suffix" name="suffix" />
      <slot />
    </span>
  </el-tag>
</template>

<script lang="ts" setup>
import { computed } from 'vue'

type Props = {
  appearance?: 'primary' | 'secondary'
  size?: 'lg' | 'sm'
  disabled: boolean
}

const props = withDefaults(defineProps<Props>(), {
  appearance: 'primary',
  size: 'lg',
  disabled: false,
})

const classTag = computed(() => {
  return ['s-tag', `s-tag--${props.appearance}`, `s-tag--${props.size}`, { 'is-disabled': props.disabled }]
})
</script>

<style lang="scss" scoped>
.s-tag {
  --el-tag-bg-color: var(--color-primary);
  --el-tag-border-color: var(--color-primary);
  --el-tag-hover-color: var(--color-primary-white-30);
  --el-tag-text-color: var(--color-white);

  width: fit-content;
  font-family: $font-primary;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  padding: 5px;

  &__content {
    display: flex;
    align-items: center;
    gap: 2px;
  }

  :deep(.el-tag__close) {
    margin-left: 0;

    &:hover {
      color: inherit;
      background: inherit;
    }
  }

  &.is-disabled {
    --el-tag-bg-color: var(--color-black-white-90);
    --el-tag-border-color: var(--color-black-white-90);
    --el-tag-hover-color: var(--color-black-white-90);
    --el-tag-text-color: var(--color-white);

    :deep(.el-tag__close) {
      cursor: not-allowed;
    }
  }

  &.is-disabled + .s-tag--secondary {
    --el-tag-bg-color: var(--color-black-white-90);
    --el-tag-border-color: var(--color-black-white-90);
    --el-tag-hover-color: var(--color-black-white-90);
    --el-tag-text-color: var(--color-black-white-70);
  }

  &--secondary {
    --el-tag-bg-color: var(--color-white);
    --el-tag-border-color: var(--color-primary);
    --el-tag-hover-color: var(--color-primary-white-95);
    --el-tag-text-color: var(--color-primary);
  }

  &--lg {
    height: 32px;
  }

  &--sm {
    height: 24px;
  }
}
</style>
