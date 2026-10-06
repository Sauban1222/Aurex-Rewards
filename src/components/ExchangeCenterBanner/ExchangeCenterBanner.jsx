import RewardBanner from '../RewardBanner/RewardBanner.jsx'
import ExchangeIllustration from './ExchangeIllustration.jsx'
import { exchangeFeature } from '../../utils/bannerData.js'

function ExchangeCenterBanner({ onAction }) {
  const illustration = (
    <div className="exchange-art">
      <ExchangeIllustration className="exchange-illustration" />
    </div>
  )

  return <RewardBanner feature={exchangeFeature} illustration={illustration} onAction={onAction} />
}

export default ExchangeCenterBanner
