import React from "react";

const WhyUs = () => {
  const dataKonten = [
    {
      id: "1",
      gambar: "./assets/icon_complete.png",
      judul: "Mobil Lengkap",
      deskripsi:
        "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
    },
    {
      id: "2",
      gambar: "./assets/icon_price.png",
      judul: "Harga Murah",
      deskripsi:
        "  Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
    },
    {
      id: "3",
      gambar: "./assets/icon_24hrs.png",
      judul: "Layanan 24 Jam",
      deskripsi:
        " Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
    },
    {
      id: "4",
      gambar: "./assets/icon_professional.png",
      judul: "Supir Profesional",
      deskripsi:
        "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
    },
  ];
  console.log(dataKonten.gambar);
  return (
    <>
      <div className="container fluid mt-3 px-4" id="whyUs">
        <h2>Why Us?</h2>
        <p style={{ textAlign: "justify" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint saepe
          ipsam eligendi quas sit voluptate cumque nostrum autem, quos error id
          accusantium, tempore, sequi ex eveniet labore illo incidunt natus at
          ullam distinctio assumenda aspernatur enim. Rerum, nihil! Dignissimos
          modi a quis similique nostrum blanditiis saepe eaque ullam provident
          velit.
        </p>
        <div className="row">
          {dataKonten.map((value) => (
            <div
              key={value.id}
              className="border border-2 rounded-2 col-md me-3 p-2 mb-2"
            >
              <img src={value.gambar} alt=" " />
              <h5>{value.judul}</h5>
              <p style={{ textAlign: "justify" }}>{value.deskripsi}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default WhyUs;
