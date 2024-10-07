import React from 'react'

interface InnerSectionProps {
  command: {
    title: string;
    description: string;
    command: string;
    note?: React.ReactNode;
  };
  className?: string;
}

const InnerSection = ({ command, className }: InnerSectionProps) => {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {command.title && (
        <h4 className="text-base font-medium mb-2 text-inner">{command.title}</h4>
      )}
      {command.description && (
        <p className="text-sm text-normal mb-2">{command.description}</p>
      )}
      {command.command && (
        <div className="text-sm text-normal flex flex-col gap-1 ">
          <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">{command.command}</span>
        </div>
      )}
      {command?.note && (
        <p className="text-xs text-comment  mb-2 pl-6  py-2">
          <span className="text-normal font-bold bg-comment rounded-full size-5 inline-flex items-center justify-center mr-4">i</span> {command?.note}
        </p>
      )}
    </div>
  )
}

export default InnerSection