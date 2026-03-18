import React from "react";
import { editors } from "../data/menuData";
import { MoreHorizontal } from "lucide-react";

const EditorsSection: React.FC = () => {
  return (
    <div>
      <div className="flex items-center gap-3 mb-4">
        <h2 className="text-gray-800 text-sm font-semibold">Editors</h2>
        <button className="text-gray-400 text-xs hover:text-meps-blue transition-colors">
          Show All
        </button>
      </div>
      <div className="flex gap-4 flex-wrap">
        {editors.map((editor) => (
          <div
            key={editor.id}
            className="bg-white rounded-lg border border-gray-200 p-4 w-52 
                       hover:shadow-md transition-shadow cursor-pointer relative"
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-gray-600"
              aria-label={`Options for ${editor.label}`}
            >
              <MoreHorizontal size={16} />
            </button>
            <div className="flex items-center gap-3 mb-3">
              <div
                className="w-8 h-8 rounded flex items-center justify-center text-white text-sm"
                style={{ backgroundColor: editor.color }}
              >
                {editor.icon}
              </div>
              <span className="text-sm font-semibold text-gray-800 whitespace-pre-line leading-tight">
                {editor.label}
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed">{editor.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EditorsSection;
