import { ArrowDownLeft, ArrowUpRight, ArrowUpDown, Wallet as WalletIcon } from 'lucide-react'
import { Link } from 'react-router-dom'
import AppPageShell, { workspaceStyles as shell } from '../components/AppPageShell.jsx'
import { useRewards } from '../state/RewardsContext.jsx'
import styles from './Workspace.module.css'

function format(value) {
  return Number(value).toLocaleString('en-US', { maximumFractionDigits: 2 })
}

function WalletPage() {
  const { ve, sve, activity } = useRewards()
  return (
    <AppPageShell title="Wallet" category="Your balances" description="Track earned VEs, converted SVEs, and recent wallet activity." accent="cyan" icon={WalletIcon}>
      <div className={styles.stack}>
        <section className={styles.walletGrid} aria-label="Current wallet balances">
          <article className={styles.walletBalance}>
            <span><WalletIcon size={18} /> VE balance</span>
            <strong>{format(ve)} <small>VEs</small></strong>
            <Link to="/captcha">Earn VEs <ArrowUpRight size={15} /></Link>
          </article>
          <article className={`${styles.walletBalance} ${styles.sveBalance}`}>
            <span><ArrowUpDown size={18} /> SVE balance</span>
            <strong>{format(sve)} <small>SVEs</small></strong>
            <Link to="/swap">Convert balance <ArrowUpRight size={15} /></Link>
          </article>
        </section>
        <section className={styles.panel} aria-labelledby="activity-heading">
          <div className={styles.panelHead}><div><span className={styles.kicker}>WALLET LEDGER</span><h2 id="activity-heading">Recent activity</h2></div></div>
          {activity.length ? (
            <ul className={styles.list}>
              {activity.map((item) => (
                <li className={styles.listItem} key={item.id}>
                  <span className={styles.listIcon}>{item.type === 'earn' ? <ArrowDownLeft size={17} /> : <ArrowUpRight size={17} />}</span>
                  <div><strong>{item.title}</strong><p>{item.method ? `${item.method} · ` : ''}{new Date(item.createdAt).toLocaleString()}</p></div>
                  <span className={`${styles.ledgerAmount} ${item.type === 'earn' ? styles.ledgerCredit : ''}`}>{item.type === 'swap' ? `${format(item.amount)} ${item.asset} → ${format(item.output)} ${item.outputAsset}` : `${item.type === 'earn' ? '+' : '−'}${format(item.amount)} ${item.asset}`}</span>
                </li>
              ))}
            </ul>
          ) : (
            <div className={styles.activityEmpty}><span className={styles.emptyIcon}><WalletIcon size={17} /></span><div><strong>Your wallet is ready</strong><p>Complete an eligible task to see your first VE credit here.</p></div></div>
          )}
          <p className={styles.walletNote}>Balances and activity are saved locally in this browser. This frontend does not connect to a financial account or transfer funds.</p>
        </section>
      </div>
    </AppPageShell>
  )
}

export default WalletPage
