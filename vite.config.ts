import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const contactApiPlugin = () => {
  return {
    name: "contact-api",
    configureServer(server) {
      server.middlewares.use(async (req, res, next) => {
        if (req.url === "/api/contact" && req.method === "POST") {
          let body = "";
          req.on("data", (chunk) => {
            body += chunk.toString();
          });
          req.on("end", async () => {
            try {
              const data = JSON.parse(body);
              const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: process.env.GMAIL_USER,
                  pass: process.env.GMAIL_APP_PASSWORD,
                },
              });

              await transporter.sendMail({
                from: process.env.GMAIL_USER,
                to: process.env.GMAIL_USER,
                replyTo: data.email,
                subject: `New Message from ${data.name} via Portfolio`,
                text: `Name: ${data.name}\nEmail: ${data.email}\n\nMessage:\n${data.message}`,
              });

              res.statusCode = 200;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ success: true }));
            } catch (error) {
              console.error(error);
              res.statusCode = 500;
              res.setHeader("Content-Type", "application/json");
              res.end(JSON.stringify({ error: "Failed to send message" }));
            }
          });
        } else {
          next();
        }
      });
    },
  };
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), contactApiPlugin()],
});
