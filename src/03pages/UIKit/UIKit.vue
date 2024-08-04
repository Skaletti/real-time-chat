<template>
  <div class="container">
    <div class="uikit__colors mt-12">
      <h3 class="uikit">Colors</h3>
      <div v-for="(colorsGroup, index) in colorsList" :key="index" class="colors__block">
        <div
          v-for="color in colorsGroup"
          :key="color"
          class="colors__block-item mr-4"
          :style="{ backgroundColor: `var(--color-${color})` }"
        />
      </div>
    </div>

    <div class="uikit__text mt-12">
      <h1 class="uikit mb-20" @click="showConsoleLogHandler">Heading 1</h1>
      <h2 class="uikit mb-20" @click="showConsoleLogHandler">Heading 2</h2>
      <h3 class="uikit mb-20" @click="showConsoleLogHandler">Heading 3</h3>
      <h4 class="uikit mb-20" @click="showConsoleLogHandler">Heading 4</h4>
      <h5 class="uikit mb-20" @click="showConsoleLogHandler">Heading 5</h5>
      <p class="uikit body-xl mb-20" @click="showConsoleLogHandler">Body XL</p>
      <p class="uikit body-l mb-20" @click="showConsoleLogHandler">Body L</p>
      <p class="uikit body-m mb-20" @click="showConsoleLogHandler">Body M</p>
      <p class="uikit body-s mb-20" @click="showConsoleLogHandler">Body S</p>
    </div>

    <s-button appearance="link" as="router-link" class="uikit" :to="ROUTE_NAMES.uikitButtons">Buttons</s-button>
    <s-button appearance="link" as="router-link" class="uikit" :to="ROUTE_NAMES.switches">Switches</s-button>
    <s-button appearance="link" as="router-link" class="uikit" :to="ROUTE_NAMES.uikitTags">Tags</s-button>
    <s-button appearance="link" as="router-link" class="uikit" :to="ROUTE_NAMES.uikitInputs">Inputs</s-button>
    <s-button appearance="link" as="router-link" class="uikit" :to="ROUTE_NAMES.uikitDatePicker">Date Picker</s-button>
    <s-button appearance="link" as="router-link" class="uikit" :to="ROUTE_NAMES.uikitForm">Forms</s-button>
    <div class="uikit__links pb-16">
      <s-link class="mr-12" :to="ROUTE_NAMES.uikitButtons"> Buttons </s-link>
      <s-link class="mr-12" :to="ROUTE_NAMES.switches">
        <template #icon>
          <s-icon name="interface-favorite" class="text-xl" />
        </template>
        Switches
      </s-link>
      <s-link class="mr-12" :to="ROUTE_NAMES.uikitDropdown" line>
        <template #icon>
          <s-icon name="interface-favorite" class="text-xl" />
        </template>
        Dropdown
      </s-link>
      <s-link class="mr-12" :to="ROUTE_NAMES.uikitTags" line> Tags </s-link>
    </div>

    <div class="uikit__pagination mt-12">
      <s-pagination :page-count="25" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAMES } from 'shared/constants'
import { SButton, SIcon, SPagination, SLink } from 'shared/ui'

import { mocksColors } from './mocks'

const showConsoleLogHandler = (): void => {
  console.log('Preset!')
}

const colorsList = mocksColors
</script>

<style lang="scss" scoped>
.uikit {
  font-family: $font-primary;
  color: var(--color-primary);

  &__links {
    display: flex;
    align-items: center;
  }
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
