const Gallery = () => {
  const data = [
    { id: 1, image: "https://i.ibb.co/KspYbYM/DSC04257-scaled-197x197.jpg" },
    { id: 2, image: "https://i.ibb.co/KspYbYM/DSC04257-scaled-197x197.jpg" },
    { id: 3, image: "https://i.ibb.co/KspYbYM/DSC04257-scaled-197x197.jpg" },
    { id: 4, image: "https://i.ibb.co/KspYbYM/DSC04257-scaled-197x197.jpg" },
    { id: 5, image: "https://i.ibb.co/KspYbYM/DSC04257-scaled-197x197.jpg" },
    { id: 6, image: "https://i.ibb.co/KspYbYM/DSC04257-scaled-197x197.jpg" },
    { id: 7, image: "https://i.ibb.co/KspYbYM/DSC04257-scaled-197x197.jpg" },
    { id: 8, image: "https://i.ibb.co/KspYbYM/DSC04257-scaled-197x197.jpg" },
    { id: 9, image: "https://i.ibb.co/KspYbYM/DSC04257-scaled-197x197.jpg" },
    { id: 10, image: "https://i.ibb.co/KspYbYM/DSC04257-scaled-197x197.jpg" },
    { id: 11, image: "https://i.ibb.co/KspYbYM/DSC04257-scaled-197x197.jpg" },
    { id: 12, image: "https://i.ibb.co/KspYbYM/DSC04257-scaled-197x197.jpg" },
  ];

  return (
    <div className="mt-8 max-w-screen-xl mx-auto px-4">
      <h1 className="font-bold text-2xl text-center">Our Gallery</h1>
      <div className="flex flex-wrap items-center justify-center mt-8">
        {data.map((item) => (
          <div className="border" key={item.id}>
            <img className="w-full" src={item.image} alt="image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
