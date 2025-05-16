import React, { useState, useEffect } from 'react'
import { useTheme } from '@mui/material/styles'
import { Box, Grid, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import MostViewedBox from 'src/layouts/components/analytic-components/top-post/mostViewedBox'
import HighEngBox from 'src/layouts/components/analytic-components/top-post/highEngBox'
import MostLikeBox from 'src/layouts/components/analytic-components/top-post/mostLikeBox'
import MostCommentBox from 'src/layouts/components/analytic-components/top-post/mostCommentBox'
import HighEngDuetBox from 'src/layouts/components/analytic-components/top-post/highEngDuetBox'

const TopPostBoxCard = () => {
  const theme = useTheme()
  return (
    <Accordion sx={{ boxShadow: 'none', borderTop: 'none !important' }}>
      <AccordionSummary
        id='panel-header-1'
        aria-controls='panel-content-1'
        expandIcon={<Icon icon='mdi:chevron-down' />}
      >
        <Typography sx={{ fontWeight: '700', fontSize: '22px' }}>Top Post</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ background: `${theme.palette.background.default}`, p: 0 }}>
        <MostViewedBox />
        <HighEngBox />
        <MostLikeBox />
        <MostCommentBox />
        <HighEngDuetBox />
      </AccordionDetails>
    </Accordion>
  )
}

export default TopPostBoxCard
