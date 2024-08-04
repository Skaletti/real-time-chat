<template>
  <div class="container">
    <div class="tags">
      <s-tag appearance="primary" class="mb-4">
        <s-icon name="interface-error" class="text-xl" />
        Tag
      </s-tag>
      <s-tag appearance="secondary" class="mb-4">
        <s-icon name="interface-error" class="text-xl" />
        Tag
      </s-tag>
      <s-tag appearance="primary" size="sm" class="mb-4">Tag</s-tag>
      <s-tag appearance="secondary" size="sm" class="mb-4">Tag</s-tag>

      <s-tag appearance="primary" closable class="mb-4">
        <s-icon name="interface-error" class="text-xl" />
        Tag
      </s-tag>
      <s-tag appearance="secondary" closable class="mb-4">
        <s-icon name="interface-error" class="text-xl" />
        Tag
      </s-tag>
      <s-tag appearance="primary" size="sm" closable class="mb-4">Tag</s-tag>
      <s-tag appearance="secondary" size="sm" closable class="mb-4">Tag</s-tag>

      <s-tag appearance="primary" closable class="mb-4" disabled>
        <s-icon name="interface-error" class="text-xl" />
        Tag
      </s-tag>
      <s-tag appearance="secondary" closable class="mb-4" disabled>
        <s-icon name="interface-error" class="text-xl" />
        Tag
      </s-tag>
      <s-tooltip placement="bottom-start" icon-name="interface-error">
        <template #content> Tooltip </template>
        <s-tag appearance="primary" size="sm" closable class="mb-4" disabled>Tag with tooltip</s-tag>
      </s-tooltip>
      <s-tag appearance="secondary" size="sm" closable class="mb-4" disabled>Tag</s-tag>
    </div>
    <s-button appearance="link" as="router-link" class="uikit" :to="ROUTE_NAMES.uikit">Назад</s-button>
  </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAMES } from 'shared/constants'
import { SButton, SIcon, STag } from 'shared/ui'
import STooltip from 'shared/ui/STooltip'
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  flex-direction: column;
}
</style>
