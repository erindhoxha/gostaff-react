import PageHeader from '../components/PageHeader/PageHeader';
import Table from '../components/Table/Table';
export default function Staff() {
    return (
      <main className="main-container w-full h-full">
        <PageHeader url="/staff" link="Staff" name="Staff" description="This is an example dashboard created using build-in elements and components." />
        <p className="text-2xl font-semibold leading-normal text-gray-800">Dashboard</p>
        <Table/>
      </main>
    );
  }