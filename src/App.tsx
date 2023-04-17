import React from "react";
import HomePage from "./pages/Home";
import Layout from "./components/Layout";

const App: React.FC = () => {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
};

export default App;
