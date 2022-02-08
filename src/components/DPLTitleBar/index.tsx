import React from 'react'

interface DPLTitleBarProps {
  title: string
  className?: string
}

const DPLTitleBar: React.FC<DPLTitleBarProps> = ({ title, className }) => {
  return (
    <>
      <h1
        className={`text-3xl font-extrabold text-transparent bg-clip-text bg-heading-texture bg-center bg-no-repeat bg-cover from-primary to-secondary ${className}`}
      >
        {title}
      </h1>
    </>
  )
}

export default DPLTitleBar
