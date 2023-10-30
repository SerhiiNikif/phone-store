import React from "react"
import ContentLoader from "react-content-loader"

export const Skeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={280}
    height={525}
    viewBox="0 0 280 525"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="26" ry="26" width="260" height="318" /> 
    <rect x="0" y="370" rx="10" ry="10" width="280" height="88" /> 
    <rect x="0" y="486" rx="10" ry="10" width="147" height="30" /> 
    <rect x="170" y="477" rx="25" ry="25" width="108" height="47" /> 
    <rect x="0" y="330" rx="10" ry="10" width="280" height="25" />
  </ContentLoader>
)
