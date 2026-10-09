import { useRef } from 'react'
import Icon from '../Icon.jsx'
import { useInView, useReducedMotion } from '../../hooks/useRewardHooks.js'
import bannerStyles from './RewardBanner.module.css'

export function Button({ children, onClick, variant = 'dark', icon = 'arrow', className = '', ...buttonProps }) {
  return <button {...buttonProps} type="button" className={`button button-${variant} ${className}`} onClick={onClick}>{children}<Icon name={icon} size={17} /></button>
}

function RewardBanner({ feature, illustration, className = '', onAction }) {
  const { kind, icon, eyebrow, title, body, value, illustrationLabel, button, note, tag } = feature
  const cardRef = useRef(null)
  const inView = useInView(cardRef)
  const reducedMotion = useReducedMotion()
  const titleId = `${kind}-banner-title`
  const descriptionId = `${kind}-banner-description`
  const valueId = `${kind}-banner-value`

  return (
    <article ref={cardRef} className={`feature-card card-${kind} ${bannerStyles.surface} ${bannerStyles[kind]} ${inView ? 'is-visible' : ''} ${className}`} aria-labelledby={titleId} aria-describedby={`${descriptionId} ${valueId}`} data-reduced-motion={reducedMotion}>
      <div className="card-copy">
        <div className="card-eyebrow"><span className="eyebrow-icon"><Icon name={icon} size={15} /></span>{eyebrow}</div>
        <h2 id={titleId}>{title}</h2>
        <p id={descriptionId}>{body}</p>
        <div className="card-value" id={valueId}><span className="value-mark"><Icon name={icon} size={14} /></span><span>{value}</span></div>
        <Button
          variant={kind === 'refer' ? 'light' : 'dark'}
          onClick={() => onAction(kind)}
        >
          {button}
        </Button>
      </div>
      <div className={`card-art art-${kind}`} role="img" aria-label={illustrationLabel}>{illustration}</div>
      <div className="card-detail">
        <span className="detail-note"><Icon name={kind === 'swap' ? 'swap' : kind === 'exchange' ? 'gift' : 'shield'} size={14} />{note}</span>
        <span className="detail-tag">{tag}</span>
      </div>
    </article>
  )
}

export default RewardBanner