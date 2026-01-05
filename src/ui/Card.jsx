import React from 'react'

const Card = ({children , className = ""}) => {
  return (
     <div className={`bg-card border border-subtle rounded-xl p-4 ${className}`}>
        {children}
     </div>
  )
}

export default Card