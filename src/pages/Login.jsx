import { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import Logo from '../components/Logo/Logo.jsx'
import { useRewards } from '../state/RewardsContext.jsx'
import styles from './Login.module.css'

function LoginPage() {
  const navigate = useNavigate()
  const location = useLocation()
  const { registerAccount, loginAccount } = useRewards()
  const [showPassword, setShowPassword] = useState(false)
  const [message, setMessage] = useState('')
  const searchParams = new URLSearchParams(location.search)
  const referralCode = searchParams.get('ref')?.trim().toUpperCase() || ''
  const isRegistering = searchParams.get('mode') !== 'signin'
  const modeHref = isRegistering
    ? '/login?mode=signin'
    : referralCode
      ? `/login?ref=${encodeURIComponent(referralCode)}`
      : '/login'

  const handleSubmit = async (event) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const username = String(form.get('username') || '').trim()
    const password = String(form.get('password') || '')
    try {
      const result = isRegistering
        ? await registerAccount({
          name: String(form.get('username') || '').trim(),
          username,
          referredBy: String(form.get('referralCode') || '').trim().toUpperCase(),
        }, password)
        : await loginAccount(username, password)
      if (!result.ok) {
        setMessage(result.message)
        return
      }
      const destination = location.state?.from
      const target = !isRegistering && destination
        ? `${destination.pathname || '/'}${destination.search || ''}${destination.hash || ''}`
        : '/'
      navigate(target, { replace: true })
    } catch (error) {
      console.error('Unable to continue with this preview account.', error)
      setMessage(error.message || 'Unable to continue. Please try again.')
    }
  }

  return (
    <main className={styles.page}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className={styles.topbar}>
        <Logo />
        <span className={styles.backLink}>{isRegistering ? 'Create your Aurex preview' : 'Preview account access'}</span>
      </div>

      <section id="main-content" className={`${styles.layout} ${isRegistering ? styles.registerLayout : ''}`} aria-labelledby="login-title" tabIndex="-1">
        <div className={styles.intro}>
          <span className={styles.eyebrow}>{isRegistering ? 'JOIN AUREX' : 'WELCOME BACK'}</span>
          <h1 id="login-title">{isRegistering ? 'Good things start here.' : 'Your rewards are waiting.'}</h1>
          <p>{isRegistering ? 'Create a preview to explore ways to earn, swap, and redeem.' : 'Return to your preview in this browser tab.'}</p>
        </div>

        <div className={styles.formPanel}>
          <span className={styles.formEyebrow}>{isRegistering ? 'CREATE YOUR ACCOUNT' : 'YOUR ACCOUNT'}</span>
          <h2>{isRegistering ? 'Join Aurex' : 'Log in to Aurex'}</h2>
          <p className={styles.formCopy}>Demo only: this preview is stored in this browser tab and is not an online account. Use a made-up username and password; do not enter real personal information or a password you use elsewhere. No real rewards or transactions are sent.</p>
          {isRegistering && <p className={styles.bonusNotice}>Preview welcome reward <strong>+200 VEs</strong> (sample value for this browser demo).</p>}
          <form className={styles.form} onSubmit={handleSubmit}>
            {isRegistering ? (
              <div className={styles.registrationFields}>
                <div className={styles.field}>
                  <label htmlFor="aurex-username">Username</label>
                  <input id="aurex-username" name="username" type="text" autoComplete="username" placeholder="Choose a username" minLength={3} maxLength={24} pattern="[A-Za-z0-9_]{3,24}" title="Use 3–24 letters, numbers, or underscores." required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="aurex-referral-code">Referral code <span>(optional)</span></label>
                  <input id="aurex-referral-code" name="referralCode" type="text" autoComplete="off" placeholder="Enter a friend's code" defaultValue={referralCode} maxLength={20} />
                </div>
                <div className={`${styles.field} ${styles.fullWidth}`}>
                  <label htmlFor="aurex-register-password">Demo password</label>
                  <div className={styles.passwordInput}>
                    <input id="aurex-register-password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" placeholder="Create a made-up password" minLength={8} required />
                    <button
                      className={styles.showPassword}
                      type="button"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      aria-pressed={showPassword}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                  <span className={styles.fieldHint}>Use at least 8 characters. Do not reuse a real password.</span>
                </div>
              </div>
            ) : (
              <>
                <div className={styles.field}>
                  <label htmlFor="aurex-email">Username</label>
                  <input id="aurex-email" name="username" type="text" autoComplete="username" placeholder="Your preview username" required />
                </div>

                <div className={styles.field}>
                  <div className={styles.passwordLabel}>
                    <label htmlFor="aurex-password">Demo password</label>
                  </div>
                  <div className={styles.passwordInput}>
                    <input id="aurex-password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Your made-up password" required />
                    <button
                      className={styles.showPassword}
                      type="button"
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      aria-pressed={showPassword}
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </button>
                  </div>
                </div>
              </>
            )}

            <button className={styles.submit} type="submit">{isRegistering ? 'Create account' : 'Log in'}</button>
            <p className={styles.notice} role="status" aria-live="polite">{message}</p>
          </form>
          <p className={styles.signup}>
            {isRegistering ? 'Already have an account?' : 'New to Aurex?'}
            <Link className={styles.modeLink} to={modeHref} onClick={() => {
              setMessage('')
              setShowPassword(false)
            }}>
              {isRegistering ? 'Log in' : 'Create an account'}
            </Link>
          </p>
        </div>
      </section>
      <footer className={styles.footer}>© 2026 Aurex Rewards <span>Demo details stay in this browser tab</span></footer>
    </main>
  )
}

export default LoginPage
