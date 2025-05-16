import ProfileSummaryTiktok from 'src/views/dashboards/tiktok-profile/profileSummary'
import AccordionProfilePageTiktok from 'src/views/dashboards/tiktok-profile/accordionProfilePage'
import FilteringComponent from 'src/views/components/filtering'

import TiktokData from 'src/@fake-db/tiktok-full-profile.json'

const TiktokProfileAnalytics = () => {
  const data = TiktokData
  return (
    <>
      <FilteringComponent data={data} />
      <br />
      <ProfileSummaryTiktok data={data} />
      <AccordionProfilePageTiktok />
    </>
  )
}

export default TiktokProfileAnalytics
