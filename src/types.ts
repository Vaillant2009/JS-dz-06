export type Priority = 'low' | 'normal' | 'high';

export interface Task {
  id: number;
  text: string;
  priority: Priority;
  deadline: string;
  completed: boolean;
}
