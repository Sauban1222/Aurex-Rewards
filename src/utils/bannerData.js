export const referFeature = {
  kind: 'refer',
  icon: 'people',
  eyebrow: 'REFER & EARN',
  title: 'Good things grow when shared.',
  body: 'Invite friends to Aurex. Eligible referral rewards depend on program rules and confirmed milestones.',
  value: 'Clear milestones. Rewards follow the rules.',
  illustrationLabel: 'Two friends connected by an invitation and a milestone reward.',
  button: 'Get your invite link',
  note: 'Eligibility and terms apply',
  tag: 'SHARE & EARN',
  dialogNote: {
    icon: 'people',
    text: 'A personalized referral link and referral tracking are not connected in this preview. No referral or reward will be recorded.',
  },
}

export const swapFeature = {
  kind: 'swap',
  icon: 'swap',
  eyebrow: 'BALANCE CONVERSION',
  title: 'Swap Center',
  body: 'Convert between supported reward balances. Available swaps and rates may vary.',
  value: 'Move value between supported balances',
  illustrationLabel: 'Two reward balances and exchange arrows represent converting between supported balances.',
  button: 'Explore Swaps',
  note: 'Supported balance conversions',
  tag: 'BALANCE ↔ BALANCE',
  dialogNote: {
    icon: 'swap',
    text: 'Swap Center is for conversions between supported reward balances. It is separate from redeeming VEs for supported rewards in the Exchange Center.',
  },
}

export const bonusFeature = {
  kind: 'bonus',
  icon: 'sparkles',
  eyebrow: 'BONUS VEs',
  title: 'Get Extra VEs',
  body: 'Complete eligible activities to unlock more VEs through bonus opportunities.',
  value: 'More VEs through eligible activities',
  illustrationLabel: 'A bonus reward box, coins, and a bonus badge represent additional VE opportunities.',
  button: 'Explore Bonus',
  note: 'Discover eligible bonus opportunities',
  tag: 'MORE VEs',
  dialogNote: {
    icon: 'sparkles',
    text: 'Explore eligible activities, campaigns, and seasonal promotions for additional VEs.',
  },
}

export const captchaFeature = {
  kind: 'captcha',
  icon: 'check',
  eyebrow: 'TASK-BASED EARNING',
  title: 'Captcha Tasks',
  body: 'Complete available CAPTCHA tasks accurately to earn eligible rewards.',
  value: 'Earn from accurate task completion',
  illustrationLabel: 'A captcha challenge marked complete represents verified task-based earning.',
  button: 'Start Task',
  note: 'Rewards follow platform rules',
  tag: 'TASK-BASED',
  dialogNote: {
    icon: 'shield',
    text: 'This is a task-based earning opportunity, not ad viewing. Complete available challenges accurately; eligible rewards follow platform rules.',
  },
}

export const exchangeFeature = {
  kind: 'exchange',
  icon: 'gift',
  eyebrow: 'REDEEM YOUR VEs',
  title: 'Exchange Center',
  body: 'Redeem eligible VEs for rewards currently supported on the platform.',
  value: 'Redeem eligible VEs for supported rewards',
  illustrationLabel: 'A VE wallet connected to redemption options represents exchanging eligible rewards.',
  button: 'Open Exchange Center',
  note: 'Options depend on eligibility and availability',
  tag: 'EARN → REDEEM',
  dialogNote: {
    icon: 'gift',
    text: 'See which redemption options are currently supported and available for your account. Eligibility and terms apply.',
  },
}

export const bannerFeatures = {
  refer: referFeature,
  swap: swapFeature,
  bonus: bonusFeature,
  captcha: captchaFeature,
  exchange: exchangeFeature,
}