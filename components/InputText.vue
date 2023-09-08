<template>
  <input
    type="text"
    v-model="inputValue"
    :disabled="disabled"
    :placeholder="placeholder"
    :class="['input-text', isError ? 'error' : '']"
    @input="updateValue($event.target.value)"
  />
</template>

<script>
export default {
  name: "InputText",
  props: {
    value: {
      type: String,
      default: "",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    placeholder: {
      type: String,
      default: "",
    },
    error: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      inputValue: this.value,
      isValid: false,
      isError: this.error,
    };
  },
  methods: {
    updateValue(value) {
      this.inputValue = value;
      this.isError = !this.isValid;
      this.$emit("input", value);
    },
  },
};
</script>

<style lang="scss">
input[type="text"] {
  padding: 8px 12px;
  width: 100%;
  font-size: 16px;
  outline: none;
  border-radius: 4px;
  border: 1px solid #cdced9;
  background: #fff;

  &:focus {
    border: 2px solid ffbd80;
  }

  &::placeholder {
    font-size: 13px;
  }
}
</style>
