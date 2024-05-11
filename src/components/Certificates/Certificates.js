import React from "react";
import Link from "next/link";
import { Award } from "lucide-react";

const certificates = [
  {
    title: "AWS Could Practitioner Essentials",
    pdfCertificate: "/Certificates/AWS_CPE.pdf",
  },
  {
    title: "AWS Partner Sales Accreditation (Business)",
    pdfCertificate: "/Certificates/AWS_TE.pdf",
  },
  {
    title: "AWS Partner Accreditation (Technical)",
    pdfCertificate: "/Certificates/AWS_Partner_AT.pdf",
  },
  {
    title: "AWS Partner Cloud Economics",
    pdfCertificate: "/Certificates/AWS_Partner_CE.pdf",
  },
  {
    title: "AWS Technical Essentials",
    pdfCertificate: "/Certificates/AWS_Partner_SAB.pdf",
  },
];

const Certificates = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Certificates
      </h2>
      <div className="flex flex-row items-center md:flex-row md:flex-wrap md:justify-center pt-4">
        {certificates.map(({ title, pdfCertificate }, index) => (
          <Link href={pdfCertificate} target={"_blank"} key={index}>
            <span
              className="bg-gray-500 text-white rounded-lg py-2 px-4 m-2 flex items-center"
              style={{ backgroundColor: getColor(index) }}
            >
              <span className="mr-2">{title}</span>
              <span>
                <Award size={24} />
              </span>
            </span>
          </Link>
        ))}
      </div>
    </>
  );
};

const getColor = (index) => {
  const colors = ["#A9A9A9", "#808080", "#D3D3D3", "#E5E4E2", "#848884"];
  return colors[index % colors.length];
};

export default Certificates;
