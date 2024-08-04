<template>
  <div class="container">
    <h1>Inputs</h1>
    <div class="inputs__text mb-36">
      <s-input
        v-model="inputValue"
        class="inputs__item"
        type="text"
        placeholder="Enter something"
        label="Outside text"
        label-position="outside"
        clearable
      >
        <template #prefix>
          <s-icon name="interface-error" class="text-xl" />
        </template>
      </s-input>
      <s-input
        v-model="inputValue"
        class="inputs__item"
        type="text"
        placeholder="Enter something"
        label="Inside text"
        label-position="inside"
        clearable
      >
        <template #prefix>
          <s-icon name="interface-error" class="text-xl" />
        </template>
      </s-input>
      <s-input v-model="inputValue" class="inputs__item" type="text" placeholder="Enter something" clearable />

      <s-input
        v-model="inputValue"
        class="inputs__item"
        type="text"
        size="sm"
        placeholder="Enter something"
        clearable
      />

      <s-input v-model="inputValue" class="inputs__item" type="text" placeholder="Enter something" disabled />

      <s-input v-model="inputValue" class="inputs__item" type="text" placeholder="Read only" readonly />
    </div>
    <div class="inputs__text mb-36">
      <h3>Password</h3>
      <s-input v-model="inputValue" class="mb-12" type="password" placeholder="Enter password" clearable />
      <s-input v-model="inputValue" class="mb-12" type="password" size="sm" placeholder="Enter password">
        <template #prefix>
          <s-icon name="interface-error" class="text-xl" />
        </template>
      </s-input>

      <s-input
        v-model="inputValue"
        class="mb-12"
        type="password"
        placeholder="Enter password"
        label="Outside text"
        label-position="outside"
        clearable
      />
      <s-input
        v-model="inputValue"
        class="mb-12"
        type="password"
        placeholder="Enter password"
        label="Inside text"
        label-position="inside"
        clearable
      >
        <template #prefix>
          <s-icon name="interface-error" class="text-xl" />
        </template>
      </s-input>

      <s-input
        v-model="inputValue"
        class="mb-12"
        type="password"
        placeholder="Enter password"
        label="Outside text"
        label-position="outside"
        disabled
      />
    </div>
    <div class="inputs__text mb-36">
      <h3>Textarea</h3>
      <s-input
        v-model="inputValue"
        class="mb-12"
        type="textarea"
        placeholder="Enter text"
        label="Outside text"
        label-position="outside"
        clearable
      >
        <template #textareaIcon>
          <s-icon name="interface-error" class="text-xl" />
        </template>
      </s-input>
      <s-input
        v-model="inputValue"
        class="mb-12"
        type="textarea"
        placeholder="Enter text"
        label="Inside text"
        label-position="inside"
        clearable
      />
      <s-input
        v-model="inputValue"
        class="mb-12"
        type="textarea"
        placeholder="Enter text"
        label="Inside text"
        label-position="inside"
        clearable
      >
        <template #textareaIcon>
          <s-icon name="interface-error" class="text-xl" />
        </template>
      </s-input>
      <s-input v-model="inputValue" class="mb-12" type="textarea" placeholder="Enter text" clearable>
        <template #textareaIcon>
          <s-icon name="interface-error" class="text-xl" />
        </template>
      </s-input>
      <s-input v-model="inputValue" class="mb-12" type="textarea" placeholder="Enter text" clearable />
      <s-input v-model="inputValue" class="mb-12" type="textarea" placeholder="Enter text" disabled />
    </div>
    <s-button appearance="link" as="router-link" class="uikit" :to="ROUTE_NAMES.uikit">Назад</s-button>
  </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAMES } from 'shared/constants'
import { SButton, SIcon } from 'shared/ui'
import SInput from 'shared/ui/SInput'
import { ref } from 'vue'

const inputValue = ref('')
</script>

<style lang="scss" scoped>
.inputs {
  &__text {
    max-width: 270px;
  }

  &__item {
    margin-bottom: 24px;
  }
}
</style>
