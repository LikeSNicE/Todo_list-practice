import { type baseUrlConfig } from "../types";

export const config: baseUrlConfig = {
  base_url:
    import.meta.env.VITE_API_BASE_URL || "https://20a93d733216cc02.mokky.dev",
};
