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
        background: "linear-gradient(180deg, #050505, #0c0c0c, #050505)",
        color: "white",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <h2
        style={{
          fontSize: "2.9rem",
          marginBottom: 40,
          background: "linear-gradient(90deg,#89f2ff,#cb7bff,#ff7adf)",
          WebkitBackgroundClip: "text",
          color: "transparent",
          animation: "slideDown 1.2s ease",
          fontWeight: "800",
          letterSpacing: "1px",
        }}
      >
        Certificates
      </h2>

      {/* Certificates Grid */}
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
              padding: 22,
              borderRadius: 20,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 12px 40px rgba(0,0,0,0.45)",
              cursor: "pointer",
              transition: "0.35s",
              animation: `fadeUp 0.8s ease ${i * 0.12}s forwards`,
              transform: "translateY(40px)",
              opacity: 0,
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-10px)";
              e.currentTarget.style.boxShadow =
                "0 22px 60px rgba(120,80,255,0.45)";
              e.currentTarget.style.border =
                "1px solid rgba(180,120,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0px)";
              e.currentTarget.style.boxShadow =
                "0 12px 40px rgba(0,0,0,0.45)";
              e.currentTarget.style.border =
                "1px solid rgba(255,255,255,0.12)";
            }}
          >
            {/* Certificate Image */}
            <img
              src={c.img}
              style={{
                width: "100%",
                height: "190px",
                objectFit: "cover",
                borderRadius: 14,
                transition: "0.35s",
                filter: "brightness(0.92)",
              }}
            />

            <h4
              style={{
                marginTop: 14,
                fontSize: "1.2rem",
                color: "#eaf7ff",
                fontWeight: 600,
              }}
            >
              {c.title}
            </h4>

            <p
              style={{ fontSize: "0.9rem", color: "#c6e8ff", marginTop: 5 }}
            >
              {c.institute}
            </p>

            <p
              style={{
                fontSize: "0.85rem",
                color: "#a7d7ff",
                opacity: 0.9,
                marginTop: 4,
              }}
            >
              {c.year}
            </p>
          </div>
        ))}
      </div>

      {/* IMAGE POPUP MODAL */}
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
            backdropFilter: "blur(12px)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 9999,
            animation: "fadeIn 0.4s ease",
          }}
        >
          <div
            style={{
              position: "relative",
              padding: 15,
              borderRadius: 18,
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.25)",
              animation: "zoomIn 0.35s ease",
            }}
          >
            {/* Close Button */}
            <button
              onClick={() => setPreviewImg(null)}
              style={{
                position: "absolute",
                top: -20,
                right: -20,
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
                maxHeight: "83vh",
                borderRadius: 14,
                boxShadow: "0 10px 40px rgba(0,0,0,0.5)",
              }}
            />
          </div>
        </div>
      )}

      {/* CSS Animations */}
      <style>{`
        @keyframes fadeUp {
          0% { opacity: 0; transform: translateY(40px); }
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

        @keyframes slideDown {
          0% { opacity: 0; transform: translateY(-40px); }
          100% { opacity: 1; transform: translateY(0); }
        }

        /* MOBILE RESPONSIVE */
        @media (max-width: 600px) {
          #certificates h2 {
            font-size: 2.2rem;
          }

          #certificates div[style*="grid"] {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 18px !important;
          }

          img {
            height: 150px !important;
          }
        }
      `}</style>
    </section>
  );
}
