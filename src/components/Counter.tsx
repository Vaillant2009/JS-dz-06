import styles from './Counter.module.css';
export function Counter({ total, completed }: { total: number; completed: number }) {
  return <section className={styles.counter} aria-label="Статистика"><div className={styles.stat}><span className={styles.label}>Усього завдань</span><strong className={styles.number}>{total}</strong></div><div className={styles.stat}><span className={styles.label}>Виконано</span><strong className={`${styles.number} ${styles.done}`}>{completed}</strong></div></section>;
}
