import BlankLayout from 'src/@core/layouts/BlankLayout'

import instagramData from 'src/@fake-db/instagram-full.json'

import ProfileSummary from 'src/views/dashboards/instagram-profile/profileSummary'
import AccordionProfilePage from 'src/views/dashboards/instagram-profile/accordionProfilePage'
import FilteringComponent from 'src/views/components/filtering'
import { Box } from '@mui/material'

const SampleInstagramProfile = () => {
  return (
    <Box sx={{ p: '3em' }}>
      <FilteringComponent />
      <br />
      <ProfileSummary data={instagramData} />
      <AccordionProfilePage data={instagramData} />
    </Box>
  )
}

SampleInstagramProfile.guestGuard = true
SampleInstagramProfile.getLayout = page => <BlankLayout>{page}</BlankLayout>

export default SampleInstagramProfile
