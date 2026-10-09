import { Link } from 'react-router-dom'
import { ChevronDown, LogOut, User } from 'lucide-react'
import { useRewards } from '../state/RewardsContext.jsx'
import styles from './AccountMenu.module.css'

function AccountMenu() {
  const { account, logout } = useRewards()

  if (!account) return <Link className={styles.login} to="/login">Log in</Link>

  return (
    <details className={styles.account}>
      <summary aria-label={`Account menu for ${account.name || account.email}`}>
        <span className={styles.avatar} aria-hidden="true">A</span>
        <ChevronDown size={14} />
      </summary>
      <div className={styles.menu}>
        <span className={styles.identity}><User size={15} />{account.name || account.email}</span>
        <Link to="/wallet"><User size={15} />Wallet &amp; activity</Link>
        <button type="button" onClick={logout}><LogOut size={15} />Log out</button>
      </div>
    </details>
  )
}

export default AccountMenu
