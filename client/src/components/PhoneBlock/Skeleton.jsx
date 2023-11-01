import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = () => (
  <ContentLoader 
    speed={2}
    width={240}
    height={400}
    viewBox="0 0 240 400"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="10" y="0" rx="26" ry="26" width="220" height="230" /> 
    <rect x="0" y="276" rx="10" ry="10" width="240" height="70" /> 
    <rect x="0" y="369" rx="10" ry="10" width="120" height="22" /> 
    <rect x="155" y="357" rx="18" ry="25" width="86" height="40" /> 
    <rect x="0" y="239" rx="10" ry="10" width="240" height="25" />
  </ContentLoader>
)
