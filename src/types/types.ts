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

// ========== Types 

export type TodoProps <Tcategory = string | null> = {
  id: number,
  title: string,
  isDone: boolean,
  category: Tcategory;
  description: string
}

export type TaskField = "category" | "description";

