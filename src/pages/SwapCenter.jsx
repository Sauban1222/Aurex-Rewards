import { useState } from 'react'
import { ArrowDownUp, ArrowRightLeft, Check, HelpCircle, ShieldCheck, Wallet } from 'lucide-react'
import AppPageShell, { workspaceStyles as shell } from '../components/AppPageShell.jsx'
import { useRewards } from '../state/RewardsContext.jsx'
import styles from './Workspace.module.css'

const RATE_VE_TO_SVE = 0.65
const assets = [
  { id: 've', name: 'Aurex VEs', symbol: 'VE' },
  { id: 'sve', name: 'SVE Balance', symbol: 'SVE' },
]
const formatAmount = (value) => new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(value)

function SwapCenterPage() {
  const { ve, sve, swap } = useRewards()
  const [fromId, setFromId] = useState('ve')
  const [toId, setToId] = useState('sve')
  const [amount, setAmount] = useState('')
  const [stage, setStage] = useState('edit')
  const [error, setError] = useState('')
  const [receipt, setReceipt] = useState(null)
  const balances = { ve, sve }
  const fromAsset = assets.find((asset) => asset.id === fromId)
  const toAsset = assets.find((asset) => asset.id === toId)
  const numericAmount = Number(amount)
  const rate = fromId === 've' ? RATE_VE_TO_SVE : 1 / RATE_VE_TO_SVE
  const estimatedOutput = Number.isFinite(numericAmount) ? Number((numericAmount * rate).toFixed(2)) : 0
  const isAmountValid = numericAmount > 0 && numericAmount <= balances[fromId]

  const setPair = (nextFromId, nextToId) => {
    setFromId(nextFromId)
    setToId(nextToId)
    setAmount('')
    setStage('edit')
    setError('')
    setReceipt(null)
  }

  const reviewSwap = (event) => {
    event.preventDefault()
    if (!isAmountValid) {
      setError(numericAmount > balances[fromId]
        ? `Your available balance is ${formatAmount(balances[fromId])} ${fromAsset.symbol}.`
        : 'Enter an amount greater than zero.')
      return
    }
    setError('')
    setStage('review')
  }

  const confirmSwap = () => {
    const result = swap({ from: fromId, amount: numericAmount, output: estimatedOutput })
    if (!result.ok) {
      setError(result.message)
      setStage('edit')
      return
    }
    setReceipt({ input: numericAmount, output: estimatedOutput, from: fromAsset, to: toAsset })
    setError('')
    setStage('complete')
  }

  const resetSwap = () => {
    setStage('edit')
    setAmount('')
    setError('')
    setReceipt(null)
  }

  return (
    <AppPageShell title="Swap Center" category="Balance conversion" description="Convert between VE and SVE wallet balances at the displayed rate." accent="cyan" icon={ArrowDownUp}>
      <div className={shell.twoColumn}>
        <section className={styles.panel} aria-labelledby="swap-heading">
          {stage === 'complete' && receipt ? (
            <div className={styles.resultState} role="status">
              <span className={styles.resultIcon}><Check size={22} /></span>
              <span className={styles.kicker}>WALLET UPDATED</span>
              <h2 id="swap-heading">Conversion complete</h2>
              <p className={styles.resultAmounts}>{formatAmount(receipt.input)} {receipt.from.symbol} <ArrowRightLeft size={18} /> {formatAmount(receipt.output)} {receipt.to.symbol}</p>
              <p className={styles.muted}>Your balances and wallet activity have been updated in this browser.</p>
              <button className={styles.primaryButton} type="button" onClick={resetSwap}>Make another conversion</button>
            </div>
          ) : (
            <>
              <div className={styles.panelHead}>
                <div><span className={styles.kicker}>WALLET CONVERSION</span><h2 id="swap-heading">{stage === 'review' ? 'Review conversion' : 'Choose balances'}</h2></div>
                <span className={styles.badge}><Wallet size={14} /> Aurex wallet</span>
              </div>
              <form className={styles.swapForm} onSubmit={reviewSwap} noValidate>
                <div className={styles.assetInput}>
                  <div className={styles.assetLabel}><label htmlFor="swap-amount">You send</label><span>Available: {formatAmount(balances[fromId])} {fromAsset.symbol}</span></div>
                  <div className={styles.assetControls}>
                    <input id="swap-amount" type="number" inputMode="decimal" min="0.01" max={balances[fromId]} step="0.01" value={amount} disabled={stage !== 'edit'} onChange={(event) => { setAmount(event.target.value); setError('') }} />
                    <select aria-label="Source balance" value={fromId} disabled={stage !== 'edit'} onChange={(event) => setPair(event.target.value, event.target.value === toId ? fromId : toId)}>
                      {assets.map((asset) => <option key={asset.id} value={asset.id}>{asset.symbol} / {asset.name}</option>)}
                    </select>
                  </div>
                  {stage === 'edit' && <button className={styles.maxLink} type="button" onClick={() => { setAmount(String(balances[fromId])); setError('') }} disabled={balances[fromId] <= 0}>Use maximum</button>}
                </div>
                <div className={styles.swapDirection}>
                  <span />
                  <button type="button" aria-label="Switch conversion direction" disabled={stage !== 'edit'} onClick={() => setPair(toId, fromId)}><ArrowDownUp size={18} /></button>
                  <span />
                </div>
                <div className={`${styles.assetInput} ${styles.receiveInput}`}>
                  <div className={styles.assetLabel}><label htmlFor="swap-estimate">You receive</label><span>Available: {formatAmount(balances[toId])} {toAsset.symbol}</span></div>
                  <div className={styles.assetControls}>
                    <output id="swap-estimate">{formatAmount(estimatedOutput)}</output>
                    <select aria-label="Destination balance" value={toId} disabled={stage !== 'edit'} onChange={(event) => setPair(fromId, event.target.value === fromId ? toId : event.target.value)}>
                      {assets.map((asset) => <option key={asset.id} value={asset.id}>{asset.symbol} / {asset.name}</option>)}
                    </select>
                  </div>
                </div>
                <div className={styles.quoteLine}><span>Conversion rate</span><strong>1 VE = 0.65 SVE</strong></div>
                <div className={styles.quoteLine}><span>Reverse rate</span><strong>1 SVE ≈ 1.54 VE</strong></div>
                {error && <p className={styles.formError} role="alert">{error}</p>}
                <div className={styles.formActions}>
                  {stage === 'edit' && <button className={styles.primaryButton} type="submit" disabled={!amount || numericAmount <= 0}>Review conversion <ArrowRightLeft size={16} /></button>}
                  {stage === 'review' && <><button className={styles.secondaryButton} type="button" onClick={() => setStage('edit')}>Edit amount</button><button className={styles.primaryButton} type="button" onClick={confirmSwap}>Confirm conversion <Check size={16} /></button></>}
                </div>
              </form>
            </>
          )}
        </section>

        <aside className={styles.sideColumn}>
          <section className={styles.panel} aria-labelledby="quote-heading">
            <div className={styles.panelHead}><div><span className={styles.kicker}>CONVERSION SUMMARY</span><h2 id="quote-heading">Wallet balances</h2></div><Wallet size={18} className={styles.accentIcon} /></div>
            <div className={styles.quoteAmounts}>
              <div><span>You send</span><strong>{formatAmount(numericAmount || 0)} <small>{fromAsset.symbol}</small></strong></div>
              <ArrowDownUp size={17} className={styles.accentIcon} />
              <div><span>You receive</span><strong>{formatAmount(estimatedOutput)} <small>{toAsset.symbol}</small></strong></div>
            </div>
            <dl className={styles.quoteDetails}>
              <div><dt>VE balance</dt><dd>{formatAmount(ve)} VEs</dd></div>
              <div><dt>SVE balance</dt><dd>{formatAmount(sve)} SVEs</dd></div>
              <div><dt>Fee</dt><dd>No fee</dd></div>
            </dl>
            <p className={styles.subtleNotice}><HelpCircle size={16} /> Conversions update the wallet saved in this browser. No external transfer is made.</p>
          </section>
          <section className={styles.panel} aria-labelledby="steps-heading">
            <div className={styles.panelHead}><div><span className={styles.kicker}>HOW CONVERSION WORKS</span><h2 id="steps-heading">Four clear steps</h2></div></div>
            <ol className={styles.steps}>
              {['Choose VE or SVE', 'Enter an amount', 'Review the rate', 'Confirm conversion'].map((item, index) => <li key={item}><span className={styles.stepNumber}>{index + 1}</span><strong>{item}</strong></li>)}
            </ol>
          </section>
        </aside>
      </div>
    </AppPageShell>
  )
}

export default SwapCenterPage
