import axios from "axios";
import router from "@/router/index";
// ==========UTILITIES=========
import { get } from "lodash";
import Toast from "@/ultilities/toast";

// ==========STORE=========
import { useAuthStore } from "./stores/auth";
import { useGlobalStore } from "./stores/global";

const BASE_URL = `${import.meta.env.VITE_APP_API_BASE_URL}/graphql`;
import { print } from "graphql";

const api = axios.create({
  timeout: 30000,
});

function hideLoading() {
  const globalStore = useGlobalStore();
  globalStore.loading = false;
}

api.interceptors.request.use(
  function (config) {
    const globalStore = useGlobalStore();
    globalStore.validationErrors = {};
    globalStore.errorMessage = "";

    const authStore = useAuthStore();
    const token = authStore.token;

    if (token) {
      config.headers["BhmAIO-Authorization"] = `Bearer ${token}`;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    hideLoading();

    Toast.error({ title: error.message });

    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  function (response) {
    hideLoading();

    // Do something with response data
    const errors = response.data.errors;

    if (errors && errors.length > 0) {
      const errorMessage = get(errors[0], "message") || "An error occurred";

      Toast.error({ title: errorMessage });

      const findError = errors.find((item) => item.message && item.code == 422);
      const globalStore = useGlobalStore();
      globalStore.validationErrors = findError?.errors || {};
    } else if (response.data) {
      const successMessage = get(
        response.data.data,
        `${Object.keys(response.data.data)[0]}.message`
      );

      if (response.config.toast) {
        Toast.success({ title: successMessage });
      }
      return response.data.data;
    }
  },
  function (error) {
    hideLoading();

    const errCode = get(error, "response.status");

    const errorMessage =
      get(error, "response.data.errors[0].message") || "An error occurred";

    Toast.error({ title: errorMessage });

    if (errCode === 401) {
      const globalStore = useGlobalStore();
      globalStore.token = null;

      router.push("/login");
    } else if (errCode === 403) {
      router.push("/");
    }

    return Promise.reject(error);
  }
);

export default function (
  query,
  variables,
  options = {
    loading: true,
    toast: true,
  }
) {
  const globalStore = useGlobalStore();
  globalStore.loading = options.loading;

  // For Uploads
  switch (options.requestType) {
    case "upload":
      const config = {
        header: {
          "Content-Type": "multiple/form-data",
        },
        baseURL: import.meta.env.VITE_APP_API_BASE_URL,
        timeout: 300000,
      };

      return api.post("/upload", variables.data, {
        ...config,
        ...options,
      });
    default:
      return api.post(
        BASE_URL,
        {
          query: print(query),
          variables: variables,
        },
        options
      );
  }
}
