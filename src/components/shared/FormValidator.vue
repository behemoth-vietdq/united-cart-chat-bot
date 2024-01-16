<template>
  <b-form-group
    :class="{
      required: required,
    }"
  >
    <legend v-if="label" class="col-form-label pt-0 font-weight-normal">
      {{ label }}
      <span v-if="required" class="text-danger"> * </span>
    </legend>
    <div :class="{ 'has-error': errors.length }">
      <slot></slot>
      <div v-if="errors.length" class="validation">
        <div v-for="(error, index) in errors" :key="index">
          {{ error.replace("Base", "") }}
        </div>
      </div>
    </div>
  </b-form-group>
</template>

<script>
import { defineComponent, computed } from "vue";

import { useGlobalStore } from "../../stores/global";

export default defineComponent({
  props: {
    label: {
      type: String,
      default: null,
    },
    name: {
      type: String,
      default: null,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },

  setup(props) {
    const globalStore = useGlobalStore();

    const errors = computed(() => globalStore.getErrors(props.name));

    return {
      errors,
    };
  },
});
</script>

<style lang="scss" scoped>
.validation {
  width: 100%;
  margin-top: 0.25rem;
  font-size: 80%;
  color: #dc3545;
}

.required {
  legend::after {
    background: #f46a6a;
  }
}
</style>
