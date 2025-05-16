// ** MUI Imports
import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { useTheme } from '@mui/material/styles'
import InfluencerSummaryBox from 'src/layouts/components/analytic-components/influencer/influencerSummaryBox'
import TotalFollowersReachBox from 'src/layouts/components/analytic-components/influencer/totalFollowersReachBox'
import TotalPostsBox from 'src/layouts/components/analytic-components/influencer/totalPostsBox'
import TotalEngagementBox from 'src/layouts/components/analytic-components/influencer/totalEngagementBox'
import InfluencerProfileBox from 'src/layouts/components/analytic-components/influencer/influencerProfileBox'
import TopInfluencerBox from 'src/layouts/components/analytic-components/influencer/topInfluencerBox'

const InfluencerBoxCard = () => {
  const theme = useTheme()

  return (
    <Accordion sx={{ boxShadow: 'none', borderTop: 'none !important' }}>
      <AccordionSummary
        id='panel-header-1'
        aria-controls='panel-content-1'
        expandIcon={<Icon icon='mdi:chevron-down' />}
      >
        <Typography sx={{ fontWeight: '700', fontSize: '22px' }}>Influencers</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ background: `${theme.palette.background.default}`, p: 0 }}>
        <InfluencerSummaryBox />
        <TotalFollowersReachBox />
        <TotalPostsBox />
        <TotalEngagementBox />
        <InfluencerProfileBox />
        <TopInfluencerBox />
      </AccordionDetails>
    </Accordion>
  )
}

export default InfluencerBoxCard
