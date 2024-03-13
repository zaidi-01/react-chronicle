import express from "express";
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// TODO: Add api routes

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
