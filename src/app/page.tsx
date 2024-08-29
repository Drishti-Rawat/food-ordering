import Image from "next/image";
import Hero from "@/components/Hero";
import HomeMenuOptions from "@/components/HomeMenuOptions";
import SectionHeader from "@/components/SectionHeader";

export default function Home() {
  return (
    <>
      <Hero />
      <HomeMenuOptions />
      <section className="text-center my-16">
        <SectionHeader subHeader={"Our story"} mainHeader={"About Us"} />
        <div className="text-gray-500 space-y-3 mt-4 max-w-2xl mx-auto text-sm font-semibold ">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure quas
            impedit autem dolor maiores porro voluptate nobis quaerat voluptas
            repudiandae.lorem Lorem ipsum dolor sit amet. Lorem ipsum dolor sit.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
            cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo, saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, blanditiis.
          </p>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. A,
            cupiditate. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Explicabo, saepe? Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, blanditiis.
          </p>
        </div>
      </section>

      <section className="text-center mt-8 my-14">
        <SectionHeader subHeader={'don\'t hesitate'} mainHeader= "Contact Us"/>
        <div className="mt-6">

        <h2 className="text-4xl  text-gray-700 font-semibold ">+40 892 643 232</h2>
        </div>
      </section>
    </>
  );
}
