import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      const validatedData = insertContactSubmissionSchema.parse(req.body);
      
      const submission = await storage.createContactSubmission(validatedData);
      
      // In a real implementation, you would send an email here
      // For now, we'll just log the submission
      console.log("New contact submission:", submission);
      
      res.json({ 
        success: true, 
        message: "Thank you for your inquiry! We will contact you within 24 hours.",
        id: submission.id 
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        res.status(400).json({
          success: false,
          message: "Please check your form data",
          errors: validationError.toString(),
        });
      } else {
        console.error("Contact form error:", error);
        res.status(500).json({
          success: false,
          message: "Sorry, there was an error processing your request. Please try again.",
        });
      }
    }
  });

  // Get all contact submissions (for admin purposes)
  app.get("/api/contact-submissions", async (req, res) => {
    try {
      const submissions = await storage.getContactSubmissions();
      res.json(submissions);
    } catch (error) {
      console.error("Error fetching contact submissions:", error);
      res.status(500).json({
        success: false,
        message: "Error fetching contact submissions",
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
