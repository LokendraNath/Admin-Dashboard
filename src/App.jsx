import Dashboard from "./components/Dashboard/Dashboard";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
      <main className="min-h-screen gap-4 p-4 grid grid-cols-[260px_1fr] font-josefin">
        <Sidebar />
        <Dashboard />
      </main>
  );
}

export default App;
