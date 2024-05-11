import React from "react";
import Link from "next/link";

const certificates = [
  {
    title: "AWS Could Practitioner Essentials",
    pdfCertificate: "/Certificates/AWS_CPE.pdf",
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
  {
    title: "AWS Partner Sales Accreditation (Business)",
    pdfCertificate: "/Certificates/AWS_TE.pdf",
  },
];

const Certificates = () => {
  return (
    <>
      <h2 className="font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32">
        Certificates
      </h2>
      <div className="flex flex-row pt-4">
        {certificates.map(({ title, pdfCertificate }, index) => (
          <Link
            href={pdfCertificate}
            target={"_blank"}
            key={index}
            style={{
              marginRight: "10px",
              marginBottom: "10px",
              padding: "5px 10px",
              borderRadius: "5px",
              backgroundColor: getColor(index),
              color: "#fff",
            }}
          >
            <span>{title}</span>
          </Link>
        ))}
      </div>
    </>
  );
};

const getColor = (index) => {
  const colors = ["#007bff", "#28a745", "#dc3545", "#ffc107", "#17a2b8"];
  return colors[index % colors.length];
};

export default Certificates;
