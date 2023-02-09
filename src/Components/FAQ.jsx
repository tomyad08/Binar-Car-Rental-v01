import React from "react";
import Accordion from "react-bootstrap/Accordion";

const FAQ = () => {
  const dataFAQ = [
    {
      id: "1",
      pertanyaan: "Apa saja syarat yang dibutuhkan?",
      jawaban:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: "2",
      pertanyaan: "Berapa hari minimal sewa mobil lepas kunci?",
      jawaban:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: "3",
      pertanyaan: "Berapa hari sebelumnya sabaiknya booking sewa mobil?",
      jawaban:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
    {
      id: "4",
      pertanyaan: "Apakah Ada biaya antar-jemput?",
      jawaban:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod",
    },
  ];

  return (
    <div className="row container-fluid mt-5 px-4" id="FAQ">
      <div className="col-md">
        <h1 id="teks" className="float-end pe-5 ">
          Frequently Asked Question
        </h1>
        <p id="teks" className="float-end pe-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit
        </p>
      </div>
      {/* accordian */}
      <div className=" col-md text-start">
        <Accordion defaultActiveKey="0" id="accor">
          {dataFAQ.map((value) => (
            <div>
              <Accordion.Item
                eventKey={value.id}
                className="border border-2 mb-3"
              >
                <Accordion.Header>{value.pertanyaan}</Accordion.Header>
                <Accordion.Body>{value.jawaban}</Accordion.Body>
              </Accordion.Item>
            </div>
          ))}
        </Accordion>
      </div>
      {/* akhir */}
    </div>
  );
};
export default FAQ;
