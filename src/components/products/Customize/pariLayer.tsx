import { useEffect, useRef } from "react";

export default function LayeredRug({ layers }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    async function draw() {
      // Load first image to get correct size
      const firstImg = new Image();
      firstImg.src = layers[0].src;
      await firstImg.decode();

      // Dynamically match canvas to image size
      canvas.width = firstImg.width;
      canvas.height = firstImg.height;

      // Clear before drawing
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw each layer
      for (const layer of layers) {
        const img = new Image();
        img.src = layer.src;
        await img.decode();

        // Temporary canvas for color tinting
        const temp = document.createElement("canvas");
        temp.width = canvas.width;
        temp.height = canvas.height;
        const tctx = temp.getContext("2d");

        // Draw base
        tctx.drawImage(img, 0, 0, canvas.width, canvas.height);

        // Apply color if needed
        if (layer.color) {
          tctx.globalCompositeOperation = "source-in";
          tctx.fillStyle = layer.color;
          tctx.fillRect(0, 0, temp.width, temp.height);
        }

        // Draw tinted layer to main canvas
        ctx.drawImage(temp, 0, 0, canvas.width, canvas.height);
      }
    }

    draw();
  }, [layers]);

  
  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "40vw", 
        display: "block",
      }}
    />
  );
}
