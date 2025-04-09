import { useAppContext } from '@/services/store/provider';
import { DaySunnyIcon } from '@/ui-kit/icons';
import { Switcher } from '@/ui-kit/switcher/switcher';
import { ThemeSwitcher } from './themetoggle'; // Import ThemeSwitcher
import styles from './header.module.scss';

export const Header = () => {
  const { toggleUnits } = useAppContext();

  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.brand}>
          <a href="/" className={styles.logo} role="logo">
            <DaySunnyIcon className={styles.logoIcon} />
          </a>
          <h1 className={styles.brand}>forecast</h1>
        </div>
        <div className={styles.controls}>
          {/* Render Switcher and ThemeSwitcher side by side */}
          <Switcher label1="C" label2="F" onChange={toggleUnits} />
          <ThemeSwitcher />
        </div>
      </div>
    </div>
  );
};