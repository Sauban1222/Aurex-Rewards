import { useState } from 'react'
import { ArrowRight, Check, CreditCard, Gift, Landmark, Smartphone, Wallet } from 'lucide-react'
import AppPageShell, { workspaceStyles as shell } from '../components/AppPageShell.jsx'
import { useRewards } from '../state/RewardsContext.jsx'
import styles from './Workspace.module.css'

const rewards = [
  { id: 'gift-card', title: 'Digital Gift Card', description: 'Redeem your VEs for a digital reward.', cost: 5, icon: Gift },
  { id: 'wallet', title: 'Digital Wallet Payout', description: 'Choose a supported payout destination.', cost: 10, icon: Wallet },
  { id: 'reward-card', title: 'Premium Reward Card', description: 'Redeem a higher-tier reward.', cost: 20, icon: CreditCard },
]
const payoutMethods = [
  { id: 'upi', label: 'UPI', description: 'UPI payout preference', icon: Smartphone },
  { id: 'paypal', label: 'PayPal', description: 'PayPal payout preference', icon: Wallet },
  { id: 'card', label: 'Credit / debit card', description: 'Card payout preference', icon: CreditCard },
  { id: 'bank', label: 'Bank account', description: 'Bank transfer preference', icon: Landmark },
]

function ExchangeCenterPage() {
  const { ve, redeem } = useRewards()
  const [selectedId, setSelectedId] = useState('')
  const [paymentMethod, setPaymentMethod] = useState('')
  const [stage, setStage] = useState('choose')
  const [error, setError] = useState('')
  const [receipt, setReceipt] = useState(null)
  const selectedReward = rewards.find((reward) => reward.id === selectedId)
  const remainingBalance = selectedReward ? Number((ve - selectedReward.cost).toFixed(2)) : ve

  const chooseReward = (reward) => {
    if (reward.cost > ve) {
      setError(`You need ${reward.cost.toLocaleString('en-US')} VEs. Your current balance is ${ve.toLocaleString('en-US')}.`)
      return
    }
    setSelectedId(reward.id)
    setError('')
  }

  const confirmRedemption = () => {
    if (!selectedReward || !paymentMethod) {
      setError('Select a reward and payout preference to continue.')
      setStage('choose')
      return
    }
    const result = redeem({ amount: selectedReward.cost, reward: selectedReward.title, method: payoutMethods.find((method) => method.id === paymentMethod).label })
    if (!result.ok) {
      setError(result.message)
      setStage('choose')
      return
    }
    setReceipt({ reward: selectedReward.title, amount: selectedReward.cost, method: paymentMethod })
    setError('')
    setStage('complete')
  }

  const reset = () => {
    setStage('choose')
    setSelectedId('')
    setPaymentMethod('')
    setError('')
    setReceipt(null)
  }

  return (
    <AppPageShell title="Exchange Center" category="Reward redemption" description="Choose a reward and payout preference. Your VE balance updates when you confirm." accent="violetGold" icon={Gift}>
      <div className={styles.stack}>
        <section className={styles.redemptionBalance} aria-label="Available VE balance">
          <span className={styles.balanceIcon}><Wallet size={19} /></span>
          <span><small>AVAILABLE TO REDEEM</small><strong>{ve.toLocaleString('en-US', { maximumFractionDigits: 2 })} <em>VEs</em></strong></span>
          <span className={styles.walletBalanceLabel}>Wallet balance</span>
        </section>

        <div className={`${shell.twoColumn} ${styles.exchangeLayout}`}>
          <section className={styles.panel} aria-labelledby="catalog-heading">
            {stage === 'review' && selectedReward ? (
              <div className={styles.redemptionState}>
                <div className={styles.panelHead}><div><span className={styles.kicker}>REDEMPTION REVIEW</span><h2 id="catalog-heading">Check your redemption</h2></div></div>
                <dl className={styles.redemptionDetails}>
                  <div><dt>Reward</dt><dd>{selectedReward.title}</dd></div>
                  <div><dt>Payout preference</dt><dd>{payoutMethods.find((method) => method.id === paymentMethod)?.label}</dd></div>
                  <div><dt>Cost</dt><dd>{selectedReward.cost.toLocaleString('en-US')} VEs</dd></div>
                  <div><dt>Current balance</dt><dd>{ve.toLocaleString('en-US', { maximumFractionDigits: 2 })} VEs</dd></div>
                  <div><dt>Remaining balance</dt><dd>{remainingBalance.toLocaleString('en-US', { maximumFractionDigits: 2 })} VEs</dd></div>
                </dl>
                <div className={styles.subtleNotice}><Wallet size={16} /><span>Confirming deducts VEs from this browser’s wallet. The selected payout preference is not connected to a payment provider; no money or reward will be sent.</span></div>
                {error && <p className={styles.formError} role="alert">{error}</p>}
                <div className={styles.formActions}>
                  <button className={styles.secondaryButton} type="button" onClick={() => setStage('choose')}>Back</button>
                  <button className={styles.primaryButton} type="button" onClick={confirmRedemption}>Confirm redemption <Check size={16} /></button>
                </div>
              </div>
            ) : stage === 'complete' && receipt ? (
              <div className={styles.resultState} role="status">
                <span className={styles.resultIcon}><Check size={22} /></span>
                <span className={styles.kicker}>REDEMPTION COMPLETE</span>
                <h2 id="catalog-heading">{receipt.reward}</h2>
                <p className={styles.resultAmounts}>−{receipt.amount.toLocaleString('en-US')} VEs</p>
                <p className={styles.muted}>Your wallet balance has been updated. The {payoutMethods.find((method) => method.id === receipt.method)?.label} payout preference is not connected and no payment was sent.</p>
                <button className={styles.primaryButton} type="button" onClick={reset}>Browse rewards <ArrowRight size={16} /></button>
              </div>
            ) : (
              <>
                <div className={styles.panelHead}><div><span className={styles.kicker}>REWARD CATALOG</span><h2 id="catalog-heading">Choose a reward</h2></div></div>
                <div className={styles.rewardList} role="group" aria-label="Available rewards">
                  {rewards.map(({ id, title, description, cost, icon: RewardIcon }) => {
                    const selected = selectedId === id
                    const unavailable = cost > ve
                    return (
                      <article className={`${styles.rewardOption} ${selected ? styles.rewardSelected : ''}`} key={id}>
                        <span className={styles.rewardIcon}><RewardIcon size={20} /></span>
                        <span className={styles.rewardCopy}><strong>{title}</strong><small>{description}</small></span>
                        <span className={styles.rewardCost}>{cost.toLocaleString('en-US')} <small>VEs</small></span>
                        <button className={`${selected ? styles.rewardSelectedButton : styles.secondaryButton} ${styles.selectReward}`} type="button" aria-pressed={selected} disabled={unavailable} onClick={() => chooseReward({ id, title, cost })}>{unavailable ? 'Need more VEs' : selected ? <><Check size={14} /> Selected</> : 'Select'}</button>
                      </article>
                    )
                  })}
                </div>
                <div className={styles.payoutBlock}>
                  <div className={styles.panelHead}><div><span className={styles.kicker}>PAYOUT PREFERENCE</span><h2>Choose a destination</h2></div></div>
                  <div className={styles.paymentOptions}>
                    {payoutMethods.map(({ id, label, description, icon: MethodIcon }) => (
                      <label className={`${styles.paymentOption} ${paymentMethod === id ? styles.paymentOptionSelected : ''}`} key={id}>
                        <input type="radio" name="payout-method" value={id} checked={paymentMethod === id} onChange={() => { setPaymentMethod(id); setError('') }} />
                        <MethodIcon size={18} />
                        <span><strong>{label}</strong><small>{description}</small></span>
                      </label>
                    ))}
                  </div>
                </div>
                {error && <p className={styles.formError} role="alert">{error}</p>}
                <p className={styles.exchangeInfo}>Payout destinations are preferences only. No card, bank, UPI, or PayPal details are requested or stored.</p>
              </>
            )}
          </section>

          <aside className={styles.sideColumn}>
            <section className={styles.panel} aria-labelledby="summary-heading">
              <div className={styles.panelHead}><div><span className={styles.kicker}>REDEMPTION SUMMARY</span><h2 id="summary-heading">Your selection</h2></div><Gift size={18} className={styles.accentIcon} /></div>
              {selectedReward ? (
                <>
                  <div className={styles.selectedReward}>
                    <span className={styles.rewardIcon}><selectedReward.icon size={18} /></span>
                    <span><small>SELECTED REWARD</small><strong>{selectedReward.title}</strong></span>
                  </div>
                  <dl className={styles.quoteDetails}>
                    <div><dt>Cost</dt><dd>{selectedReward.cost.toLocaleString('en-US')} VEs</dd></div>
                    <div><dt>Balance after redemption</dt><dd>{remainingBalance.toLocaleString('en-US', { maximumFractionDigits: 2 })} VEs</dd></div>
                    <div><dt>Payout preference</dt><dd>{payoutMethods.find((method) => method.id === paymentMethod)?.label || 'Not selected'}</dd></div>
                  </dl>
                </>
              ) : <div className={styles.emptySummary}><Gift size={18} /><span>Choose a reward that fits your available VE balance.</span></div>}
              {stage === 'choose' && <button className={styles.primaryButton} type="button" disabled={!selectedReward || !paymentMethod} onClick={() => setStage('review')}>Review redemption <ArrowRight size={16} /></button>}
              {stage === 'review' && <div className={styles.subtleNotice}><Check size={16} /><span>Review the reward and balance before confirming.</span></div>}
              {stage === 'complete' && <div className={styles.subtleNotice}><Check size={16} /><span>Your updated wallet balance is {ve.toLocaleString('en-US', { maximumFractionDigits: 2 })} VEs.</span></div>}
            </section>
            <section className={styles.panel} aria-labelledby="redemption-help-heading">
              <div className={styles.panelHead}><div><span className={styles.kicker}>REDEMPTION</span><h2 id="redemption-help-heading">Before you confirm</h2></div></div>
              <ol className={styles.steps}>
                {['Choose an available reward', 'Select a payout preference', 'Review and confirm'].map((step, index) => <li key={step}><span className={styles.stepNumber}>{index + 1}</span><strong>{step}</strong></li>)}
              </ol>
            </section>
          </aside>
        </div>
      </div>
    </AppPageShell>
  )
}

export default ExchangeCenterPage
