import React from 'react'
import ContentLoader from 'react-content-loader'

export const SkeletonFullProject = () => {
  return (
    <ContentLoader
      speed={2}
      width={1200}
      height={1250}
      viewBox="0 0 870 900"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="210" y="0" rx="20" ry="20" width="450" height="60" />
      <rect x="30" y="100" rx="30" ry="30" width="800" height="600" />
      <rect x="180" y="750" rx="10" ry="10" width="500" height="30" />
      <rect x="370" y="800" rx="10" ry="10" width="130" height="40" />
    </ContentLoader>
  )
}