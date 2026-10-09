import { ArrowRight, BadgeCheck, CalendarCheck, CheckCircle2, Compass, Gift, Sparkles, Users, Wallet } from 'lucide-react'
import { Link } from 'react-router-dom'
import AppPageShell, { workspaceStyles as shell } from '../components/AppPageShell.jsx'
import { useRewards } from '../state/RewardsContext.jsx'
import styles from './Workspace.module.css'

function BonusVEsPage() {
  const { ve, activity, captchaCompletedOn } = useRewards()
  const today = new Date().toISOString().slice(0, 10)
  const taskComplete = captchaCompletedOn === today
  const completedTasks = activity.filter((item) => item.type === 'earn')
  const opportunities = [
    { title: 'Daily verification task', description: 'Complete the daily symbol verification accurately.', icon: CalendarCheck, status: taskComplete ? 'Completed today' : 'Available', reward: '10 VEs', action: taskComplete ? 'View wallet' : 'Start task', to: taskComplete ? '/wallet' : '/captcha' },
    { title: 'Invite friends', description: 'Share Aurex with friends and follow your referral progress.', icon: Users, status: 'Available', reward: 'Referral program', action: 'Refer & earn', to: '/refer' },
    { title: 'Convert your balance', description: 'Move between VE and SVE balances at the current conversion rate.', icon: Wallet, status: 'Wallet tool', reward: '1 VE = 0.65 SVE', action: 'Open swap', to: '/swap' },
  ]

  return (
    <AppPageShell title="Bonus VEs" category="Earn VEs" description="Find activities and manage the ways you grow your Aurex wallet." accent="gold" icon={Sparkles}>
      <div className={styles.stack}>
        <section className={styles.statRow} aria-label="Rewards overview">
          {[
            ['VE balance', ve.toLocaleString('en-US', { maximumFractionDigits: 2 }), 'VEs'],
            ['Daily task', taskComplete ? 'Complete' : 'Available', 'today'],
            ['VE credits', completedTasks.length.toLocaleString('en-US'), 'earned'],
          ].map(([label, value, unit]) => (
            <div className={styles.stat} key={label}><span className={styles.statLabel}>{label}</span><strong className={styles.statValue}>{value} <small>{unit}</small></strong></div>
          ))}
        </section>

        <section aria-labelledby="opportunities-heading">
          <div className={shell.sectionHead}><div><span className={styles.kicker}>YOUR REWARDS</span><h2 id="opportunities-heading">Ways to earn and use VEs</h2></div></div>
          <div className={styles.opportunityGrid}>
            {opportunities.map(({ title, description, icon: OpportunityIcon, status, reward, action, to }) => (
              <article className={styles.opportunityCard} key={title}>
                <div className={styles.opportunityTop}><span className={styles.opportunityIcon}><OpportunityIcon size={19} /></span><span className={styles.opportunityStatus}><i />{status}</span></div>
                <h3>{title}</h3>
                <p>{description}</p>
                <div className={styles.opportunityFoot}><span>{reward}</span><Link to={to}>{action}<ArrowRight size={15} /></Link></div>
              </article>
            ))}
          </div>
          <p className={styles.termsText}>Referral activity is not yet connected. Daily task rewards are credited to this browser’s wallet.</p>
        </section>

        <div className={shell.twoColumn}>
          <section className={styles.panel} aria-labelledby="recent-heading">
            <div className={styles.panelHead}><div><span className={styles.kicker}>WALLET ACTIVITY</span><h2 id="recent-heading">Recent VE earnings</h2></div><Link className={styles.panelLink} to="/wallet">View wallet <ArrowRight size={14} /></Link></div>
            {completedTasks.length ? (
              <ul className={styles.list}>
                {completedTasks.slice(0, 4).map((item) => (
                  <li className={styles.listItem} key={item.id}>
                    <span className={styles.listIcon}><BadgeCheck size={17} /></span>
                    <div><strong>{item.title}</strong><p>{new Date(item.createdAt).toLocaleString()}</p></div>
                    <span className={`${styles.listAside} ${styles.ledgerCredit}`}>+{item.amount} {item.asset}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <div className={styles.activityEmpty}><span className={styles.emptyIcon}><Gift size={17} /></span><div><strong>No VE earnings yet</strong><p>Complete the daily verification task to earn 10 VEs.</p></div></div>
            )}
          </section>
          <section className={styles.panel} aria-labelledby="how-bonus-heading">
            <div className={styles.panelHead}><div><span className={styles.kicker}>HOW EARNING WORKS</span><h2 id="how-bonus-heading">From activity to wallet</h2></div></div>
            <ol className={styles.steps}>
              {[['Find an activity', Compass], ['Complete the task', CalendarCheck], ['Verify your work', CheckCircle2], ['Receive VEs', Gift]].map(([label, StepIcon], index) => <li key={label}><span className={styles.stepNumber}><StepIcon size={14} /></span><strong>{label}</strong><span className={styles.listAside}>{String(index + 1).padStart(2, '0')}</span></li>)}
            </ol>
            <div className={styles.subtleNotice}><CheckCircle2 size={16} /><span>Earned task VEs are stored in this browser and appear in your wallet.</span></div>
          </section>
        </div>
      </div>
    </AppPageShell>
  )
}

export default BonusVEsPage
