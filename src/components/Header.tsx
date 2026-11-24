import styles from './Header.module.css';

export function Header({ count }: { count: number }) {
  return (
    <header className={styles.header}>
      <div className={styles.headingRow}>
        <span className={styles.icon} aria-hidden="true">📋</span>
        <div>
          <h1 className={styles.title}>Task List</h1>
          <p className={styles.subtitle}>Організуйте справи просто й зручно</p>
        </div>
      </div>
      <span className={styles.badge}>{count} {count === 1 ? 'задача' : 'задач'}</span>
    </header>
  );
}
