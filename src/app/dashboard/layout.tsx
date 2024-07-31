import Sidebar from "@/components/Sidebar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen overflow-hidden">
      {/* SIDEBAR */}
      <Sidebar />
      <div className="flex-1 overflow-y-auto">
        {/* <Header /> */}
        {children}
      </div>
    </main>
  );
};

export default layout;
