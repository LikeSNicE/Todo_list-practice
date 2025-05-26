import { type AxiosResponse } from "axios";
import api from "../api";

const getData = async <T>(
  url: string,
  params?: Record<string, any>
): Promise<T> => {
  try {
    const { data }: AxiosResponse<T> = await api.get(url, { params });
    return data;
  } catch (error) {
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    console.error(`Failed to fetch data from ${url}: ${errorMessage}`);
    throw error;
  }
};

export default getData;
