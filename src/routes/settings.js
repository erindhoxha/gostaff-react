import PageHeader from "../components/PageHeader/PageHeader";

export default function Settings() {
    return (
      <main className="main-container w-full h-full">
        <PageHeader url="/settings" link="Settings" name="Settings" description="This is an example dashboard created using build-in elements and components." />
        <h2>Hi I am the settings page!</h2>
      </main>
    );
  }