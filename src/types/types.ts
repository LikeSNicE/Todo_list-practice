// ========== interfaces 

export interface baseUrlConfig{
  base_url: string
}

export interface Task {
  id: number,
  title: string,
  isDone: boolean,
  category: string | null,
  description: string,
}

export interface Category {
  id: number;
  name: string,
}

export interface User{
  id: number
  email: string,
  password: string
}

export interface MetaPagination {
  total_items: number;
  total_pages: number;
  current_page: number;
  per_page: number;
  remaining_count: number;
}

// ========== Types 

export type TodoProps <Tcategory = string | null> = {
  id: number,
  title: string,
  isDone: boolean,
  category: Tcategory;
  description: string
}

export type PaginationProps = {
  totalPages: number,
  currentPage: number,
  onPageChange: Function
}

export type TaskField = "category" | "description";

export type ModalName = "task" | "category" | "description";

