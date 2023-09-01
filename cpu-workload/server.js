const express = require("express");
const path = require("path");
const sharp = require("sharp");
const { v4: uuidv4 } = require("uuid");
const fs = require("fs/promises");

const app = express();

const PORT = 8000;

console.log("Process ID", process.pid);
const image = path.join(__dirname, "unsplash.jpg");

app.get("/resize-images", async (_req, res) => {
  const filename = path.join(__dirname, "outputs", `${uuidv4()}.jpg`);

  sharp(image)
    .resize(200, 200)
    .toBuffer()
    .then(async (data) => {
      await fs.writeFile(filename, data);
      res.status(200).json({
        message: `Saved file to ${filename}`,
      });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running ${PORT}`);
});
