import { defineCustomElement } from 'vue'
import Input from './ik-input.ce.vue'

// Input.styles.concat(['element-plus/dist/index.css', 'element-plus/theme-chalk/el-input.css'])

const IkInput = defineCustomElement(Input)

// 分别导出元素
export { IkInput }

export function register() {
  customElements.define('ik-input', IkInput)
}