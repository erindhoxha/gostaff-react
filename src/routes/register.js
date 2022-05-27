import PageHeader from '../components/PageHeader/PageHeader';
import Breadcrumbs from '../components/Breadcrumbs/Breadcrumbs';
export default function Register() {
    return (
      <main className="main-container w-full h-full">
        <PageHeader url="/register" link="Register" name="Register" description="This is an example dashboard created using build-in elements and components." />
        <h2>Hi I am the register page!</h2>
      </main>
    );
  }