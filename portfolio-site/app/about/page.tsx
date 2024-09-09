const exhibitions = [
  {name: "- ITZY 'Surf' | 2021 | Sungduk City", location: "Itaewon, South Korea"},
  {name: "- 'Butterflies' | 2021 | Wink OOH", location: "Bucharest, Romania"},
  {name: "- '??' | 2021 | MIRINDA", location: "Bucharest, Romania"},
  {name: "- 'Baekdu Moutain' & 'Ma' | 2023 | PEPSI", location: "Bucharest, Romania"},
]

export default function About() {
  return (
    <section className="md:p-12 pt-0 px-0">
      <h1 className="text-4xl font-bold uppercase font-body-['Poppins'] text-center pt-16">About</h1>
      <iframe className="my-12 md:w-[90%] w-full md:h-[50rem] h-[20rem] mx-auto md:mb-24 mb-12" src="https://www.youtube.com/embed/p5CXXlv-5bY" title="Hotel Del Luna - Full Moon (满月)" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
      
      <p className="about-text md:text-md text-sm text-center mb-6 md:w-[50%] w-[90%] mx-auto font-body-['Poppins'] font-normal">
        Ovidiu-Antonio, the Soul Remesher, is a 3D Artist based in Romania who loves creating stylized artworks in Cinema 4D and Blender
      </p>
      <p className="about-text md:text-md text-sm text-center mb-6 md:w-[50%] w-[90%] mx-auto font-body-['Poppins'] font-normal">  
        He started 3D modeling in 2021, when he got the opportunity to join Mirinda's 'Creative Hacks' Workshop, and dived deeper into 3D animation with the project 'Hype Bong'.
      </p>
      <p className="about-text md:text-md text-sm text-center mb-6 md:w-[50%] w-[90%] mx-auto font-body-['Poppins'] font-normal">  
        Ovidiu combines his love for Korean music and passion for 3D to create memorable artworks.
      </p>
      <p className="about-text md:text-md text-sm text-center mb-6 md:w-[50%] w-[90%] mx-auto font-body-['Poppins'] font-normal">  
        He gained recognition from Pepsi, who advertised 2 of his artworks ('Ma' & 'Baekdu Mountain') in Bucharest, and Mirinda, who exhibited his artwork '??'.
      </p>

      <h1 className="text-4xl font-bold uppercase font-body-['Poppins'] text-center pt-16 pb-12">Exhibitions</h1>

      {exhibitions.map((exhb, key) => (
        <div key={key}>
          <h3 className="text-lg text-center w-[50%] mx-auto font-body-['Poppins'] font-semibold">{exhb.name}</h3>
          <p className="about-text md:text-md text-sm text-center mb-6 md:w-[50%] w-[90%] mx-auto font-body-['Poppins'] font-normal">{exhb.location}</p>
        </div>
      )
      )}
      
    </section>
  );
}
