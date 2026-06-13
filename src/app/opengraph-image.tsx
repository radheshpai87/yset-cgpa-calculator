import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "YSET GPA Calculator — Calculate SGPA and CGPA";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          background: "linear-gradient(135deg, #f0fdf4 0%, #ffffff 50%, #f0fdf4 100%)",
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px",
        }}
      >
        {/* Top badge */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "20px",
            background: "#dcfce7",
            padding: "8px 20px",
            borderRadius: "999px",
            fontSize: "20px",
            color: "#166534",
          }}
        >
          Yenepoya School of Engineering & Technology
        </div>

        {/* Main title */}
        <div
          style={{
            fontSize: "72px",
            fontWeight: 700,
            color: "#111",
            textAlign: "center",
            lineHeight: 1.1,
            marginBottom: "16px",
          }}
        >
          GPA Calculator
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: "28px",
            color: "#555",
            textAlign: "center",
            marginBottom: "40px",
          }}
        >
          Calculate SGPA & CGPA instantly — Upload marksheet, get results
        </div>

        {/* Feature pills */}
        <div style={{ display: "flex", gap: "16px" }}>
          {["SGPA Calculator", "CGPA Calculator", "PDF Upload", "All Branches"].map(
            (feature) => (
              <div
                key={feature}
                style={{
                  background: "#16a34a",
                  color: "white",
                  padding: "10px 24px",
                  borderRadius: "12px",
                  fontSize: "18px",
                  fontWeight: 600,
                }}
              >
                {feature}
              </div>
            )
          )}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: "40px",
            fontSize: "20px",
            color: "#999",
          }}
        >
          yset-gpa.vercel.app
        </div>
      </div>
    ),
    { ...size }
  );
}
