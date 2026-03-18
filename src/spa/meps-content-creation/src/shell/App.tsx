import React from "react";
import TopBar from "./TopBar";
import ContentArea from "./ContentArea";

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <TopBar />
      <ContentArea />
    </div>
  );
};

export default App;
