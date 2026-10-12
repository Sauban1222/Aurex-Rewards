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
    const email = String(form.get('email') || '').trim().toLowerCase()
    const password = String(form.get('password') || '')
    try {
      const result = isRegistering
        ? await registerAccount({
          name: String(form.get('name') || '').trim(),
          username: String(form.get('username') || '').trim(),
          mobile: String(form.get('mobile') || '').trim(),
          email,
          referredBy: String(form.get('referralCode') || '').trim().toUpperCase(),
        }, password)
        : await loginAccount(email, password)
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
      console.error('Unable to authenticate this local account.', error)
      setMessage(error.message || 'Unable to continue. Please try again.')
    }
  }

  return (
    <main className={styles.page}>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <div className={styles.topbar}>
        <Logo />
        <span className={styles.backLink}>{isRegistering ? 'Create your Aurex account' : 'Secure account access'}</span>
      </div>

      <section id="main-content" className={`${styles.layout} ${isRegistering ? styles.registerLayout : ''}`} aria-labelledby="login-title" tabIndex="-1">
        <div className={styles.intro}>
          <span className={styles.eyebrow}>{isRegistering ? 'JOIN AUREX' : 'WELCOME BACK'}</span>
          <h1 id="login-title">{isRegistering ? 'Good things start here.' : 'Your rewards are waiting.'}</h1>
          <p>{isRegistering ? 'Create your account to discover new ways to earn, swap, and redeem.' : 'Sign in to pick up where you left off and keep your rewards moving.'}</p>
        </div>

        <div className={styles.formPanel}>
          <span className={styles.formEyebrow}>{isRegistering ? 'CREATE YOUR ACCOUNT' : 'YOUR ACCOUNT'}</span>
          <h2>{isRegistering ? 'Join Aurex' : 'Log in to Aurex'}</h2>
          <p className={styles.formCopy}>{isRegistering ? 'Preview only: account credentials and wallet balances are saved in this browser; no real rewards or transactions are sent.' : 'This demo account is stored in this browser and is not connected to an online account.'}</p>
          {isRegistering && <p className={styles.bonusNotice}>Preview welcome reward <strong>+200 VEs</strong> (sample value for this browser demo).</p>}
          <form className={styles.form} onSubmit={handleSubmit}>
            {isRegistering ? (
              <div className={styles.registrationFields}>
                <div className={styles.field}>
                  <label htmlFor="aurex-full-name">Full name</label>
                  <input id="aurex-full-name" name="name" type="text" autoComplete="name" placeholder="Your full name" maxLength={100} required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="aurex-username">Username</label>
                  <input id="aurex-username" name="username" type="text" autoComplete="username" placeholder="Choose a username" minLength={3} maxLength={24} pattern="[A-Za-z0-9_]{3,24}" title="Use 3–24 letters, numbers, or underscores." required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="aurex-mobile">Mobile number</label>
                  <input id="aurex-mobile" name="mobile" type="tel" autoComplete="tel" placeholder="+1 555 123 4567" minLength={7} maxLength={24} required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="aurex-register-email">Email address</label>
                  <input id="aurex-register-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                </div>
                <div className={styles.field}>
                  <label htmlFor="aurex-referral-code">Referral code <span>(optional)</span></label>
                  <input id="aurex-referral-code" name="referralCode" type="text" autoComplete="off" placeholder="Enter a friend's code" defaultValue={referralCode} maxLength={20} />
                </div>
                <div className={`${styles.field} ${styles.fullWidth}`}>
                  <label htmlFor="aurex-register-password">Password</label>
                  <div className={styles.passwordInput}>
                    <input id="aurex-register-password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="new-password" placeholder="Create a password" minLength={8} required />
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
                  <span className={styles.fieldHint}>Use at least 8 characters.</span>
                </div>
              </div>
            ) : (
              <>
                <div className={styles.field}>
                  <label htmlFor="aurex-email">Email address</label>
                  <input id="aurex-email" name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
                </div>

                <div className={styles.field}>
                  <div className={styles.passwordLabel}>
                    <label htmlFor="aurex-password">Password</label>
                    <button type="button" onClick={() => setMessage('Password reset is unavailable for browser-stored accounts.')}>
                      Forgot password?
                    </button>
                  </div>
                  <div className={styles.passwordInput}>
                    <input id="aurex-password" name="password" type={showPassword ? 'text' : 'password'} autoComplete="current-password" placeholder="Enter your password" required />
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
                <label className={styles.remember}>
                  <input type="checkbox" name="remember" />
                  <span>Remember me</span>
                </label>
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
      <footer className={styles.footer}>© 2026 Aurex Rewards <span>Account details are stored on this device</span></footer>
    </main>
  )
}

export default LoginPage
