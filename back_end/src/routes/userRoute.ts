import express from "express";
import { login, register } from "../services/userService";

const router = express.Router();

router.post("/register", async (request, response) => {
  try {
    const { firstName, lastName, email, password } = request.body;
    const { statusCode, data } = await register({
      firstName,
      lastName,
      email,
      password,
    });
    response.status(statusCode).send(data);
  } catch (err) {
    response.status(500).send("Something went worong!");
  }
});

router.post("/login", async (request, response) => {
  try {
    const { email, password } = request.body;
    const { statusCode, data } = await login({ email, password });
    response.status(statusCode).send(data);
  } catch (err) {
    response.status(500).send("Something went worong!");
  }
});

export default router;
