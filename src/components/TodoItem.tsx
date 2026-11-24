import type { Task } from '../types';
import styles from './TodoItem.module.css';

const labels = { low: 'Низький', normal: 'Звичайний', high: 'Високий' };

export function TodoItem({ task, onToggle, onDelete }: { task: Task; onToggle: (id: number) => void; onDelete: (id: number) => void }) {
  // eslint-disable-next-line react-hooks/purity -- deadline status necessarily depends on the current time
  const overdue = !task.completed && Boolean(task.deadline) && new Date(task.deadline).getTime() < Date.now();
  const priorityClass = task.priority === 'low'
    ? styles.priorityLow
    : task.priority === 'normal'
      ? styles.priorityNormal
      : styles.priorityHigh;
  const deadlineText = task.deadline
    ? new Date(task.deadline).toLocaleString('uk-UA', { day: '2-digit', month: '2-digit', hour: '2-digit', minute: '2-digit' })
    : 'Без дедлайну';

  return (
    <li className={`${styles.card} ${styles[task.priority]} ${task.completed ? styles.completed : ''} ${overdue ? styles.overdue : ''}`}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={task.completed}
        onChange={() => onToggle(task.id)}
        aria-label={`Позначити: ${task.text}`}
      />
      <div className={styles.content}>
        <span className={styles.text}>{task.text}</span>
        <div className={styles.meta}>
          <span className={`${styles.priority} ${priorityClass}`}>{labels[task.priority]}</span>
          <span className={styles.deadline}>⏰ {deadlineText}</span>
          {overdue && <span className={styles.warning}>! Прострочено</span>}
        </div>
      </div>
      <button className={styles.delete} type="button" onClick={() => onDelete(task.id)} aria-label={`Видалити: ${task.text}`} title="Видалити">🗑️</button>
    </li>
  );
}
