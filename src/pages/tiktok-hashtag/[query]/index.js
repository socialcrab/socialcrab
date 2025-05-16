import HashtagSummaryTiktok from 'src/views/dashboards/tiktok-hashtag/hashtagSummary'
import AccordionHashtagPage from 'src/views/dashboards/tiktok-hashtag/accordionHashtagPage'
import FilteringComponent from 'src/views/components/filtering-hashtag'

const TiktokHashtagAnalytics = () => {
  return (
    <>
      <FilteringComponent />
      <br />
      <HashtagSummaryTiktok />
      <AccordionHashtagPage />
    </>
  )
}

export default TiktokHashtagAnalytics
