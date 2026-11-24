import styles from './Counter.module.css';

export function Counter({ total, completed }: { total: number; completed: number }) {
  const inProgress = total - completed;
  const progress = total ? Math.round((completed / total) * 100) : 0;

  return (
    <section className={styles.counter} aria-label="Статистика">
      <div className={`${styles.stat} ${styles.total}`}>
        <span className={styles.label}>Всього</span>
        <strong className={styles.number}>{total}</strong>
      </div>
      <div className={`${styles.stat} ${styles.progress}`}>
        <span className={styles.label}>В процесі</span>
        <strong className={styles.number}>{inProgress}</strong>
      </div>
      <div className={`${styles.stat} ${styles.done}`}>
        <span className={styles.label}>Виконано</span>
        <strong className={styles.number}>{completed}</strong>
      </div>
      <div className={styles.progressTrack} aria-label={`Прогрес виконання ${progress}%`}>
        <div className={styles.progressBar} style={{ width: `${progress}%` }} />
      </div>
    </section>
  );
}
