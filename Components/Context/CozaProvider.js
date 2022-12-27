import DataContext from "./coza-context";

import image1 from "../../public/productImgs/Product-01.jpg";
import image2 from "../../public/productImgs/Product-02.jpg";
import image3 from "../../public/productImgs/Product-03.jpg";
import image4 from "../../public/productImgs/Product-04.jpg";
import image5 from "../../public/productImgs/Product-05.jpg";
import image6 from "../../public/productImgs/Product-06.jpg";
import image7 from "../../public/productImgs/Product-07.jpg";
import image8 from "../../public/productImgs/Product-08.jpg";
import image9 from "../../public/productImgs/Product-09.jpg";
import image10 from "../../public/productImgs/Product-10.jpg";
import image11 from "../../public/productImgs/Product-11.jpg";
import image12 from "../../public/productImgs/Product-12.jpg";
import image13 from "../../public/productImgs/Product-13.jpg";
import image14 from "../../public/productImgs/Product-14.jpg";
import image15 from "../../public/productImgs/Product-15.jpg";
import image16 from "../../public/productImgs/Product-16.jpg";

const CozaProvider = (props) => {
  const data = [
    [
      {
        name: "Esprit Ruffle Shirt",
        price: 16.64,
        id: "i1",
        image: image1,
        section: "Female",
        key: Math.random(),
      },
      {
        name: "Herschel supply",
        price: 35.31,
        id: "i2",
        image: image2,
        section: "Female",
        key: Math.random(),
      },
      {
        name: "Only Check Trouser",
        price: 25.5,
        id: "i3",
        section: "Male",
        image: image3,
        key: Math.random(),
      },
      {
        name: "Classic Trench Coat",
        price: 75.0,
        id: "i4",
        image: image4,
        section: "Female",
        key: Math.random(),
      },
      {
        name: "Front Pocket Jumper",
        price: 34.75,
        id: "i5",
        image: image5,
        section: "Female",
        key: Math.random(),
      },
      {
        name: "Vintage Inspired Classic",
        price: 93.2,
        id: "i6",
        image: image6,
        section: "Watch",
        key: Math.random(),
      },
      {
        name: "Shirt in Stretch Cotton",
        price: 52.66,
        id: "i7",
        image: image7,
        section: "Female",
        key: Math.random(),
      },
      {
        name: "Pieces Metallic Printed",
        price: 75.0,
        id: "i8",
        image: image8,
        section: "Female",
        key: Math.random(),
      },
      {
        name: "Converse All Star Hi Plimsolls",
        price: 75.0,
        id: "i9",
        section: "Shoes",
        image: image9,
        key: Math.random(),
      },
      {
        name: "Femme T-Shirt In Stripe",
        price: 25.85,
        id: "i10",
        section: "Female",
        image: image10,
        key: Math.random(),
      },
      {
        name: "Herschel supply",
        price: 63.16,
        id: "i11",
        section: "Male",
        image: image11,
        key: Math.random(),
      },
      {
        name: "Herschel supply",
        price: 63.15,
        id: "i12",
        section: "Male",
        image: image12,
        key: Math.random(),
      },
      {
        name: "T-Shirt with Sleeve",
        price: 18.49,
        id: "i13",
        section: "Female",
        image: image13,
        key: Math.random(),
      },
      {
        name: "Pretty Little Thing",
        price: 54.79,
        id: "i14",
        section: "Female",
        image: image14,
        key: Math.random(),
      },
      {
        name: "Mini Silver Mesh Watch",
        price: 86.85,
        id: "i15",
        section: "Watch",
        image: image15,
        key: Math.random(),
      },
      {
        name: "Square Neck Back",
        price: 29.64,
        id: "i15",
        section: "Female",
        image: image16,
        key: Math.random(),
      },
    ],
  ];

  return (
    <DataContext.Provider value={data}>{props.children}</DataContext.Provider>
  );
};

export default CozaProvider;
