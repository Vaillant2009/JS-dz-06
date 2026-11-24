import type { Task } from '../types';
import { TodoItem } from './TodoItem';
import styles from './TodoList.module.css';

export function TodoList({ tasks, onToggle, onDelete }: { tasks: Task[]; onToggle: (id: number) => void; onDelete: (id: number) => void }) {
  if (!tasks.length) {
    return (
      <div className={styles.empty}>
        <span className={styles.emptyIcon} aria-hidden="true">✨</span>
        <strong>Список порожній</strong>
        <p>Додайте першу задачу та почніть продуктивний день!</p>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </ul>
  );
}
