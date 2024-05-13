const fs = require("fs/promises");
const start = async () => {
  try {
    const data = await fs.readFile("./content/1.txt", { encoding: "utf-8" });
    await fs.writeFile("./content/2.txt", `MESSAGE FROM 1.txt: ${data}`, {
      encoding: "utf-8",
    });
    const data2 = await fs.readFile("./content/2.txt", { encoding: "utf-8" });
    console.log(data2);
  } catch (error) {
    console.error(error);
  }
};
start();
