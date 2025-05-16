import ProfileSummaryInstagram from 'src/views/dashboards/instagram-profile/profileSummary'
import AccordionProfilePage from 'src/views/dashboards/instagram-profile/accordionProfilePage'
import FilteringComponent from 'src/views/components/filtering'

const InstagramProfileAnalytics = () => {
  return (
    <>
      <FilteringComponent />
      <br />
      <ProfileSummaryInstagram />
      <AccordionProfilePage />
    </>
  )
}

export default InstagramProfileAnalytics
