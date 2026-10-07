import { useState } from 'react'
import Icon from '../components/Icon.jsx'
import styles from './SwapCenter.module.css'

const assets = [
  { id: 've', name: 'Aurex VEs', symbol: 'VE', balance: 1260, tone: 'blue', units: 1 },
  { id: 'credits', name: 'Partner credits', symbol: 'PC', balance: 840, tone: 'violet', units: 1.25 },
]

const formatAmount = (value) => new Intl.NumberFormat('en-US', {
  minimumFractionDigits: 0,
  maximumFractionDigits: 2,
}).format(value)

function SwapCenterPage() {
  const [fromId, setFromId] = useState('ve')
  const [toId, setToId] = useState('credits')
  const [amount, setAmount] = useState('100')
  const [stage, setStage] = useState('edit')
  const [error, setError] = useState('')
  const [activity, setActivity] = useState(null)
  const [notice, setNotice] = useState('')

  const fromAsset = assets.find((asset) => asset.id === fromId)
  const toAsset = assets.find((asset) => asset.id === toId)
  const numericAmount = Number(amount)
  const rate = toAsset.units / fromAsset.units
  const estimatedOutput = Number.isFinite(numericAmount) ? numericAmount * rate : 0
  const isAmountValid = numericAmount > 0 && numericAmount <= fromAsset.balance

  const setPair = (nextFromId, nextToId) => {
    setFromId(nextFromId)
    setToId(nextToId)
    setAmount('')
    setStage('edit')
    setError('')
    setNotice('')
  }

  const reviewSwap = (event) => {
    event.preventDefault()
    if (!isAmountValid) {
      setError(numericAmount > fromAsset.balance
        ? `The sample ${fromAsset.symbol} balance is ${formatAmount(fromAsset.balance)}.`
        : 'Enter an amount greater than zero.')
      return
    }
    setError('')
    setStage('review')
    setNotice('')
  }

  const confirmDemoSwap = () => {
    setActivity({
      input: numericAmount,
      output: estimatedOutput,
      from: fromAsset,
      to: toAsset,
    })
    setStage('complete')
    setNotice('Demo swap complete. No balances were changed.')
  }

  const resetSwap = () => {
    setStage('edit')
    setError('')
    setNotice('')
  }

  const switchPair = () => setPair(toId, fromId)

  return (
    <div id="swap" className={`app-shell ${styles.page}`}>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="brand" href="/" aria-label="Aurex Rewards home">
            <img className="brand-logo" src="/aurex-logo.svg" alt="" width="150" height="42" />
          </a>
          <nav className={`main-nav ${styles.nav}`} aria-label="Main navigation">
            <a className="nav-link" href="/">Overview</a>
            <a className="nav-link" href="/refer">Refer &amp; Earn</a>
            <a className="nav-link" href="/exchange">Redeem</a>
          </nav>
          <a className="login-link" href="/login">Log in</a>
        </div>
      </header>

      <main className={styles.content}>
        <nav className={styles.breadcrumb} aria-label="Breadcrumb">
          <a href="/">Overview</a><span>/</span><span aria-current="page">Swap Center</span>
        </nav>

        <section className={styles.heading}>
          <div>
            <span className={styles.eyebrow}><Icon name="swap" size={15} /> BALANCE CONVERSION</span>
            <h1>Swap Center</h1>
            <p>Convert between supported reward balances with a clear quote before you continue.</p>
          </div>
          <span className={styles.previewBadge}><span /> DEMO PREVIEW</span>
        </section>

        <div className={styles.layout}>
          <section className={styles.swapPanel} aria-labelledby="swap-form-heading">
            <div className={styles.panelHeading}>
              <div>
                <span className={styles.panelKicker}>CONVERSION</span>
                <h2 id="swap-form-heading">{stage === 'review' ? 'Review your swap' : stage === 'complete' ? 'Swap preview complete' : 'Choose balances'}</h2>
              </div>
              <span className={styles.secureMark}><Icon name="shield" size={15} /> No wallet connection</span>
            </div>

            <form onSubmit={reviewSwap} noValidate>
              <div className={styles.assetCard}>
                <div className={styles.assetTop}>
                  <label htmlFor="swap-from">You send</label>
                  <span>Sample balance: {formatAmount(fromAsset.balance)} {fromAsset.symbol}</span>
                </div>
                <div className={styles.assetInputRow}>
                  <input
                    id="swap-amount"
                    aria-label={`Amount of ${fromAsset.name} to swap`}
                    className={styles.amountInput}
                    type="number"
                    inputMode="decimal"
                    min="0.01"
                    max={fromAsset.balance}
                    step="0.01"
                    value={amount}
                    onChange={(event) => { setAmount(event.target.value); setStage('edit'); setError(''); setNotice('') }}
                    disabled={stage !== 'edit'}
                  />
                  <label className={styles.srOnly} htmlFor="swap-from">Asset to swap from</label>
                  <span className={`${styles.assetIcon} ${styles[fromAsset.tone]}`} aria-hidden="true">{fromAsset.symbol === 'VE' ? 'V' : '✦'}</span>
                  <select id="swap-from" value={fromId} disabled={stage !== 'edit'} onChange={(event) => setPair(event.target.value, event.target.value === toId ? fromId : toId)}>
                    {assets.map((asset) => <option key={asset.id} value={asset.id}>{asset.symbol} · {asset.name}</option>)}
                  </select>
                </div>
                <button className={styles.maxButton} type="button" disabled={stage !== 'edit'} onClick={() => { setAmount(String(fromAsset.balance)); setError('') }}>MAX</button>
              </div>

              <div className={styles.switchRow}>
                <span />
                <button className={styles.switchButton} type="button" aria-label="Switch conversion direction" onClick={switchPair} disabled={stage !== 'edit'}>
                  <Icon name="swap" size={18} />
                </button>
                <span />
              </div>

              <div className={`${styles.assetCard} ${styles.receiveCard}`}>
                <div className={styles.assetTop}>
                  <label htmlFor="swap-to">You receive (estimated)</label>
                  <span>Sample balance: {formatAmount(toAsset.balance)} {toAsset.symbol}</span>
                </div>
                <div className={styles.assetInputRow}>
                  <output className={styles.outputAmount} htmlFor="swap-amount">{formatAmount(estimatedOutput)}</output>
                  <span className={`${styles.assetIcon} ${styles[toAsset.tone]}`} aria-hidden="true">{toAsset.symbol === 'VE' ? 'V' : '✦'}</span>
                  <label className={styles.srOnly} htmlFor="swap-to">Asset to swap to</label>
                  <select id="swap-to" value={toId} disabled={stage !== 'edit'} onChange={(event) => setPair(fromId, event.target.value === fromId ? toId : event.target.value)}>
                    {assets.map((asset) => <option key={asset.id} value={asset.id}>{asset.symbol} · {asset.name}</option>)}
                  </select>
                </div>
              </div>

              <div className={styles.rateRow}>
                <span><Icon name="swap" size={14} /> Indicative sample rate</span>
                <strong>1 {fromAsset.symbol} ≈ {formatAmount(rate)} {toAsset.symbol}</strong>
              </div>

              {error && <p className={styles.error} role="alert">{error}</p>}

              {stage === 'edit' && (
                <button className={styles.primaryButton} type="submit" disabled={!amount || numericAmount <= 0 || numericAmount > fromAsset.balance}>
                  Review demo swap <Icon name="arrow" size={17} />
                </button>
              )}
              {stage === 'review' && (
                <div className={styles.actions}>
                  <button className={styles.secondaryButton} type="button" onClick={resetSwap}>Edit amount</button>
                  <button className={styles.primaryButton} type="button" onClick={confirmDemoSwap}>Confirm demo swap <Icon name="check" size={17} /></button>
                </div>
              )}
              {stage === 'complete' && (
                <button className={styles.primaryButton} type="button" onClick={resetSwap}>Start another demo swap <Icon name="arrow" size={17} /></button>
              )}
            </form>

            {notice && <p className={styles.notice} role="status" aria-live="polite"><Icon name="check" size={15} />{notice}</p>}
          </section>

          <aside className={styles.sideColumn}>
            <section className={styles.summaryCard} aria-labelledby="summary-heading">
              <div className={styles.summaryHeader}>
                <span className={styles.summaryIcon}><Icon name="wallet" size={18} /></span>
                <div><span className={styles.panelKicker}>QUOTE DETAILS</span><h2 id="summary-heading">Your estimate</h2></div>
              </div>
              <div className={styles.summaryAmounts}>
                <div><span>You send</span><strong>{formatAmount(numericAmount || 0)} <small>{fromAsset.symbol}</small></strong></div>
                <Icon name="arrow" size={18} />
                <div><span>Estimated receive</span><strong>{formatAmount(estimatedOutput)} <small>{toAsset.symbol}</small></strong></div>
              </div>
              <div className={styles.summaryLine}><span>Sample rate</span><strong>1 {fromAsset.symbol} ≈ {formatAmount(rate)} {toAsset.symbol}</strong></div>
              <div className={styles.summaryLine}><span>Rate source</span><strong>Illustrative only</strong></div>
              <div className={styles.summaryLine}><span>Transaction fee</span><strong>Not calculated</strong></div>
              <p className={styles.estimateNote}>This estimate uses a fixed example rate. It is not a live market quote or a promise of value.</p>
            </section>

            <section className={styles.noticeCard} aria-labelledby="preview-heading">
              <span className={styles.noticeIcon}><Icon name="shield" size={18} /></span>
              <h2 id="preview-heading">Preview mode</h2>
              <p>These balances and rates are examples. Aurex is not connected to a swap provider, and confirming will not move funds or update your account.</p>
            </section>

            <section className={styles.activityCard} aria-labelledby="activity-heading">
              <div className={styles.activityHeading}><span className={styles.panelKicker}>RECENT ACTIVITY</span><h2 id="activity-heading">Swap history</h2></div>
              {activity ? (
                <div className={styles.activityItem}>
                  <span className={styles.activityIcon}><Icon name="check" size={16} /></span>
                  <div><strong>Demo conversion</strong><span>{formatAmount(activity.input)} {activity.from.symbol} → {formatAmount(activity.output)} {activity.to.symbol}</span></div>
                  <small>Just now</small>
                </div>
              ) : (
                <p className={styles.emptyActivity}>Your demo swap history will appear here after a preview confirmation.</p>
              )}
            </section>
          </aside>
        </div>

        <footer className={styles.footer}>
          <a href="/"><span className={styles.footerLogo}>A</span> Aurex Rewards</a>
          <span>Sample interface · No real conversions are processed</span>
          <span>© 2026 Aurex Rewards</span>
        </footer>
      </main>
    </div>
  )
}

export default SwapCenterPage