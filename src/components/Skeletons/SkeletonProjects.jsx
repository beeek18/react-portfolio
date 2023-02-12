import React from 'react'
import ContentLoader from 'react-content-loader'

export const SkeletonProjects = () => {
  return (
    <ContentLoader
      width={1300}
      height={1000}
      viewBox="0 0 800 575"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb"
    >
      <rect x="10" y="56" rx="10" ry="10" width="240" height="211" />
      <rect x="280" y="56" rx="10" ry="10" width="240" height="211" />
      <rect x="550" y="56" rx="10" ry="10" width="240" height="211" />
      <rect x="10" y="283" rx="10" ry="10" width="240" height="211" />
      <rect x="280" y="283" rx="10" ry="10" width="240" height="211" />
      <rect x="550" y="283" rx="10" ry="10" width="240" height="211" />
    </ContentLoader>
  )
}