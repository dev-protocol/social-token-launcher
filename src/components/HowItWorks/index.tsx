import React from 'react'
import StepsCard from './StepsCard'

import Anpao from '../../img/ANPAO.svg'
import Card from '../../img/CARD.svg'
import Purse from '../../img/PURSE.svg'
import Seedling from '../../img/SEEDLING.svg'
import FaqCard from './FaqCard'

interface HowItWorksProps {
  // Props
}

const HowItWorks: React.FC<HowItWorksProps> = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mb-md">How it works</h1>
      <section className="w-full flex flow-row justify-around gap-sm mb-xl">
        <StepsCard label="Get DEV" media={Card} mediaAlt="Image" />
        <StepsCard label="Stake DEV" media={Purse} mediaAlt="Image" />
        <StepsCard label="Earn Rewards" media={Seedling} mediaAlt="Image" />
        <StepsCard label="Get Perks" media={Anpao} mediaAlt="Image" />
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 gap-lg">
        <FaqCard question="What is DEV?">
          DEV is a token to support your favorite creators and earn rewards. It allows for long-term support through
          staking, rather than temporary donations or trading. As a supporter, you can get exclusive NFTs for supporters
          and special Perks. 🌱
        </FaqCard>
        <FaqCard question="What is staking?">
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          It's not a donation, but a temporary deposit of DEV tokens to financially support the creators. If you stop
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          staking, the DEV token you deposited will be returned to you. It's like reusable money.
        </FaqCard>
        <FaqCard question="When can I receive my rewards?">
          Your reward will increase slightly every 15 seconds (1 block) while you are staking.
        </FaqCard>
        <FaqCard question="Can I cancel my staking?">What is staking?</FaqCard>
      </section>
    </div>
  )
}

export default HowItWorks
