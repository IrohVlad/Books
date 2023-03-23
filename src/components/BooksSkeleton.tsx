import React from "react"
import ContentLoader from "react-content-loader"


const BooksSkeleton = ({mode}) => (
  <ContentLoader 
    speed={2}
    width={'100%'}
    height={mode == 'current' ? '100%' : 320}
    // viewBox="0 0 100% 320"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="48" y="26" rx="3" ry="3" width="100%" height={mode == 'current' ? '100%' : '320'} />
  </ContentLoader>
)

export default BooksSkeleton