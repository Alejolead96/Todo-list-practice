export interface GetResponseList {
  message: string;
  data: Item[];
}

export interface UpdateResponseItem {
  message: string;
  data: Item;
}

export interface Item {
  id: string;
  description: string;
  completed: boolean;
  createdAt: string;
  updatedAt: string;
}
