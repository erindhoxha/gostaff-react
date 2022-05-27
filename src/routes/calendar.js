import PageHeader from "../components/PageHeader/PageHeader";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";

export default function Calendar() {
    return (
      <main className="main-container w-full h-full">
          <PageHeader url="/calendar" link="Calendar" name="Calendar" description="This is an example dashboard created using build-in elements and components."/>
          <h2 className="transition">Hi I am the calendar page!</h2>
      </main>
    );
  }