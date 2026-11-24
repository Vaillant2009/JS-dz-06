import { FormEvent, useState } from 'react';
import type { Priority } from '../types';
import styles from './TaskForm.module.css';

export function TaskForm({ onAdd }: { onAdd: (text: string, priority: Priority, deadline: string) => void }) {
  const [text, setText] = useState('');
  const [priority, setPriority] = useState<Priority>('normal');
  const [deadline, setDeadline] = useState('');

  function submit(event: FormEvent) {
    event.preventDefault();
    const cleanText = text.trim();
    if (!cleanText) return;
    onAdd(cleanText, priority, deadline);
    setText('');
    setDeadline('');
  }

  return (
    <form className={styles.form} onSubmit={submit}>
      <div className={styles.textFieldWrap}>
        <label className={styles.label} htmlFor="task-text">Нова задача</label>
        <input id="task-text" className={styles.field} value={text} onChange={(event) => setText(event.target.value)} placeholder="Що потрібно зробити?" />
      </div>
      <div className={styles.selectWrap}>
        <label className={styles.label} htmlFor="task-priority">Пріоритет</label>
        <select id="task-priority" className={styles.field} value={priority} onChange={(event) => setPriority(event.target.value as Priority)}>
          <option value="low">Низький</option>
          <option value="normal">Звичайний</option>
          <option value="high">Високий</option>
        </select>
      </div>
      <div className={styles.deadlineWrap}>
        <label className={styles.label} htmlFor="task-deadline">Дедлайн</label>
        <input id="task-deadline" className={styles.field} type="datetime-local" value={deadline} onChange={(event) => setDeadline(event.target.value)} />
      </div>
      <button className={styles.button} type="submit"><span aria-hidden="true">＋</span> Додати</button>
    </form>
  );
}
