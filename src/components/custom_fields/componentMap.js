import TextField from './fields/TextField.vue'
import TextareaField from './fields/TextareaField.vue'
import EditorField from './fields/EditorField.vue'
import SelectField from './fields/SelectField.vue'
import CheckboxField from './fields/CheckboxField.vue'
import ImageField from './fields/ImageField.vue'
import GroupField from './fields/GroupField.vue'
import RepeaterField from './fields/RepeaterField.vue'

export default {
  text: TextField,
  textarea: TextareaField,
  editor: EditorField,
  select: SelectField,
  checkbox: CheckboxField,
  image: ImageField,
  group: GroupField,
  repeater: RepeaterField
}