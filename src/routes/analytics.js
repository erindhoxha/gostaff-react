import PageHeader from "../components/PageHeader/PageHeader";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

export default function Analytics() {
    return (
      <main className="main-container w-full h-full">
        <PageHeader url="/analytics" link="Analytics" name="Analytics" description="This is an example dashboard created using build-in elements and components." />
        <h2 className="transition">Hi I am the analytics page!</h2>
      </main>
    );
  }