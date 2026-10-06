import RewardBanner from '../RewardBanner/RewardBanner.jsx'
import CaptchaIllustration from './CaptchaIllustration.jsx'
import { captchaFeature } from '../../utils/bannerData.js'

function CaptchaTasksBanner({ onAction }) {
  const illustration = (
    <div className="captcha-art">
      <CaptchaIllustration className="captcha-illustration" />
    </div>
  )

  return <RewardBanner feature={captchaFeature} illustration={illustration} onAction={onAction} />
}

export default CaptchaTasksBanner
