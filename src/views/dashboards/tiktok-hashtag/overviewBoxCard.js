// ** MUI Imports
import React, { useState, useEffect } from 'react'
import { Grid, Typography } from '@mui/material'
import Icon from 'src/@core/components/icon'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import { useTheme } from '@mui/material/styles'
import AvgEngagementBox from 'src/layouts/components/analytic-components/overview/avgEngagementBox'
import TotalPostsBox from 'src/layouts/components/analytic-components/overview/totalPostsBox'
import TotalViewsBox from 'src/layouts/components/analytic-components/overview/totalViewsBox'
import LocationTaggedBox from 'src/layouts/components/analytic-components/overview/locationTaggedBox'
import TypePostBox from 'src/layouts/components/analytic-components/overview/typePostBox'
import DuetPostsBox from 'src/layouts/components/analytic-components/overview/duetPostsBox'
import TagMentionsBox from 'src/layouts/components/analytic-components/overview/tagMentionsBox'
import CaptionWordsBox from 'src/layouts/components/analytic-components/overview/captionWordsBox'
import HashtagMostBox from 'src/layouts/components/analytic-components/overview/hashtagMostBox'
import PostingActivityBox from 'src/layouts/components/analytic-components/overview/postingActivityBox'
import AudienceEngagementBox from 'src/layouts/components/analytic-components/overview/audienceEngagementBox'
import TotalViewsDayBox from 'src/layouts/components/analytic-components/overview/totalViewsDayBox'
import TotalPostsDayBox from 'src/layouts/components/analytic-components/overview/totalPostsDayBox'
import AvgEngDayRatesBox from 'src/layouts/components/analytic-components/overview/avgEngDayRatesBox'
import AvgLikesCommentsDayRatesBox from 'src/layouts/components/analytic-components/overview/avgLikesCommentsDayRatesBox'

const OverviewBoxCard = () => {
  const theme = useTheme()

  return (
    <Accordion sx={{ boxShadow: 'none', borderTop: 'none !important' }}>
      <AccordionSummary
        id='panel-header-1'
        aria-controls='panel-content-1'
        expandIcon={<Icon icon='mdi:chevron-down' />}
      >
        <Typography sx={{ fontWeight: '700', fontSize: '22px' }}>Overview</Typography>
      </AccordionSummary>
      <AccordionDetails sx={{ background: `${theme.palette.background.default}`, p: 0 }}>
        <AvgEngagementBox />
        <TotalPostsBox />
        <TotalViewsBox />
        <Grid container sx={{ pt: 5 }} alignItems='stretch'>
          <Grid item md={6} xs={12} sx={{ pr: { md: 3, xs: 0 } }}>
            <LocationTaggedBox />
          </Grid>
          <Grid item md={6} xs={12} sx={{ pl: { md: 3, xs: 0 } }}>
            <TypePostBox />
          </Grid>
          <Grid item md={6} xs={12} sx={{ mt: 3, pr: { md: 3, xs: 0 } }}>
            <DuetPostsBox />
          </Grid>
          <Grid item md={6} xs={12} sx={{ mt: 3, pl: { md: 3, xs: 0 } }}>
            <TagMentionsBox />
          </Grid>
          <Grid item md={6} xs={12} sx={{ mt: 3, pr: { md: 3, xs: 0 } }}>
            <CaptionWordsBox />
          </Grid>
          <Grid item md={6} xs={12} sx={{ mt: 3, pl: { md: 3, xs: 0 } }}>
            <HashtagMostBox />
          </Grid>
          <Grid item md={6} xs={12} sx={{ mt: 3, pr: { md: 3, xs: 0 } }}>
            <PostingActivityBox />
          </Grid>
          <Grid item md={6} xs={12} sx={{ mt: 3, pl: { md: 3, xs: 0 } }}>
            <AudienceEngagementBox />
          </Grid>
          <Grid item md={6} xs={12} sx={{ mt: 3, pr: { md: 3, xs: 0 } }}>
            <TotalPostsDayBox />
          </Grid>
          <Grid item md={6} xs={12} sx={{ mt: 3, pl: { md: 3, xs: 0 } }}>
            <TotalViewsDayBox />
          </Grid>
          <Grid item md={6} xs={12} sx={{ mt: 3, pr: { md: 3, xs: 0 } }}>
            <AvgEngDayRatesBox />
          </Grid>
          <Grid item md={6} xs={12} sx={{ mt: 3, pl: { md: 3, xs: 0 } }}>
            <AvgLikesCommentsDayRatesBox />
          </Grid>
        </Grid>
      </AccordionDetails>
    </Accordion>
  )
}

export default OverviewBoxCard
