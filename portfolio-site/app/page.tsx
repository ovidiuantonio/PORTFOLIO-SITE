export default function Home() {
  return (
    <section className="md:p-12 pt-0 w-[100%] p-1">
      <h1 className="text-4xl font-bold uppercase font-body-['Poppins'] text-center pt-16">Soul Remesher</h1>
      <p className="text-lg font-thin font-body-['Poppins'] text-center pt-6 pb-24 tracking-wide text-gray-400">A 3D artist who loves creating meaningful and fun things.</p>

      <div className="projects grid grid-cols-1 md:grid-cols-3 gap-3 min-h-[30rem] align-center justify-start">
        <iframe className="w-[100%] md:min-h-[30rem] min-h-[20rem]" src="https://www.behance.net/embed/project/205240437?ilo0=1" allowFullScreen loading="lazy" frameBorder={0} allow="clipboard-write"></iframe>
        <iframe className="w-[100%] md:min-h-[30rem] min-h-[20rem]" src="https://www.behance.net/embed/project/203708199?ilo0=1" allowFullScreen loading="lazy" frameBorder={0} allow="clipboard-write"></iframe>
        <iframe className="w-[100%] md:min-h-[30rem] min-h-[20rem]" src="https://www.behance.net/embed/project/200664459?ilo0=1" allowFullScreen loading="lazy" frameBorder={0} allow="clipboard-write"></iframe>
        <iframe className="w-[100%] md:min-h-[30rem] min-h-[20rem]" src="https://www.behance.net/embed/project/191810923?ilo0=1" allowFullScreen loading="lazy" frameBorder={0} allow="clipboard-write"></iframe>
        <iframe className="w-[100%] md:min-h-[30rem] min-h-[20rem]" src="https://www.behance.net/embed/project/180210327?ilo0=1" allowFullScreen loading="lazy" frameBorder={0} allow="clipboard-write"></iframe>
        
      </div>
      
    </section>
  );
}
