export interface Workspace {
  id: string;
  label: string;
  icon: string;
}

export interface Editor {
  id: string;
  label: string;
  description: string;
  color: string;
  icon: string;
}

export const workspaces: Workspace[] = [
  { id: "content-creation", label: "Content\nCreation", icon: "✏️" },
  { id: "translation", label: "Translation", icon: "🔤" },
  { id: "media-production", label: "Media\nProduction", icon: "🎬" },
  { id: "digital-publishing", label: "Digital\nPublishing", icon: "📄" },
  { id: "printing", label: "Printing", icon: "🖨️" },
  { id: "distribution", label: "Distribution", icon: "📦" },
];

export const editors: Editor[] = [
  {
    id: "composition",
    label: "Composition",
    description: "Design fixed layout publications for printing or PDF",
    color: "#4472C4",
    icon: "📐",
  },
  {
    id: "curation",
    label: "Curation",
    description: "Author headings and references for the Research Guide",
    color: "#C44444",
    icon: "📚",
  },
  {
    id: "inscribe-for-word",
    label: "Inscribe for\nWord",
    description: "Author text documents",
    color: "#44C47A",
    icon: "📝",
  },
  {
    id: "studio",
    label: "Studio",
    description: "Translate and finalize vernacular text, audio, video, and subtitles",
    color: "#C49444",
    icon: "🎥",
  },
];
