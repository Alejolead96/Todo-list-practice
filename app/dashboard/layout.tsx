import { NavBar, Sidebar } from "../components";

export const metadata = {
  title: "Dashboard",
  description: "Todo-List Dashboard",
};

const layoutDasboard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="min-h-screen bg-gray-50/50">
      <Sidebar />
      <div className="p-4 xl:ml-80">
        <NavBar />
        <div>{children}</div>
      </div>
    </div>
  );
};

export default layoutDasboard;
