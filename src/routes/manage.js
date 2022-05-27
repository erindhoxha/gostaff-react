import PageHeader from "../components/PageHeader/PageHeader";

export default function Manage() {
    return (
      <main className="main-container w-full h-full p-5">
        <PageHeader url="/manage" link="Manage" name="Manage" description="This is an example dashboard created using build-in elements and components."/>
        <h2 className="">Hi I am the management page!</h2>
      </main>
    );
  }