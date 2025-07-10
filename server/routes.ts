import type { Express } from "express";
import { createServer, type Server } from "http";
import path from "path";
import { storage } from "./storage";

export async function registerRoutes(app: Express): Promise<Server> {
  // Resume download endpoint
  app.get("/api/download-resume", (req, res) => {
    const resumePath = path.join(import.meta.dirname, "public", "Sachin_Rathod_Resume.pdf");
    
    try {
      res.setHeader('Content-Type', 'application/pdf');
      res.setHeader('Content-Disposition', 'attachment; filename="Sachin_Rathod_Resume.pdf"');
      res.sendFile(resumePath);
    } catch (error) {
      console.error('Error downloading resume:', error);
      res.status(404).json({ message: 'Resume not found' });
    }
  });

  // Contact form endpoint (optional - for future use)
  app.post("/api/contact", (req, res) => {
    const { name, email, message } = req.body;
    
    // In a real application, you would send an email or save to database
    console.log('Contact form submission:', { name, email, message });
    
    res.json({ message: 'Thank you for your message! I will get back to you soon.' });
  });

  const httpServer = createServer(app);

  return httpServer;
}
