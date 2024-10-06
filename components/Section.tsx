import React from 'react'
import InnerSection from './InnerSection';

interface SectionProps {
  command: {
    title: string;
    description: string;
    command: string;
    commandItems: {
      title: string;
      description: string;
      command: string;
      note: React.ReactNode;
    }[];
  };
}

const Section = ({ command }: SectionProps) => {
  return (
    <div>
      <h3 className="text-xl font-medium mb-2">{command.title}</h3>
      {command.description && (
        <p className="text-sm text-normal mb-2">{command.description}</p>
      )}
      {command.command && (
        <div className="text-sm text-normal flex flex-col gap-1">
          <span className="text-code px-4 py-2 bg-gray-500/20 backdrop-blur-sm shadow-sm rounded-md">{command.command}</span>
        </div>
      )}
      {command.commandItems.length > 0 && (
        <div className="flex flex-col gap-6 pl-6 border-l-2 border-inner py-4 mt-4">
          {command.commandItems.map((item, index) => (
            <InnerSection key={index} title={item.title} description={item.description} command={item.command} note={item.note} />
          ))}
        </div>
      )}
    </div>
  )
}

export default Section