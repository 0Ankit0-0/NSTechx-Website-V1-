import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { motion } from "framer-motion";
import { Send, CheckCircle2, Mail, Phone, User, Briefcase } from "lucide-react";
import { AnimatedSection } from "@/components/AnimatedSection";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import demoImage from "@/assets/png_jpg_jpeg_images/Demo.png";

// Form validation schema
const formSchema = z.object({
  firstName: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(50, "First name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "First name should only contain letters"),
  lastName: z
    .string()
    .min(2, "Last name must be at least 2 characters")
    .max(50, "Last name must be less than 50 characters")
    .regex(/^[a-zA-Z\s]+$/, "Last name should only contain letters"),
  workEmail: z
    .string()
    .email("Please enter a valid email address")
    .min(5, "Email is required")
    .refine(
      (email) => {
        // Basic business email validation - exclude common free email providers
        const freeEmailProviders = [
          "gmail.com",
          "yahoo.com",
          "hotmail.com",
          "outlook.com",
        ];
        const domain = email.split("@")[1]?.toLowerCase();
        return !freeEmailProviders.includes(domain);
      },
      {
        message: "Please use your work email address",
      }
    ),
  contactNumber: z
    .string()
    .min(10, "Contact number must be at least 10 digits")
    .max(15, "Contact number must be less than 15 digits")
    .regex(/^[0-9+\-\s()]+$/, "Please enter a valid phone number"),
  requirements: z
    .string()
    .min(
      20,
      "Please provide at least 20 characters describing your requirements"
    )
    .max(1000, "Requirements description must be less than 1000 characters"),
});

type FormData = z.infer<typeof formSchema>;

export default function RequestDemo() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      workEmail: "",
      contactNumber: "",
      requirements: "",
    },
  });

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);

    try {
      const API_URL = import.meta.env.VITE_API_URL || "http://localhost:3000";

      console.log("Sending request to:", `${API_URL}/api/request-demo`);

      // Send data to backend API for processing
      const response = await fetch(`${API_URL}/api/request-demo`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: `${data.firstName} ${data.lastName}`,
          email: data.workEmail,
          phone: data.contactNumber,
          message: data.requirements,
          company: "", // Optional
        }),
      });

      console.log("Response status:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Response error:", errorText);
        throw new Error("Failed to submit request");
      }

      const result = await response.json();
      console.log("Response data:", result);

      // Show success message
      toast.success("Demo Request Submitted!", {
        description:
          "Thank you for your interest! Our team will contact you within 24 hours.",
      });

      // Reset form after successful submission
      form.reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Something went wrong!", {
        description: "Please try again or contact us directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] lg:min-h-[75vh] flex items-center overflow-hidden text-white">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <motion.img
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src={demoImage}
            alt="Demo"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-green-900/95 via-green-800/90 to-green-900/30" />
        </div>

        {/* Background Shapes */}
        <div className="absolute top-0 -left-4 w-72 h-72 bg-green-500 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 -right-4 w-72 h-72 bg-green-600 rounded-full mix-blend-lighten filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>

        <div className="container mx-auto px-4 sm:px-6 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            {/* Text Content */}
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold !leading-tight mb-4">
                See NStechX products in Action
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8">
                Discover how our AI-driven platform can eliminate manual errors,
                ensure compliance, and provide real-time financial insights.
              </p>
              <div className="space-y-4 inline-block text-left">
                <div className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-200">AI-Powered Reconciliation</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-200">Automated Compliance Checks</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle2 className="w-6 h-6 text-green-400 mr-3 flex-shrink-0" />
                  <span className="text-gray-200">Seamless ERP Integration</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-16 md:py-20 lg:py-24 bg-background">
        <div className="container mx-auto px-4 sm:px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <div className="bg-card rounded-2xl p-6 md:p-10 border border-border shadow-2xl">
                {/* Form Header */}
                <div className="mb-8 md:mb-10">
                  <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-3">
                    Get Started Today
                  </h2>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    Collect First Name, Last Name, Work Email ID & Contact No.
                    Description of the requirements.
                  </p>
                  <p className="text-muted-foreground text-sm">
                    Landing Page to be created.
                  </p>
                </div>

                {/* Form */}
                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className="space-y-6"
                  >
                    {/* Name Fields Row */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* First Name */}
                      <FormField
                        control={form.control}
                        name="firstName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <User className="w-4 h-4 text-primary" />
                              First Name
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="John"
                                {...field}
                                className="h-11"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      {/* Last Name */}
                      <FormField
                        control={form.control}
                        name="lastName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="flex items-center gap-2">
                              <User className="w-4 h-4 text-primary" />
                              Last Name
                              <span className="text-destructive">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input
                                placeholder="Doe"
                                {...field}
                                className="h-11"
                              />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                    </div>

                    {/* Work Email */}
                    <FormField
                      control={form.control}
                      name="workEmail"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Mail className="w-4 h-4 text-primary" />
                            Work Email Address
                            <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="john.doe@company.com"
                              {...field}
                              className="h-11"
                            />
                          </FormControl>
                          <FormDescription>
                            Please use your official work email address
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Contact Number */}
                    <FormField
                      control={form.control}
                      name="contactNumber"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Phone className="w-4 h-4 text-primary" />
                            Contact Number
                            <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Input
                              type="tel"
                              placeholder="+91 98765 43210"
                              {...field}
                              className="h-11"
                            />
                          </FormControl>
                          <FormDescription>
                            Include country code for international numbers
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Requirements Description */}
                    <FormField
                      control={form.control}
                      name="requirements"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <Briefcase className="w-4 h-4 text-primary" />
                            Description of Requirements
                            <span className="text-destructive">*</span>
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder="Please describe your requirements, challenges you're facing, and what you'd like to achieve with our solutions..."
                              className="min-h-[150px] resize-none"
                              {...field}
                            />
                          </FormControl>
                          <FormDescription>
                            {field.value.length}/1000 characters (minimum 20
                            characters required)
                          </FormDescription>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    {/* Submit Button */}
                    <div className="pt-4">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full h-12 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white font-medium text-base shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        {isSubmitting ? (
                          <>
                            <motion.div
                              animate={{ rotate: 360 }}
                              transition={{
                                duration: 1,
                                repeat: Infinity,
                                ease: "linear",
                              }}
                              className="w-5 h-5 border-2 border-white border-t-transparent rounded-full mr-2"
                            />
                            Preparing Request...
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5 mr-2" />
                            Request Demo
                          </>
                        )}
                      </Button>
                    </div>
                  </form>
                </Form>
              </div>
            </AnimatedSection>

            {/* Benefits Section */}
            <AnimatedSection delay={0.2}>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {[
                  {
                    icon: CheckCircle2,
                    title: "Quick Response",
                    description: "Get a response within 24 hours",
                  },
                  {
                    icon: Briefcase,
                    title: "Personalized Demo",
                    description: "Tailored to your specific needs",
                  },
                  {
                    icon: Mail,
                    title: "Expert Support",
                    description: "Guidance from our solution experts",
                  },
                ].map((benefit, index) => (
                  <motion.div
                    key={benefit.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-card p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center mb-4 shadow-md">
                      <benefit.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">
                      {benefit.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {benefit.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Alternative Contact Section */}
      <section className="py-16 md:py-20 bg-gradient-blue-light">
        <div className="container mx-auto px-4 sm:px-6">
          <AnimatedSection>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                Prefer to Reach Out Directly?
              </h2>
              <p className="text-muted-foreground mb-8">
                You can also contact us directly via email or phone
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="h-12 border-primary/30 hover:border-primary hover:bg-primary/5"
                >
                  <a href="mailto:contactus@nstechx.co.in">
                    <Mail className="w-5 h-5 mr-2" />
                    contactus@nstechx.co.in
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="h-12 border-primary/30 hover:border-primary hover:bg-primary/5"
                >
                  <a href="tel:7208814414">
                    <Phone className="w-5 h-5 mr-2" />
                    7208814414
                  </a>
                </Button>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
}
