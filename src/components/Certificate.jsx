import React, { useState } from "react";

export default function CertificatesSection() {
  const certificates = [
    {
      title: "Internship Certificate",
      img: "/internship.png",
      institute: "XCEL Corp, Bangalore",
      year: "2024",
    },
    {
      title: "Python AI/ML Program",
      img: "/python.jpeg",
      institute: "Great Learning",
      year: "2023",
    },
    {
      title: "IBM Cloud Essentials",
      img: "/ibm.png",
      institute: "IBM SkillsBuild",
      year: "2023",
    },
  ];

  const [previewImg, setPreviewImg] = useState(null);

  return (
    <section
      id="certificates"
      style={{
        padding: "100px 20px",
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
          marginTop: "-40px",
          fontWeight: "800",
        }}
      >
        Certificates
      </h2>

      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: 30,
          animation: "fadeUp 1.4s ease",
        }}
      >
        {certificates.map((c, i) => (
          <div
            key={i}
            onClick={() => setPreviewImg(c.img)}
            style={{
              padding: 20,
              borderRadius: 18,
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.15)",
              backdropFilter: "blur(10px)",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
              cursor: "pointer",
              transition: "0.4s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-12px) scale(1.05)";
              e.currentTarget.style.border =
                "1px solid rgba(0, 234, 255, 0.5)";
              e.currentTarget.style.boxShadow =
                "0 25px 80px rgba(0, 234, 255, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0) scale(1)";
              e.currentTarget.style.border =
                "1px solid rgba(255,255,255,0.15)";
              e.currentTarget.style.boxShadow =
                "0 15px 40px rgba(0,0,0,0.4)";
            }}
          >
            <img
              src={c.img}
              style={{
                width: "100%",
                height: "190px",
                objectFit: "cover",
                borderRadius: 12,
                transition: "0.4s ease",
                boxShadow: "0 6px 14px rgba(0,0,0,0.3)",
              }}
            />

            <h4
              style={{
                marginTop: 14,
                fontSize: "1.15rem",
                color: "#dff6ff",
              }}
            >
              {c.title}
            </h4>

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

      {/* POPUP MODAL */}
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
            backdropFilter: "blur(10px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9000,
            animation: "fadeIn 0.4s ease",
          }}
        >
          <div
            style={{
              position: "relative",
              padding: 12,
              borderRadius: 16,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.2)",
              animation: "zoomIn 0.4s ease",
            }}
          >
            <button
              onClick={() => setPreviewImg(null)}
              style={{
                position: "absolute",
                top: -18,
                right: -18,
                width: 42,
                height: 42,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.2)",
                border: "1px solid rgba(255,255,255,0.4)",
                cursor: "pointer",
                color: "white",
                fontSize: "18px",
                backdropFilter: "blur(4px)",
              }}
            >
              ✕
            </button>

            <img
              src={previewImg}
              style={{
                maxWidth: "92vw",
                maxHeight: "82vh",
                borderRadius: 12,
              }}
            />
          </div>
        </div>
      )}

      <style>{`
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
          0% { transform: scale(0.7); opacity: 0; }
          100% { transform: scale(1); opacity: 1; }
        }
      `}</style>
    </section>
  );
}
