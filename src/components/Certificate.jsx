import React, { useState } from "react";

export default function CertificatesSection() {
  const certificates = [
    {
      title: "Internship Certificate",
      img: "/internship.png",
      institute: "XCEL Corp, Bangalore",
      year: "2024"
    },
    {
      title: "Python AI/ML Program",
      img: "/python.jpeg",
      institute: "Great Learning",
      year: "2023"
    },
    {
      title: "IBM Cloud Essentials",
      img: "/ibm.png",
      institute: "IBM SkillsBuild",
      year: "2023"
    }
  ];

  const [previewImg, setPreviewImg] = useState(null);

  return (
    <section
      id="certificates"
      style={{
        padding: "90px 20px",
        background: "linear-gradient(180deg, #020202, #090909, #050505)",
        color: "white",
        textAlign: "center",
      }}
    >
      <h2
        style={{
          fontSize: "2.8rem",
          marginBottom: 40,
          background: "linear-gradient(90deg,#7ef0ff,#c97bff)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          animation: "fadeDown 1.2s ease",
                    marginTop:'-50px'

        }}
      >
        Certificates
      </h2>

      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: 28,
          animation: "fadeUp 1.4s ease",
        }}
      >
        {certificates.map((c, i) => (
          <div
            key={i}
            onClick={() => setPreviewImg(c.img)}
            style={{
              padding: 18,
              borderRadius: 16,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 15px 40px rgba(0,0,0,0.4)",
              transition: "transform .35s ease, box-shadow .35s ease, border .35s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px) scale(1.03)";
              e.currentTarget.style.boxShadow = "0 30px 80px rgba(0, 234, 255, 0.15)";
              e.currentTarget.style.border = "1px solid rgba(0, 234, 255, 0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.boxShadow = "0 15px 40px rgba(0,0,0,0.4)";
              e.currentTarget.style.border = "1px solid rgba(255,255,255,0.07)";
            }}
          >
            <img
              src={c.img}
              style={{
                width: "100%",
                height: "180px",
                objectFit: "cover",
                objectPosition: "center",
                borderRadius: 12,
                transition: "transform .4s ease",
              }}
            />

            {/* Title */}
            <h4
              style={{
                marginTop: 10,
                fontSize: "1.15rem",
                color: "#dff6ff",
              }}
            >
              {c.title}
            </h4>

            {/* Institute */}
            <p
              style={{
                margin: 0,
                fontSize: "0.9rem",
                color: "#bde9ff",
                opacity: 0.9,
              }}
            >
              {c.institute}
            </p>

            {/* Year */}
            <p
              style={{
                marginTop: 4,
                fontSize: "0.85rem",
                color: "#9ad1ff",
                opacity: 0.8,
              }}
            >
              {c.year}
            </p>
          </div>
        ))}
      </div>

      {/* POPUP */}
      {previewImg && (
        <div
          onClick={() => setPreviewImg(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            background: "rgba(0,0,0,0.85)",
            backdropFilter: "blur(8px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 5000,
            animation: "fadeIn 0.4s ease",
          }}
        >
          <div
            style={{
              position: "relative",
              padding: 10,
              background: "rgba(255,255,255,0.04)",
              borderRadius: 14,
              border: "1px solid rgba(255,255,255,0.15)",
              boxShadow: "0 25px 80px rgba(0,0,0,0.6)",
              animation: "zoomIn 0.4s ease",
            }}
          >
            <button
              onClick={() => setPreviewImg(null)}
              style={{
                position: "absolute",
                top: -15,
                right: -15,
                background: "rgba(255,255,255,0.15)",
                backdropFilter: "blur(6px)",
                border: "1px solid rgba(255,255,255,0.3)",
                width: 40,
                height: 40,
                borderRadius: "50%",
                fontSize: "18px",
                cursor: "pointer",
                color: "white",
              }}
            >
              ✕
            </button>

            <img
              src={previewImg}
              style={{
                maxWidth: "90vw",
                maxHeight: "80vh",
                borderRadius: 10,
              }}
            />
          </div>
        </div>
      )}

      <style>
        {`
          @keyframes fadeUp {
            0% { opacity: 0; transform: translateY(40px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeDown {
            0% { opacity: 0; transform: translateY(-30px); }
            100% { opacity: 1; transform: translateY(0); }
          }
          @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
          }
          @keyframes zoomIn {
            0% { transform: scale(0.6); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}
      </style>
    </section>
  );
}
