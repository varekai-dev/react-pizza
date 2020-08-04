import React from 'react'
import ContentLoader from 'react-content-loader'

export default function LoadingBlock() {
  return (
    <div className="pizza-block">
      <ContentLoader speed={2} width={280} height={460} viewBox="0 0 280 460" backgroundColor="#f3f3f3" foregroundColor="#ecebeb">
        <circle cx="140" cy="140" r="140" />
        <rect x="0" y="293" rx="6" ry="6" width="307" height="28" />
        <rect x="1" y="335" rx="6" ry="6" width="298" height="84" />
        <rect x="0" y="430" rx="6" ry="6" width="100" height="25" />
        <rect x="178" y="430" rx="13" ry="13" width="100" height="25" />
      </ContentLoader>
    </div>
  )
}
