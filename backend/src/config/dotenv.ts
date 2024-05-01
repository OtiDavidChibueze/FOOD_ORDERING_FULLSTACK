import dotenv from "dotenv";
dotenv.config();

const PORT: string | undefined = process.env.port;

export { PORT };
