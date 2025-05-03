export interface baseUrlConfig{
  base_url: string
}

export interface Task {
  id: number,
  title: string,
  isDone: boolean,
  category: string | null
}

export interface Category {
  id: number;
  name: string,
}



