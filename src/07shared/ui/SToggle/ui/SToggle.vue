<template>
  <div class="s-toggle">
    <el-switch v-bind="$attrs" />
    <div class="s-toggle__label">
      <slot />
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.s-toggle {
  --switch--color-disabled: var(--color-black-white-90);

  display: flex;
  align-items: center;
  gap: 8px;

  &__label {
    display: flex;
    flex-direction: column;
    font-family: $font-primary;
    font-weight: 400;
    line-height: var(--line-height--primary);
    white-space: normal;
    text-align: start;

    :deep(label) {
      color: var(--el-radio-input-label-color);
    }

    :deep(span) {
      font-size: 12px;
      line-height: 18px;
      color: var(--color-black-white-40);
    }
  }

  .el-switch {
    --el-switch-on-color: var(--color-primary);
    --el-switch-off-color: var(--color-primary-white-80);

    &.is-disabled {
      --el-switch-on-color: var(--switch--color-disabled);
      --el-switch-off-color: var(--switch--color-disabled);

      :deep(.el-switch__core) {
        &:hover {
          border-color: var(--switch--color-disabled);
          background: var(--switch--color-disabled);
        }
      }
    }

    &:not(&.is-disabled) {
      &:not(&.is-checked) {
        :deep(.el-switch__core) {
          &:hover {
            border-color: var(--color-primary-white-50);
            background: var(--color-primary-white-50);
          }
        }
      }
    }
  }
}
</style>
