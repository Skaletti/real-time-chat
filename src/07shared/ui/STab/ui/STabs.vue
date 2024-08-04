<template>
  <div class="s-tabs__wrapper">
    <el-tabs v-model="modelValue" v-bind="$attrs" :class="tabsClasses">
      <slot />
    </el-tabs>
  </div>
</template>

<script lang="ts" setup>
import { computed, provide } from 'vue'

type Props = {
  appearance?: 'primary' | 'secondary'
  size?: 'lg' | 'sm'
}

const props = withDefaults(defineProps<Props>(), {
  appearance: 'primary',
  size: 'lg',
})

const modelValue = defineModel<string>()

const tabsClasses = computed(() => {
  return ['s-tabs', `s-tabs--${props.appearance}`, `s-tabs--${props.size}`]
})

provide('activeTab', modelValue)
</script>

<style lang="scss" scoped>
.s-tabs {
  --el-color-primary: var(--color-primary);
  --el-text-color-primary: var(--color-black);
  --el-tabs-header-height: 64px;

  &__wrapper {
    width: 100%;
    min-height: var(--el-header-height);
    position: relative;
    display: flex;
    align-items: center;
    white-space: nowrap;
    overflow-x: auto;
    overflow-y: hidden;

    &::-webkit-scrollbar {
      display: none;
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  }

  :deep(.el-tabs__header) {
    max-width: fit-content;
    border-radius: 16px;
    padding: 4px;
  }

  :deep(.el-tabs__item) {
    border-radius: 12px;
    font-size: 16px;
    line-height: 24px;
    transition: color 0.2s;
    padding: 16px 12px;

    &.is-top {
      padding: 16px 12px;
    }

    &.is-active {
      font-weight: 400;
      background-color: var(--color-white);
    }
  }

  :deep(.el-tabs__nav-wrap) {
    padding: 0;

    &::after {
      display: none;
    }
  }

  :deep(.el-tabs__nav-prev) {
    display: none;
  }

  :deep(.el-tabs__nav-next) {
    display: none;
  }

  :deep(.el-tabs__content) {
    overflow: visible;
  }

  &--secondary {
    :deep(.el-tabs__header) {
      background-color: var(--color-primary-white-95);
    }

    :deep(.el-tabs__active-bar) {
      display: none;
    }

    :deep(.el-tabs__item) {
      &:hover {
        color: var(--color-primary-white-30);
        background-color: var(--color-white-50);
      }

      &.is-top {
        padding: 16px 12px;
      }

      &.is-active {
        font-weight: 400;
        background-color: var(--color-white);
      }
    }
  }

  &--sm {
    --el-tabs-header-height: 44px;
  }
}
</style>
