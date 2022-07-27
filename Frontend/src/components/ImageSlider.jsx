import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Designer_Shoes_2160x.jpg?v=1630420978" },
  { url: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/fENDI_2160x.jpg?v=1630506238" },
  { url: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/gucci_2160x.jpg?v=1630503443" },
  { url: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Prada_2160x.jpg?v=1630505683" },
  { url: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/saint_laurent_3_2160x.jpg?v=1630508580" },
  { url: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/sunglasses1_2160x.jpg?v=1615211259" },
  { url: "https://cdn.shopify.com/s/files/1/0248/3473/6191/files/Valentino_2160x.jpg?v=1630420054" },
];

export const ImageSlider= () => {
  return (
    <div>
      <SimpleImageSlider
        width={1366}
        height={420}
        images={images}
        showBullets={false}
        showNavs={true}
        autoPlay={true}
      />
    </div>
  );
}