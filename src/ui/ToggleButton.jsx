import React from 'react'

const ToggleButton = ({
   label,
   checked,
   onChange
}) => {
  return (
      <button
        onClick={ ()=> onChange( (mode) => mode === "bad" ?  "good" :  "bad") }
        className={`px-3 py-1 rounded-full text-sm border transition 
           ${
            checked 
             ? "bg-card text-good border-subtle" 
             : "text-muted border-subtle"
           }
          `}
      >
         {label}
      </button>
  )
}

export default ToggleButton