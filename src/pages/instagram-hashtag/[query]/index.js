import HashtagSummaryInstagram from 'src/views/dashboards/instagram-hashtag/hashtagSummary'
import AccordionHashtagPage from 'src/views/dashboards/instagram-hashtag/accordionHashtagPage'
import FilteringComponent from 'src/views/components/filtering-hashtag'

const InstagramHashtagAnalytics = () => {
  return (
    <>
      <FilteringComponent />
      <br />
      <HashtagSummaryInstagram />
      <AccordionHashtagPage />
    </>
  )
}

export default InstagramHashtagAnalytics
