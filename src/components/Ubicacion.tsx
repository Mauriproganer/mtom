export default function Ubicacion() {
  return (
    <div style={{ display: "flex", gap: "20px", padding: "40px" }}>
      
      <iframe
        src="https://www.google.com/maps?q=Portal+de+l'Angel+40+Barcelona&output=embed"
        width="50%"
        height="300"
        style={{ border: 0 }}
        loading="lazy"
      ></iframe>

      <img
        src="/local.jpg"
        alt="Local"
        style={{ width: "50%", objectFit: "cover" }}
      />
    </div>
  );
}
