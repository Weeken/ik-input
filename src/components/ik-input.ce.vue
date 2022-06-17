<template>
<el-config-provider namespace="ik">
    <el-input v-model="input" placeholder="Please input" class="input" @blur="emitValue" />
    <el-date-picker
        v-model="date"
        type="date"
        placeholder="Pick a day"
      />
</el-config-provider>

</template>

<script lang="ts" setup>
// import { ElInput } from 'element-plus'
import { ref, withDefaults, defineProps, onMounted, watch } from 'vue'

export interface Props {
  value: string
}
const input = ref('')
const date = ref('')

const props = withDefaults(defineProps<Props>(), {
	value: ''
})

watch(
  () => props.value,
  () => {
    input.value = props.value
  }
)

const emits = defineEmits(['blur'])

const emitValue = () => {
  emits('blur', input.value)
}

onMounted(() => {
  input.value = props.value
})
</script>

<style lang="scss">
  @import 'element-plus/theme-chalk/src/input.scss';
  @import 'element-plus/theme-chalk/src/date-picker.scss';
  .input{
    width: 200px;
    height: 40px;
  }
</style>
