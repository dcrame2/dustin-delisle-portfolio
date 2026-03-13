import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const alt = "Dustin DeLisle – Logistics Sales Leader";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OGImage() {
  const photoData = await readFile(
    join(process.cwd(), "public", "dustin.png")
  );
  const photoBase64 = `data:image/png;base64,${photoData.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Dark navy background with gradient */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(135deg, #0f172a 0%, #1e293b 40%, #0f172a 100%)",
            display: "flex",
          }}
        />

        {/* Decorative accent circles */}
        <div
          style={{
            position: "absolute",
            top: -80,
            right: -80,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -120,
            left: -60,
            width: 500,
            height: 500,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(37,99,235,0.1) 0%, transparent 70%)",
            display: "flex",
          }}
        />

        {/* Content */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            padding: "60px 70px",
            gap: 60,
          }}
        >
          {/* Left side - Text */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              flex: 1,
              gap: 0,
            }}
          >
            {/* Top accent line */}
            <div
              style={{
                width: 60,
                height: 4,
                background: "#2563eb",
                borderRadius: 2,
                marginBottom: 24,
                display: "flex",
              }}
            />
            <div
              style={{
                fontSize: 18,
                fontWeight: 600,
                color: "#60a5fa",
                textTransform: "uppercase" as const,
                letterSpacing: 4,
                marginBottom: 12,
                display: "flex",
              }}
            >
              Portfolio
            </div>
            <div
              style={{
                fontSize: 64,
                fontWeight: 800,
                color: "#ffffff",
                lineHeight: 1.1,
                marginBottom: 16,
                display: "flex",
              }}
            >
              Dustin DeLisle
            </div>
            <div
              style={{
                fontSize: 26,
                fontWeight: 600,
                color: "#fbbf24",
                marginBottom: 24,
                display: "flex",
              }}
            >
              Carrier Sales Zone Manager
            </div>
            <div
              style={{
                fontSize: 18,
                color: "#94a3b8",
                lineHeight: 1.5,
                display: "flex",
              }}
            >
              6+ Years in Logistics · Chicago, IL
            </div>

            {/* Stats row */}
            <div
              style={{
                display: "flex",
                gap: 40,
                marginTop: 32,
              }}
            >
              {[
                { num: "6+", label: "Years" },
                { num: "100+", label: "Clients" },
                { num: "5", label: "Firms" },
              ].map((s) => (
                <div
                  key={s.label}
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 32,
                      fontWeight: 800,
                      color: "#ffffff",
                      display: "flex",
                    }}
                  >
                    {s.num}
                  </div>
                  <div
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      color: "#64748b",
                      textTransform: "uppercase" as const,
                      letterSpacing: 2,
                      display: "flex",
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right side - Photo */}
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              position: "relative",
            }}
          >
            {/* Glow behind photo */}
            <div
              style={{
                position: "absolute",
                inset: -12,
                borderRadius: 28,
                background: "rgba(37,99,235,0.2)",
                filter: "blur(20px)",
                display: "flex",
              }}
            />
            <img
              src={photoBase64}
              alt="Dustin DeLisle"
              width={340}
              height={420}
              style={{
                objectFit: "cover",
                objectPosition: "top",
                borderRadius: 20,
                border: "3px solid rgba(255,255,255,0.15)",
                position: "relative",
              }}
            />
          </div>
        </div>

        {/* Bottom accent bar */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 4,
            background: "linear-gradient(90deg, #2563eb, #fbbf24, #2563eb)",
            display: "flex",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
