import { defineStore } from "pinia";
import { ref } from "vue";
import { useLocalStorage } from "@vueuse/core";

import { get } from "lodash";

// import GlobalsRepository from "@/apis/repositories/globalsRepository";
// import axios from "@/apis/axios";

export const useGlobalStore = defineStore("global", () => {
  const theme = ref(useLocalStorage("theme", "light"));

  const validationErrors = ref({});
  const errorMessage = ref("");

  function getErrors(name) {
    return get(validationErrors.value, name, []);
  }

  function hasErrorOn(field) {
    const fieldError = validationErrors.value[field];

    if (fieldError) {
      return fieldError.length > 0;
    } else {
      return false;
    }
  }

  function haveErrorOnFields(fields) {
    for (const field of fields) {
      if (hasErrorOn(field)) {
        return true;
      }
    }

    return false;
  }

  function setErrorMessage(message) {
    errorMessage.value = message;
  }

  function setValidationErrors(value) {
    validationErrors.value = value;
  }

  return {
    theme,
    // Errors Msgs
    errorMessage,
    validationErrors,

    // methods
    setValidationErrors,
    getErrors,
    setErrorMessage,
    haveErrorOnFields,
  };
});
