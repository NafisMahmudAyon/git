import React from 'react'

interface SectionItemProps {
  title: string;
  command: string;
  note: string;
}

const SectionItem = ({ title, command, note }: SectionItemProps) => {
  return (
    <div className="flex flex-col gap-6 pl-6 border-l-2 border-inner py-4">
      <h4 className="text-lg font-medium mb-2">{title}</h4>
      <p className="text-sm text-normal mb-2">{command}</p>
      <p className="text-sm text-normal mb-2">{note}</p>
    </div>
  )
}

export default SectionItem