import styles from './Header.module.css';
export function Header({ count }: { count: number }) {
  return <header className={styles.header}><h1 className={styles.title}>Мої завдання</h1><span className={styles.badge}>{count} {count === 1 ? 'задача' : 'задач'}</span></header>;
}
