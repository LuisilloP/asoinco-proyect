import Image from "next/image";
import FormAsoinco from "./components/FormAsoinco";
import Principal from "./sections/Principal";
import About from "./sections/About";
import Form from "./sections/Form";
import Map from "./sections/Map"
import Sponsors from "./sections/Sponsors";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-">

      <Principal />
      {/* <hr className="  h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr> */}
      <section className="pt-10  px-3">
        <About ></About>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <Form></Form>
        <Map></Map>
        <Sponsors></Sponsors>
      </section>
    </main>
  );
}
