import React, { useRef, useState } from 'react';
import { Upload, FileText, AlertCircle } from 'lucide-react';

interface DragDropProps {
  onFileLoaded: (content: string, name: string) => void;
}

const DragDrop: React.FC<DragDropProps> = ({ onFileLoaded }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const processFile = (file: File) => {
    setError(null);
    if (!file.name.endsWith('.xml')) {
      setError("Please upload a valid .xml user profile.");
      return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
      const text = e.target?.result as string;
      if (text) {
        try {
          onFileLoaded(text, file.name);
        } catch (err) {
          setError("Failed to parse file. Is it a valid Risk of Rain 2 profile?");
        }
      }
    };
    reader.readAsText(file);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      processFile(e.dataTransfer.files[0]);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      processFile(e.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-2xl mx-auto mt-10 p-6">
       <div
        className={`w-full flex flex-col items-center justify-center h-64 border-2 border-dashed rounded-xl cursor-pointer transition-all duration-300
          ${isDragging 
            ? 'border-ror-accent bg-ror-accent/10 scale-102 shadow-lg shadow-ror-accent/20' 
            : 'border-slate-700 bg-ror-panel hover:border-slate-500'
          }`}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input 
          type="file" 
          ref={fileInputRef} 
          className="hidden" 
          accept=".xml" 
          onChange={handleInputChange} 
        />
        
        <div className="flex flex-col items-center gap-4 text-center">
          <div className={`p-4 rounded-full ${isDragging ? 'bg-ror-accent text-black' : 'bg-slate-800 text-ror-accent'}`}>
            {isDragging ? <FileText size={40} /> : <Upload size={40} />}
          </div>
          <div>
            <p className="text-xl font-semibold text-slate-200">
              {isDragging ? "Drop it like it's hot" : "Drag & Drop User Profile"}
            </p>
            <p className="text-sm text-slate-500 mt-2">
              or click to browse your files
            </p>
          </div>
          <div className="text-xs text-slate-600 bg-black/20 px-3 py-1 rounded">
              C:\Program Files(x86)\Steam\userdata\[Number]\632360\remote\UserProfiles
          </div>
        </div>
      </div>

      {error && (
        <div className="mt-4 flex items-center gap-2 text-red-400 bg-red-900/20 px-4 py-2 rounded-lg border border-red-900/50">
          <AlertCircle size={18} />
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default DragDrop;