import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
      <main className="min-h-screen grid grid-cols-[220px_1fr]">
        <Sidebar />
        <Dashboard />
      </main>
  );
}

export default App;
