import { useState } from 'react'
import { ArrowRight, BadgeCheck, Check, CheckCircle2, Clock3, Keyboard, RotateCw, ShieldCheck, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'
import AppPageShell from '../components/AppPageShell.jsx'
import { CAPTCHA_TASK_COUNT, CAPTCHA_TASK_REWARD, getRewardDayKey, useRewards } from '../state/RewardsContext.jsx'
import styles from './CaptchaTasks.module.css'

const CAPTCHA_ALPHABET = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789'

function createChallenge() {
  const random = window.crypto.getRandomValues(new Uint8Array(15))
  const code = Array.from(random.slice(0, 5), (value) => CAPTCHA_ALPHABET[value % CAPTCHA_ALPHABET.length]).join('')
  return { code, noise: Array.from(random.slice(5)) }
}

function CaptchaImage({ challenge }) {
  return (
    <svg className={styles.captchaImage} viewBox="0 0 360 112" role="img" aria-label={`Sample CAPTCHA code: ${challenge.code}`}>
      <defs>
        <linearGradient id="captcha-surface" x1="0" y1="0" x2="1" y2="1">
          <stop stopColor="#182844" />
          <stop offset="1" stopColor="#25243d" />
        </linearGradient>
      </defs>
      <rect x="1" y="1" width="358" height="110" rx="14" fill="url(#captcha-surface)" stroke="#58648d" strokeOpacity=".65" />
      {challenge.noise.slice(0, 5).map((value, index) => (
        <path
          key={`line-${index}`}
          d={`M${12 + (value % 70) * 4} ${16 + index * 17} Q${80 + (value % 60) * 3} ${92 - index * 8} ${330 - (value % 70) * 3} ${22 + index * 13}`}
          fill="none"
          stroke={index % 2 ? '#8a83ed' : '#63c9e2'}
          strokeOpacity=".2"
          strokeWidth="2"
        />
      ))}
      {challenge.code.split('').map((character, index) => {
        const rotation = (challenge.noise[index] % 19) - 9
        const y = 68 + (challenge.noise[index + 5] % 13) - 6
        return (
          <text
            key={`${character}-${index}`}
            x={48 + index * 66}
            y={y}
            transform={`rotate(${rotation} ${48 + index * 66} ${y})`}
            fill={index % 2 ? '#b5b7ff' : '#b7e5f4'}
            fontFamily="ui-monospace, SFMono-Regular, Consolas, monospace"
            fontSize="39"
            fontWeight="700"
            textAnchor="middle"
          >
            {character}
          </text>
        )
      })}
      {challenge.noise.slice(5, 10).map((value, index) => (
        <circle key={`dot-${index}`} cx={18 + (value % 105) * 3} cy={22 + index * 16} r="2" fill="#d9d9ff" fillOpacity=".34" />
      ))}
    </svg>
  )
}

function CaptchaTasksPage() {
  const { captchaProgressOn, captchaTasksCompleted, completeCaptcha, activity } = useRewards()
  const today = getRewardDayKey()
  const completedCount = captchaProgressOn === today ? captchaTasksCompleted : 0
  const currentTask = completedCount + 1
  const finished = completedCount >= CAPTCHA_TASK_COUNT
  const [challenge, setChallenge] = useState(createChallenge)
  const [answer, setAnswer] = useState('')
  const [result, setResult] = useState(null)
  const [error, setError] = useState('')

  const todaysCaptchaActivity = activity.filter((item) => (
    item.type === 'earn'
    && item.title.startsWith('Captcha entry ')
    && getRewardDayKey(new Date(item.createdAt)) === today
  ))
  const todaysCaptchaEarnings = todaysCaptchaActivity.reduce((total, item) => total + item.amount, 0)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (result || finished) return

    const isCorrect = answer.trim().toUpperCase() === challenge.code
    const completion = completeCaptcha(currentTask, isCorrect)
    if (!completion.ok) {
      setError('Your task progress changed. Reload the page to continue with the next task.')
      return
    }
    setError('')
    setResult({ isCorrect, reward: completion.reward, task: currentTask })
  }

  const handleNext = () => {
    setAnswer('')
    setError('')
    setResult(null)
    setChallenge(createChallenge())
  }

  return (
    <AppPageShell
      title="Captcha Tasks"
      category="Earn VEs · Verification tasks"
      description={`Complete up to ${CAPTCHA_TASK_COUNT} short CAPTCHA tasks today. Each correct answer earns ${CAPTCHA_TASK_REWARD} VEs.`}
      accent="teal"
      icon={ShieldCheck}
    >
      <div className={styles.workspace}>
        <section className={styles.stats} aria-label="Today’s CAPTCHA progress">
          {[
            ['Tasks remaining', String(CAPTCHA_TASK_COUNT - completedCount)],
            ['Submitted today', `${completedCount}/${CAPTCHA_TASK_COUNT}`],
            ['Correct answers', String(todaysCaptchaActivity.length)],
            ['Earned today', `${todaysCaptchaEarnings} VEs`],
          ].map(([label, value]) => (
            <div className={styles.stat} key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
            </div>
          ))}
        </section>

        <div className={styles.columns}>
          <section className={styles.taskPanel} aria-labelledby="captcha-challenge-title">
            <header className={styles.taskHeader}>
              <div className={styles.taskIcon}><Keyboard size={18} aria-hidden="true" /></div>
              <div className={styles.taskHeading}>
                <span className={styles.kicker}>DAILY CAPTCHA</span>
                <h2 id="captcha-challenge-title">{finished ? 'Today’s tasks complete' : `Task ${currentTask} of ${CAPTCHA_TASK_COUNT}`}</h2>
              </div>
              <span className={styles.rewardBadge}><Sparkles size={14} aria-hidden="true" />{CAPTCHA_TASK_REWARD} VEs</span>
            </header>

            <div className={styles.progressTrack} role="progressbar" aria-label="Daily task progress" aria-valuemin="0" aria-valuemax={CAPTCHA_TASK_COUNT} aria-valuenow={completedCount}>
              <span style={{ width: `${(completedCount / CAPTCHA_TASK_COUNT) * 100}%` }} />
            </div>
            <div className={styles.progressCaption}>
              <span>{completedCount} of {CAPTCHA_TASK_COUNT} tasks submitted</span>
              <span>{CAPTCHA_TASK_COUNT - completedCount} remaining</span>
            </div>

            {finished ? (
              <div className={styles.completeState} role="status">
                <span className={styles.completeIcon}><CheckCircle2 size={23} aria-hidden="true" /></span>
                <div>
                  <strong>You’ve finished all 10 tasks today</strong>
                  <p>You answered {todaysCaptchaActivity.length} correctly and earned {todaysCaptchaEarnings} VEs. Come back tomorrow for a new set.</p>
                </div>
              </div>
            ) : result ? (
              <div className={`${styles.resultState} ${result.isCorrect ? styles.resultCorrect : styles.resultWrong}`} role="status">
                <span className={styles.resultIcon}>{result.isCorrect ? <CheckCircle2 size={22} aria-hidden="true" /> : <RotateCw size={20} aria-hidden="true" />}</span>
                <div className={styles.resultCopy}>
                  <strong>{result.isCorrect ? `Correct — +${result.reward} VEs` : 'Not quite — 0 VEs'}</strong>
                  <p>{result.isCorrect ? 'Your reward was added to your preview VE balance.' : 'This task is submitted with no reward. Continue to the next CAPTCHA.'}</p>
                </div>
                <button className={styles.primaryButton} type="button" onClick={handleNext}>
                  {result.task === CAPTCHA_TASK_COUNT ? 'View summary' : 'Next task'}
                  <ArrowRight size={16} aria-hidden="true" />
                </button>
              </div>
            ) : (
              <form className={styles.answerForm} onSubmit={handleSubmit}>
                <label className={styles.instruction} htmlFor="captcha-answer">
                  <span>Type the characters shown</span>
                  <small>Letters are not case-sensitive</small>
                </label>
                <CaptchaImage challenge={challenge} />
                <div className={styles.inputRow}>
                  <input
                    id="captcha-answer"
                    name="captcha-answer"
                    type="text"
                    value={answer}
                    onChange={(event) => setAnswer(event.target.value)}
                    placeholder="Enter the 5 characters"
                    autoComplete="off"
                    autoCapitalize="characters"
                    spellCheck="false"
                    maxLength={5}
                    required
                    aria-describedby={error ? 'captcha-error captcha-preview-note' : 'captcha-preview-note'}
                  />
                  <button className={styles.primaryButton} type="submit">
                    Submit answer
                    <ArrowRight size={16} aria-hidden="true" />
                  </button>
                </div>
                {error && <p className={styles.error} id="captcha-error" role="alert">{error}</p>}
                <p className={styles.previewNote} id="captcha-preview-note"><ShieldCheck size={14} aria-hidden="true" />This is a browser preview challenge, not a security verification.</p>
              </form>
            )}
          </section>

          <aside className={styles.sidePanel}>
            <section className={styles.infoPanel} aria-labelledby="how-captcha-works">
              <span className={styles.kicker}>HOW IT WORKS</span>
              <h2 id="how-captcha-works">One at a time</h2>
              <ol className={styles.steps}>
                <li><span>01</span><p>Read the characters in the image</p></li>
                <li><span>02</span><p>Enter your answer and submit</p></li>
                <li><span>03</span><p>Correct earns 10 VEs; incorrect earns 0</p></li>
              </ol>
              <p className={styles.dailyLimit}><Clock3 size={15} aria-hidden="true" />10 tasks available per day</p>
            </section>

            <section className={styles.infoPanel} aria-labelledby="captcha-history-title">
              <div className={styles.historyHead}>
                <div><span className={styles.kicker}>TODAY</span><h2 id="captcha-history-title">Your results</h2></div>
                <BadgeCheck size={18} aria-hidden="true" />
              </div>
              {todaysCaptchaActivity.length ? (
                <ul className={styles.historyList}>
                  {todaysCaptchaActivity.map((item) => (
                    <li key={item.id}>
                      <span className={styles.historyCheck}><Check size={14} aria-hidden="true" /></span>
                      <span>Task {item.title.replace('Captcha entry ', '')}</span>
                      <strong>+{item.amount} VEs</strong>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className={styles.emptyHistory}>Correct answers and VE credits will show here.</p>
              )}
            </section>
          </aside>
        </div>

        <Link className={styles.walletLink} to="/wallet">View wallet activity <ArrowRight size={15} aria-hidden="true" /></Link>
      </div>
    </AppPageShell>
  )
}

export default CaptchaTasksPage
