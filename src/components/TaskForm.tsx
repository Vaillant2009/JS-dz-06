import { FormEvent, useState } from 'react';
import type { Priority } from '../types';
import styles from './TaskForm.module.css';
export function TaskForm({ onAdd }: { onAdd: (text: string, priority: Priority, deadline: string) => void }) {
  const [text,setText]=useState(''); const [priority,setPriority]=useState<Priority>('normal'); const [deadline,setDeadline]=useState('');
  function submit(e:FormEvent){e.preventDefault();const clean=text.trim();if(!clean)return;onAdd(clean,priority,deadline);setText('');setDeadline('');}
  return <form className={styles.form} onSubmit={submit}><input className={styles.field} value={text} onChange={e=>setText(e.target.value)} placeholder="Що потрібно зробити?" aria-label="Текст завдання"/><select className={styles.field} value={priority} onChange={e=>setPriority(e.target.value as Priority)} aria-label="Пріоритет"><option value="low">Низький</option><option value="normal">Звичайний</option><option value="high">Високий</option></select><input className={`${styles.field} ${styles.deadline}`} type="datetime-local" value={deadline} onChange={e=>setDeadline(e.target.value)} aria-label="Дедлайн"/><button className={styles.button} type="submit">Додати завдання</button></form>;
}
