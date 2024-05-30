import app from "./app.js";
import { PORT } from "./config.js";

app.listen(PORT, () => {
  console.log(`The server is running on the port ${PORT}`);
});
