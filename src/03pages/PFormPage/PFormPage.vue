<template>
  <div class="container">
    <h1>Form</h1>
    <el-form
      ref="ruleFormRef"
      style="max-width: 600px"
      :model="ruleForm"
      :rules="rules"
      label-width="auto"
      class="demo-ruleForm"
      status-icon
      @submit.prevent
    >
      <s-form-item class="form-item" prop="name">
        <s-input
          v-model="ruleForm.name"
          type="text"
          label="Outside label"
          label-position="outside"
          placeholder="Name"
        />
      </s-form-item>
      <s-form-item class="form-item" prop="password">
        <s-input
          v-model="ruleForm.password"
          type="password"
          label="Outside label"
          label-position="outside"
          placeholder="Password"
        />
      </s-form-item>
      <s-form-item class="form-item" prop="text">
        <s-input
          v-model="ruleForm.text"
          type="textarea"
          label="Outside label"
          label-position="outside"
          placeholder="Text"
        />
      </s-form-item>

      <s-form-item class="form-item" prop="options1">
        <s-select v-model="ruleForm.options1" label="select option" label-position="outside">
          <template #prefix>
            <s-icon name="interface-error" class="text-xl" />
          </template>
          <s-option v-for="item in selectFormOptions" :key="item.value" :label="item.label" :value="item.value" />
        </s-select>
      </s-form-item>

      <s-form-item class="form-item" prop="options2">
        <s-select
          v-model="ruleForm.options2"
          label="select option"
          label-position="outside"
          size="sm"
          multiple
          collapse-tags
        >
          <s-option v-for="item in selectFormOptions" :key="item.value" :label="item.label" :value="item.value" />
        </s-select>
      </s-form-item>
      <s-form-item class="form-item" prop="date">
        <s-date-picker
          v-model="ruleForm.date"
          label="inside"
          label-position="inside"
          type="range"
          placeholder="Text 1"
          first-less-second
        />
      </s-form-item>
      <s-form-item class="form-item">
        <s-button appearance="primary" size="md" @click="submitForm()"> Submit form </s-button>
        <s-button appearance="tertiary" size="md" @click="resetForm()"> Reset form </s-button>
      </s-form-item>
    </el-form>
    <s-button appearance="link" as="router-link" class="uikit mt-12" :to="ROUTE_NAMES.uikit">Назад</s-button>
  </div>
</template>

<script setup lang="ts">
import { ComponentSize, FormInstance, FormItemRule, FormRules } from 'element-plus'
import { selectFormOptions } from 'pages/PFormPage/mocks'
import { ROUTE_NAMES } from 'shared/constants'
import { SButton, SFormItem, SIcon, SInput, SSelect, SDatePicker, SOption } from 'shared/ui'
import { reactive, ref } from 'vue'

interface RuleForm {
  name: string
  password: string
  text: string
  options1: string
  options2: string[]
  date: string
}

const ruleFormRef = ref<FormInstance>()
const ruleForm = reactive<RuleForm>({
  name: '',
  password: '',
  text: '',
  options1: '',
  options2: [],
  date: '',
})

const checkName: FormItemRule['validator'] = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Write your name, please.'))
  } else if (ruleForm.password !== '') {
    if (!ruleFormRef.value) return
    ruleFormRef.value.validateField('checkPass')
  }
}

const checkNameNoNumbers: FormItemRule['validator'] = (rule, value, callback) => {
  const regex = /^[a-zA-Zа-яА-ЯёЁ\-]+$/

  if (!regex.test(value)) {
    callback(new Error('Имя не должно содержать числа или спец. символы.'))
  } else {
    callback()
  }
}

const checkPassword: FormItemRule['validator'] = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Write your password, please.'))
  } else if (ruleForm.password !== '') {
    if (value.length < 8) {
      callback(new Error('Password must be more 8 symbol.'))
    }

    if (!ruleFormRef.value) return
    ruleFormRef.value.validateField('checkPass')
  }
}

const checkPasswordFormat: FormItemRule['validator'] = (rule, value, callback) => {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[\W_]).+$/

  if (!regex.test(value)) {
    callback(
      new Error(
        'The password must contain at least one uppercase and lowercase ' +
          'character, as well as at least one special character.'
      )
    )
  } else {
    callback()
  }
}

const checkText: FormItemRule['validator'] = (rule, value, callback) => {
  if (value === '') {
    callback(new Error('Please, write you message.'))
  }
}

const checkOptions1: FormItemRule['validator'] = (rule, value, callback) => {
  if (!value) {
    callback(new Error('Please pick an option'))
  } else {
    callback()
  }
}

const checkOptions2: FormItemRule['validator'] = (rule, value, callback) => {
  if (value.length < 3) {
    callback(new Error('Please select at least 3 options'))
  } else {
    callback()
  }
}

const checkDate: FormItemRule['validator'] = (rule, value, callback) => {
  if (!value) {
    callback(new Error('Please pick a date'))
  } else {
    callback()
  }
}

const rules = reactive<FormRules<RuleForm>>({
  name: [
    { validator: checkName, trigger: 'blur' },
    { validator: checkNameNoNumbers, trigger: 'change' },
  ],
  password: [
    {
      validator: checkPassword,
      trigger: 'blur',
    },
    {
      validator: checkPasswordFormat,
      trigger: 'change',
    },
  ],
  text: [
    {
      validator: checkText,
      trigger: 'blur',
    },
  ],
  options1: [
    {
      validator: checkOptions1,
      trigger: 'change',
    },
  ],
  options2: [
    {
      validator: checkOptions2,
      trigger: 'change',
    },
  ],
  date: [
    {
      type: 'date',
      validator: checkDate,
      trigger: 'change',
    },
  ],
})

const submitForm = async () => {
  await ruleFormRef.value?.validate((valid, fields) => {
    if (valid) {
      console.log('submit!')
    } else {
      console.log('error submit!', fields)
    }
  })
}

const resetForm = () => {
  ruleFormRef.value?.resetFields()
}
</script>

<style scoped>
.form-item {
  padding-bottom: 25px;
}
</style>
