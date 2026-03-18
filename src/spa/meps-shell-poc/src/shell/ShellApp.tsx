import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TopBar from "./TopBar";
import HomePage from "./HomePage";
import PluginViewport from "./PluginViewport";

const ShellApp: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-gray-100">
        <Routes>
          <Route path="/plugin/:pluginId/*" element={<PluginViewport />} />
          <Route
            path="*"
            element={
              <>
                <TopBar />
                <main className="flex-1 flex flex-col">
                  <HomePage />
                </main>
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default ShellApp;
