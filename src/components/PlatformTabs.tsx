import React from 'react';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

interface Tab {
  id: string;
  name: string;
  icon: React.ReactNode;
  color: string;
}

const tabs: Tab[] = [
  { id: 'instagram', name: 'Instagram', icon: <Instagram className="h-5 w-5" />, color: 'pink' },
  { id: 'facebook', name: 'Facebook', icon: <Facebook className="h-5 w-5" />, color: 'blue' },
  { id: 'twitter', name: 'X (Twitter)', icon: <Twitter className="h-5 w-5" />, color: 'sky' },
  { id: 'linkedin', name: 'LinkedIn', icon: <Linkedin className="h-5 w-5" />, color: 'indigo' },
];

interface PlatformTabsProps {
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export const PlatformTabs: React.FC<PlatformTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="border-b border-gray-200">
      <nav className="-mb-px flex space-x-8">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={`
              flex items-center py-4 px-1 border-b-2 font-medium text-sm
              ${activeTab === tab.id
                ? `border-${tab.color}-500 text-${tab.color}-600`
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }
            `}
          >
            {tab.icon}
            <span className="ml-2">{tab.name}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};