<template>
  <div class="container">
    <h1>Date Picker</h1>
    <s-date-picker
      v-model="value1"
      class="date-picker"
      label="date-picker"
      type="date"
      placeholder="Text"
      :disabled-date="disabledWeekendDate"
    />
    <s-date-picker
      v-model="value1"
      class="date-picker"
      label="date-picker"
      type="date"
      size="sm"
      placeholder="Text"
      :disabled-date="disabledWeekendDate"
    />
    <s-date-picker
      v-model="value1"
      class="date-picker"
      label="date-picker"
      label-position="inside"
      type="date"
      placeholder="Text"
      :disabled-date="disabledWeekendDate"
    />

    <div class="date-picker--range mb-8">
      <s-date-picker v-model="value2" type="range" placeholder="Text 1" first-less-second />
      <s-date-picker
        v-model="value2"
        label="date-picker Outside"
        label-position="outside"
        type="range"
        placeholder="Text 1"
        first-less-second
      />
      <s-date-picker
        v-model="value2"
        label="inside"
        label-position="inside"
        type="range"
        placeholder="Text 1"
        first-less-second
      />
    </div>
    <s-button appearance="link" as="router-link" class="uikit" :to="ROUTE_NAMES.uikit">Назад</s-button>
  </div>
</template>

<script lang="ts" setup>
import { ROUTE_NAMES } from 'shared/constants'
import { SButton } from 'shared/ui'
import SDatePicker from 'shared/ui/SDatePicker'
import { ref } from 'vue'

const value1 = ref()
const value2 = ref()

const disabledWeekendDate = (date: Date) => {
  const day = date.getDay()

  return day === 0 || day === 6
}
</script>

<style lang="scss" scoped>
.date-picker {
  margin-bottom: 12px;

  &--range {
    display: flex;
    column-gap: 8px;
    flex-direction: column;
  }
}
</style>
