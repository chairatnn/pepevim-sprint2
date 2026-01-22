import React from "react";

export default function LoadingPage() {
  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#ffffff",
      }}
    >
      <div
        style={{
          width: "48px",
          height: "48px",
          border: "5px solid #e5e7eb",
          borderTop: "5px solid #6366f1",
          borderRadius: "50%",
          animation: "spin 1s linear infinite",
        }}
      />
      <p
        style={{
          marginTop: "16px",
          fontSize: "16px",
          color: "#6b7280",
        }}
      >
        Loading...
      </p>

      <style>
        {`
          @keyframes spin {
            to {
              transform: rotate(360deg);
            }
          }
        `}
      </style>
    </div>
  );
}
