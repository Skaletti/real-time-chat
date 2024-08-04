<template>
  <div class="container">
    <h1>Tabs</h1>
    <div class="tabs">
      <s-tabs v-model="activeTab1" appearance="primary" class="mb-16" @tab-click="handleTabClick">
        <s-tab-pane v-for="tab in tabsMocks" :key="tab.id" :label="tab.label" :icon-name="tab.iconName">
          {{ tab.content }}
        </s-tab-pane>
      </s-tabs>

      <s-tabs v-model="activeTab2" appearance="secondary" size="lg" class="mb-16">
        <s-tab-pane v-for="tab in tabsMocks" :key="tab.id" :label="tab.label" :icon-name="tab.iconName">
          {{ tab.content }}
        </s-tab-pane>
      </s-tabs>

      <s-tabs v-model="activeTab3" appearance="secondary" size="sm">
        <s-tab-pane v-for="tab in tabsMocks" :key="tab.id" :label="tab.label" :icon-name="tab.iconName">
          {{ tab.content }}
        </s-tab-pane>
      </s-tabs>
    </div>
    <s-button appearance="link" as="router-link" class="uikit" :to="ROUTE_NAMES.uikit">Назад</s-button>
  </div>
</template>

<script lang="ts" setup>
import { tabsMocks } from 'pages/PTagPage/mocks'
import { ROUTE_NAMES } from 'shared/constants'
import { SButton } from 'shared/ui'
import { STabPane, STabs } from 'shared/ui/STab'
import { ref } from 'vue'

const activeTab1 = ref('Tab 1')
const activeTab2 = ref('Tab 1')
const activeTab3 = ref('Tab 1')

const handleTabClick = () => {
  console.log('Таб переключен!')
}
</script>

<style lang="scss" scoped>
.tabs {
  display: flex;
  flex-direction: column;
}
</style>
