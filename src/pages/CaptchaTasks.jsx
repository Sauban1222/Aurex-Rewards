import { useState } from 'react'
import { ArrowRight, Check, ClipboardCheck, Clock3, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import AppPageShell, { workspaceStyles as shell } from '../components/AppPageShell.jsx'
import { useRewards } from '../state/RewardsContext.jsx'
import styles from './Workspace.module.css'

const correctTiles = [1, 4]
const symbols = ['ring', 'shield', 'diamond', 'spark', 'shield', 'ring']

function TaskTile({ index, symbol, selected, disabled, onClick }) {
  return (
    <button className={`${styles.taskTile} ${styles[symbol]} ${selected ? styles.tileSelected : ''}`} type="button" aria-label={`Tile ${index + 1}${selected ? ', selected' : ''}`} aria-pressed={selected} disabled={disabled} onClick={onClick}>
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

function CaptchaTasksPage() {
  const { captchaCompletedOn, completeCaptcha } = useRewards()
  const today = new Date().toISOString().slice(0, 10)
  const [selectedTiles, setSelectedTiles] = useState([])
  const [complete, setComplete] = useState(captchaCompletedOn === today)
  const [feedback, setFeedback] = useState('')
  const [earnedNow, setEarnedNow] = useState(false)
  const toggleTile = (index) => {
    setSelectedTiles((current) => current.includes(index) ? current.filter((tile) => tile !== index) : [...current, index])
    setFeedback('')
  }
  const verifyTask = () => {
    const isCorrect = selectedTiles.length === correctTiles.length && correctTiles.every((tile) => selectedTiles.includes(tile))
    if (!isCorrect) {
      setFeedback('Some selections are incorrect. Review the task and try again.')
      return
    }
    const earned = completeCaptcha()
    setComplete(true)
    setEarnedNow(earned)
    setFeedback(earned ? '10 VEs have been added to your wallet.' : 'You have already completed today’s task. Your wallet was not credited again.')
  }
  return (
    <AppPageShell title="Captcha Tasks" category="Earn VEs · Verification tasks" description="Complete verification tasks accurately to qualify for eligible rewards." accent="teal" icon={ShieldCheck}>
      <div className={styles.stack}>
        <section className={`${styles.statRow} ${styles.taskStats}`} aria-label="Task summary">
          {[
            ['Available tasks', complete ? '0' : '1'],
            ['Completed today', complete ? '1' : '0'],
            ['Accuracy', complete ? '100%' : '—'],
            ['Reward status', complete ? 'Credited' : 'Pending'],
          ].map(([label, value]) => <div className={styles.stat} key={label}><span className={styles.statLabel}>{label}</span><strong className={styles.statValue}>{value}</strong></div>)}
        </section>
        <div className={shell.twoColumn}>
          <section className={styles.panel} aria-labelledby="task-heading">
            {complete ? (
              <div className={styles.resultState} role="status">
                <span className={styles.resultIcon}><Check size={22} /></span>
                <h2 id="task-heading">Verification complete</h2>
                <p className={styles.muted}>{earnedNow ? 'Your task has been successfully verified.' : 'This task has already been completed today.'}</p>
                <div className={styles.subtleNotice}><ShieldCheck size={16} /><span>{feedback || (earnedNow ? '10 VEs were added to your wallet.' : 'The daily reward has already been credited.')}</span></div>
                <Link className={styles.primaryButton} to="/wallet">View wallet <ArrowRight size={16} /></Link>
              </div>
            ) : (
              <>
                <div className={styles.panelHead}>
                  <div><span className={styles.kicker}>TASK 01 · PROGRESS 1 OF 1</span><h2 id="task-heading">Verification task</h2></div>
                  <span className={styles.badge}><i className={styles.availableDot} /> Available</span>
                </div>
                <div className={styles.taskMeta}><span><Clock3 size={15} /> Short task</span><span><Sparkles size={15} /> Eligible reward</span></div>
                <div className={styles.instruction}><span className={styles.kicker}>INSTRUCTION</span><strong>Select all shield symbols.</strong><small>{selectedTiles.length} of 2 selected</small></div>
                <div className={styles.tileGrid} role="group" aria-label="Verification task symbols">
                  {symbols.map((symbol, index) => <TaskTile key={index} index={index} symbol={symbol} selected={selectedTiles.includes(index)} disabled={complete} onClick={() => toggleTile(index)} />)}
                </div>
                {feedback && <p className={styles.formError} role="alert">{feedback}</p>}
                <div className={styles.taskFooter}>
                  <span className={styles.small}><ShieldCheck size={15} /> One reward per day · 10 VEs</span>
                  <button className={styles.primaryButton} type="button" onClick={verifyTask} disabled={selectedTiles.length === 0}>Verify selection <ArrowRight size={16} /></button>
                </div>
              </>
            )}
          </section>

          <aside className={styles.sideColumn}>
            <section className={styles.panel} aria-labelledby="how-tasks-heading">
              <div className={styles.panelHead}><div><span className={styles.kicker}>HOW TASKS WORK</span><h2 id="how-tasks-heading">A straightforward process</h2></div><ClipboardCheck size={18} className={styles.accentIcon} /></div>
              <ol className={styles.steps}>
                {['Open a task', 'Follow the instruction', 'Submit your selection', 'Verification completes'].map((step, index) => <li key={step}><span className={styles.stepNumber}>{index + 1}</span><strong>{step}</strong></li>)}
              </ol>
              <div className={styles.subtleNotice}><Sparkles size={16} /><span>Complete the task accurately to add 10 VEs to your Aurex wallet. One completion is allowed per day.</span></div>
            </section>
            <section className={styles.panel} aria-labelledby="task-history-heading">
              <div className={styles.panelHead}><div><span className={styles.kicker}>HISTORY</span><h2 id="task-history-heading">Task history</h2></div></div>
              {complete ? <div className={styles.activityEmpty}><span className={styles.emptyIcon}><Check size={17} /></span><div><strong>Verification task</strong><p>Completed today · 10 VEs credited</p></div></div> : <div className={styles.activityEmpty}><span className={styles.emptyIcon}><ClipboardCheck size={17} /></span><div><strong>No completed tasks</strong><p>Complete the task to earn 10 VEs.</p></div></div>}
            </section>
          </aside>
        </div>
      </div>
    </AppPageShell>
  )
}

export default CaptchaTasksPage
