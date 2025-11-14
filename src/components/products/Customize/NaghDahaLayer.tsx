import { useEffect, useRef } from "react";

export default function NaghDahaLayer({ layers }) {
  const canvasRefs = useRef([]);

  layers.forEach((layer, index) => {
    useEffect(() => {
      const canvas = canvasRefs.current[index];
      if (!canvas) return;
      const ctx = canvas.getContext("2d");

      const img = new Image();
      img.src = layer.src;
      img.onload = () => {
        canvas.width = img.width;
        canvas.height = img.height;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        if (layer.color) {
          ctx.globalCompositeOperation = "source-in";
          ctx.fillStyle = layer.color;
          ctx.fillRect(0, 0, canvas.width, canvas.height);
        }
      };
    }, [layer.color]);
  });

  return (
    <div style={{ position: 'relative', width: '40vw' }}>
      {layers.map((_, index) => (
        <canvas
          key={index}
          ref={(el) => (canvasRefs.current[index] = el)}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            display: 'block',
          }}
        />
      ))}
    </div>
  );
}
