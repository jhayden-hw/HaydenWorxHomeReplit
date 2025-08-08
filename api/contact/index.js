const { z } = require('zod');

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Valid email is required"),
  phone: z.string().optional(),
  serviceType: z.enum(['home-design', 'project-management', 'interior-design', 'consultation']),
  projectType: z.string().optional(),
  timeline: z.string().optional(),
  budget: z.string().optional(),
  message: z.string().min(1, "Message is required")
});

// In-memory storage for development (replace with Cosmos DB in production)
let contactSubmissions = [];

module.exports = async function (context, req) {
  context.log('Contact form submission received');

  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    context.res = {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Access-Control-Allow-Headers': 'Content-Type'
      }
    };
    return;
  }

  try {
    // Validate request body
    const validatedData = contactSchema.parse(req.body);
    
    // Create submission record
    const submission = {
      id: generateId(),
      ...validatedData,
      submittedAt: new Date().toISOString(),
      status: 'new'
    };

    // Store submission (in production, use Cosmos DB)
    contactSubmissions.push(submission);
    
    context.log(`Contact submission stored for: ${submission.name} (${submission.email})`);

    // TODO: In production, add email notification here
    // await sendNotificationEmail(submission);

    context.res = {
      status: 200,
      headers: {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json'
      },
      body: {
        success: true,
        message: 'Your inquiry has been submitted successfully. We will contact you within 24 hours.',
        submissionId: submission.id
      }
    };

  } catch (error) {
    context.log.error('Contact form submission error:', error);

    if (error.name === 'ZodError') {
      context.res = {
        status: 400,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: {
          success: false,
          message: 'Please check your form data and try again.',
          errors: error.errors
        }
      };
    } else {
      context.res = {
        status: 500,
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Content-Type': 'application/json'
        },
        body: {
          success: false,
          message: 'An error occurred while processing your request. Please try again later.'
        }
      };
    }
  }
};

function generateId() {
  return Date.now().toString(36) + Math.random().toString(36).substr(2);
}