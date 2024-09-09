import ContactForm from "@/components/ui/contact";

export default function Contact() {
 
  return (
    <section className="md:p-12 pt-0 w-[100%] p-1">
      <h1 className="text-4xl font-bold uppercase font-body-['Poppins'] text-center pt-16">Contact</h1>
      <p className="text-lg font-thin font-body-['Poppins'] text-center pt-6 pb-24 tracking-wide text-gray-400">If you want to work or collaborate with me fill this form down below! Thank you!</p>
      
      <ContactForm></ContactForm>
      
    </section>
  );
}
