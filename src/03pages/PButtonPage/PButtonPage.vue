<template>
  <div class="container">
    <div class="buttons">
      <div class="buttons__block mb-4">
        <s-button class="mr-4" appearance="primary" size="lg"> Button </s-button>
        <s-button class="mr-4" appearance="primary" size="md"> Button </s-button>
        <s-button class="mr-4" appearance="primary" size="sm"> Button </s-button>
        <s-button class="mr-4" appearance="primary" is-loading size="lg"> Button </s-button>
        <s-button appearance="primary" size="lg" disabled> Button </s-button>
      </div>
      <div class="buttons__block mb-4">
        <s-button class="mr-4" appearance="primary" size="lg">
          <s-icon name="interface-add" class="text-xl" />
          Button
        </s-button>
        <s-button class="mr-4" appearance="primary" size="md">
          <s-icon name="interface-add" />
          Button
        </s-button>
        <s-button class="mr-4" appearance="primary" size="sm">
          <s-icon name="interface-add" />
          Button
        </s-button>
        <s-button class="mr-4" appearance="primary" is-loading size="lg">
          <s-icon name="interface-add" />
          Button
        </s-button>
        <s-button appearance="primary" size="lg" disabled> <s-icon name="interface-add" /> Button </s-button>
      </div>
      <div class="buttons__block mb-4">
        <s-button class="mr-4" appearance="secondary" size="lg"> Button </s-button>
        <s-button class="mr-4" appearance="secondary" size="md"> Button </s-button>
        <s-button class="mr-4" appearance="secondary" size="sm"> Button </s-button>
        <s-button class="mr-4" appearance="secondary" is-loading size="lg"> Button </s-button>
        <s-button appearance="secondary" size="lg" disabled> Button </s-button>
      </div>
      <div class="buttons__block mb-4">
        <s-button class="mr-4" appearance="tertiary" size="lg"> Button </s-button>
        <s-button class="mr-4" appearance="tertiary" size="md"> Button </s-button>
        <s-button class="mr-4" appearance="tertiary" size="sm"> Button </s-button>
        <s-button class="mr-4" appearance="tertiary" is-loading size="lg"> Button </s-button>
        <s-button appearance="tertiary" size="lg" disabled> Button </s-button>
      </div>
      <div class="buttons__block">
        <s-button class="mr-4" appearance="link" size="lg"> Button </s-button>
        <s-button class="mr-4" appearance="link" size="md"> Button </s-button>
        <s-button class="mr-4" appearance="link" size="sm"> Button </s-button>
        <s-button class="mr-4" appearance="link" is-loading size="lg"> Button </s-button>
        <s-button appearance="link" size="lg" disabled> Button </s-button>
      </div>
    </div>
    <s-button appearance="link" as="router-link" class="uikit mt-12" :to="ROUTE_NAMES.uikit">Назад</s-button>
  </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAMES } from 'shared/constants'
import { SButton, SIcon } from 'shared/ui'
</script>

<style lang="scss" scoped>
.uikit {
  font-family: $font-primary;
  color: var(--color-primary);
}

.colors {
  display: flex;
  flex-direction: column;

  &__block {
    display: flex;

    &-item {
      width: 150px;
      height: 50px;
      box-shadow: 0 2px 4px rgb(0 0 0 / 0.1);
    }
  }
}

.buttons {
  &__block {
    display: flex;
  }
}
</style>
