import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export function Layout() {
  return (
    <>
      <section className="flex">
        <Sidebar />
        <section className="w-full">
          <Header />
        </section>
      </section>
    </>
  );
}
