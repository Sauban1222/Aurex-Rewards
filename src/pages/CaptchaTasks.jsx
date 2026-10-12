import { useState } from 'react'
import { ArrowRight, Check, CheckCircle2, ClipboardCheck, Clock3, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import AppPageShell from '../components/AppPageShell.jsx'
import { CAPTCHA_TASK_REWARD, getRewardDayKey, useRewards } from '../state/RewardsContext.jsx'
import styles from './Workspace.module.css'

const CAPTCHA_TASKS = [
  {
    number: 1,
    instruction: 'Select all shield symbols.',
    correctTiles: [1, 4],
    symbols: ['ring', 'shield', 'diamond', 'spark', 'shield', 'ring'],
  },
  {
    number: 2,
    instruction: 'Select all diamond symbols.',
    correctTiles: [1, 3, 5],
    symbols: ['shield', 'diamond', 'ring', 'diamond', 'spark', 'diamond'],
  },
]

function TaskTile({ index, symbol, selected, onClick }) {
  return (
    <button className={`${styles.taskTile} ${styles[symbol]} ${selected ? styles.tileSelected : ''}`} type="button" aria-label={`Tile ${index + 1}${selected ? ', selected' : ''}`} aria-pressed={selected} onClick={onClick}>
      <span className={styles.tileCheckbox}>{selected && <Check size={14} />}</span>
      {symbol === 'shield' ? (
        <svg viewBox="0 0 40 44" aria-hidden="true"><path d="M20 3 35 9v11c0 10-6 17-15 21C11 37 5 30 5 20V9z" /><path className={styles.symbolDetail} d="m13 21 5 5 10-11" /></svg>
      ) : symbol === 'diamond' ? (
        <svg viewBox="0 0 40 44" aria-hidden="true"><path d="m20 4 15 18-15 18L5 22z" /><path className={styles.symbolDetail} d="m5 22 30 0M20 4l-5 18 5 18 5-18z" /></svg>
      ) : symbol === 'spark' ? (
        <svg viewBox="0 0 40 44" aria-hidden="true"><path d="m20 3 4.2 12.8L37 20l-12.8 4.2L20 37l-4.2-12.8L3 20l12.8-4.2z" /><circle cx="31" cy="34" r="3" /></svg>
      ) : (
        <svg viewBox="0 0 40 44" aria-hidden="true"><circle cx="20" cy="22" r="14" /><circle className={styles.symbolDetail} cx="20" cy="22" r="7" /></svg>
      )}
    </button>
  )
}

function CaptchaChallenge({ task, completedOn, completeCaptcha }) {
  const today = getRewardDayKey()
  const complete = completedOn === today
  const [selectedTiles, setSelectedTiles] = useState([])
  const [feedback, setFeedback] = useState('')
  const [earnedNow, setEarnedNow] = useState(false)

  const verifyTask = () => {
    const isCorrect = selectedTiles.length === task.correctTiles.length && task.correctTiles.every((tile) => selectedTiles.includes(tile))
    if (!isCorrect) {
      setFeedback('Some selections are incorrect. Review the task and try again.')
      return
    }
    const earned = completeCaptcha(task.number)
    setEarnedNow(earned)
    setFeedback(earned ? `${CAPTCHA_TASK_REWARD} VEs have been added to your wallet.` : 'You have already completed this task today.')
  }

  return (
    <section className={`${styles.panel} ${styles.captchaCard}`} aria-labelledby={`captcha-task-${task.number}`}>
      <div className={styles.panelHead}>
        <div><span className={styles.kicker}>DAILY CAPTCHA · TASK 0{task.number}</span><h2 id={`captcha-task-${task.number}`}>{complete ? 'Completed today' : `Verification task ${task.number}`}</h2></div>
        <span className={styles.badge}><i className={styles.availableDot} />{complete ? 'Credited' : 'Available'}</span>
      </div>
      {complete ? (
        <div className={styles.captchaComplete} role="status">
          <CheckCircle2 size={19} />
          <div><strong>{earnedNow ? 'Task verified' : 'Task completed today'}</strong><p>{feedback || 'This task has already been completed today. Check wallet activity for the amount credited.'}</p></div>
        </div>
      ) : (
        <>
          <div className={styles.taskMeta}><span><Clock3 size={15} /> Short task</span><span><Sparkles size={15} /> +{CAPTCHA_TASK_REWARD} VEs</span></div>
          <div className={styles.instruction}><span className={styles.kicker}>INSTRUCTION</span><strong>{task.instruction}</strong><small>{selectedTiles.length} of {task.correctTiles.length} selected</small></div>
          <div className={styles.tileGrid} role="group" aria-label={`Captcha task ${task.number} symbols`}>
            {task.symbols.map((symbol, index) => <TaskTile key={index} index={index} symbol={symbol} selected={selectedTiles.includes(index)} onClick={() => {
              setSelectedTiles((current) => current.includes(index) ? current.filter((tile) => tile !== index) : [...current, index])
              setFeedback('')
            }} />)}
          </div>
          {feedback && <p className={styles.formError} role="alert">{feedback}</p>}
          <div className={styles.taskFooter}>
            <span className={styles.small}><ShieldCheck size={15} /> One reward per task each day</span>
            <button className={styles.primaryButton} type="button" onClick={verifyTask} disabled={selectedTiles.length === 0}>Verify selection <ArrowRight size={16} /></button>
          </div>
        </>
      )}
    </section>
  )
}

function CaptchaTasksPage() {
  const { captchaCompletedOn, captchaSecondCompletedOn, completeCaptcha, activity } = useRewards()
  const today = getRewardDayKey()
  const completionDates = [captchaCompletedOn, captchaSecondCompletedOn]
  const completedCount = completionDates.filter((date) => date === today).length
  const todaysCaptchaEarnings = activity
    .filter((item) => item.type === 'earn' && item.title.startsWith('Captcha task') && getRewardDayKey(new Date(item.createdAt)) === today)
    .reduce((total, item) => total + item.amount, 0)
  const todaysCaptchaActivity = activity
    .filter((item) => item.type === 'earn' && item.title.startsWith('Captcha task') && getRewardDayKey(new Date(item.createdAt)) === today)

  return (
    <AppPageShell title="Captcha Tasks" category="Earn VEs · Verification tasks" description="Complete either or both daily verification tasks to earn VEs." accent="teal" icon={ShieldCheck}>
      <div className={styles.stack}>
        <section className={`${styles.statRow} ${styles.taskStats}`} aria-label="Task summary">
          {[
            ['Available tasks', String(2 - completedCount)],
            ['Completed today', String(completedCount)],
            ['Earned today', `${todaysCaptchaEarnings} VEs`],
            ['Reward per task', `${CAPTCHA_TASK_REWARD} VEs`],
          ].map(([label, value]) => <div className={styles.stat} key={label}><span className={styles.statLabel}>{label}</span><strong className={styles.statValue}>{value}</strong></div>)}
        </section>
        <div className={styles.twoColumn}>
          <div className={styles.captchaGrid}>
            {CAPTCHA_TASKS.map((task, index) => (
              <CaptchaChallenge key={task.number} task={task} completedOn={completionDates[index]} completeCaptcha={completeCaptcha} />
            ))}
          </div>
          <aside className={styles.sideColumn}>
            <section className={styles.panel} aria-labelledby="how-tasks-heading">
              <div className={styles.panelHead}><div><span className={styles.kicker}>HOW TASKS WORK</span><h2 id="how-tasks-heading">Complete one or both</h2></div><ClipboardCheck size={18} className={styles.accentIcon} /></div>
              <ol className={styles.steps}>
                {['Choose a captcha task', 'Follow the symbol instruction', 'Verify your selection', 'Receive 40 VEs per task'].map((step, index) => <li key={step}><span className={styles.stepNumber}>{index + 1}</span><strong>{step}</strong></li>)}
              </ol>
              <div className={styles.subtleNotice}><Sparkles size={16} /><span>This sample challenge runs in the browser, so it is not a security verification. Preview rewards are stored locally only.</span></div>
            </section>
            <section className={styles.panel} aria-labelledby="task-history-heading">
              <div className={styles.panelHead}><div><span className={styles.kicker}>TODAY</span><h2 id="task-history-heading">Task progress</h2></div></div>
              {todaysCaptchaActivity.length ? (
                <ul className={styles.list}>
                  {todaysCaptchaActivity.map((item) => (
                    <li className={styles.listItem} key={item.id}><span className={styles.listIcon}><Check size={17} /></span><div><strong>{item.title}</strong><p>Completed today</p></div><span className={`${styles.listAside} ${styles.ledgerCredit}`}>+{item.amount} VEs</span></li>
                  ))}
                </ul>
              ) : completedCount ? (
                <div className={styles.activityEmpty}><span className={styles.emptyIcon}><Check size={17} /></span><div><strong>Captcha completed today</strong><p>Check wallet activity for the amount credited.</p></div></div>
              ) : (
                <div className={styles.activityEmpty}><span className={styles.emptyIcon}><ClipboardCheck size={17} /></span><div><strong>No completed tasks yet</strong><p>Complete a captcha to add its reward to your wallet.</p></div></div>
              )}
            </section>
          </aside>
        </div>
        <Link className={styles.panelLink} to="/wallet">View wallet activity <ArrowRight size={14} /></Link>
      </div>
    </AppPageShell>
  )
}

export default CaptchaTasksPage
