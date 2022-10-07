import React, { useEffect, useState } from "react";

const DefaultData = [
  {
    id: "4c83d4bd-4213-454c-af8c-5d7a989da92a",
    name: "Volkswagen Tiguan Allspace",
    image:
      "https://media.cazoo.com/image/upload/c_scale,f_auto,h_1080,q_auto,w_1920/cazoo-imagery/car_gallery_images/WVGZZZ5NZKW828571/ad84dbfd-4088-4dcd-bd1c-03071f3604d7.jpg",
    sub_name: "2L SEL TDI",
    price: 30350,
    miles: 5040,
    reg: 2019,
    trans: "Automatic",
    fuel: "Diesel",
    seats: 7,
    engine: "2",
    body_type: "5 door SUV",
    exterior_color: "Silver",
    drive_type: "Four wheel drive",
    reg_num: "LL68 WRT",
    previous_owners: 1,
    num_of_keys: 2,
    top_speed: 130,
    acceleration: "8.6",
    power: 187,
    created: "2022-09-30T05:46:08.406Z",
  },
];

export default function Delete() {
  const [Data, setData] = useState(DefaultData);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        "https://a-star-cars-backend.vercel.app/api/cars"
      );
      const data = await res.json();

      setData(data);
    };

    fetchData();
  }, []);

  const handleClick = async (id: string) => {
    await fetch(`https://a-star-cars-backend.vercel.app/api/car/${id}`, {
      method: "DELETE",
    });
    document.location.reload();
  };

  return (
    <div>
      {Data.map((el) => (
        <div key={el.id}>
          <div>{el.name}</div>
          <img src={el.image} alt={el.name} style={{ maxWidth: "400px" }} />
          <button onClick={() => handleClick(el.id)}>delete</button>
        </div>
      ))}
    </div>
  );
}
