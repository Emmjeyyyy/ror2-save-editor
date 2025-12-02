import React from 'react';
import { CheckCircle, AlertTriangle, X } from 'lucide-react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

const Notification: React.FC<NotificationProps> = ({ message, type, onClose }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 animate-in slide-in-from-bottom-5 fade-in duration-300">
        <div className={`
            flex items-center gap-4 px-5 py-4 rounded-xl border shadow-2xl backdrop-blur-md min-w-[320px]
            ${type === 'success' 
                ? 'bg-ror-panel/95 border-ror-green/30 shadow-ror-green/10' 
                : 'bg-ror-panel/95 border-red-500/30 shadow-red-500/10'}
        `}>
            <div className={`
                p-2 rounded-full flex-shrink-0
                ${type === 'success' ? 'bg-ror-green/10 text-ror-green' : 'bg-red-500/10 text-red-500'}
            `}>
                {type === 'success' ? <CheckCircle size={24} /> : <AlertTriangle size={24} />}
            </div>
            <div className="flex-1">
                <h4 className={`font-bold text-sm ${type === 'success' ? 'text-ror-green' : 'text-red-400'}`}>
                    {type === 'success' ? 'Operation Successful' : 'Error'}
                </h4>
                <p className="text-sm text-gray-300 leading-tight mt-0.5">{message}</p>
            </div>
            <button 
                onClick={onClose}
                className="text-gray-500 hover:text-white transition-colors p-1"
            >
                <X size={18} />
            </button>
        </div>
    </div>
  );
};

export default Notification;