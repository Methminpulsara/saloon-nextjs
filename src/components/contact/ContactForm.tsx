"use client";

import React, { useState } from "react";
import { Send, CheckCircle2, AlertCircle, Sparkles } from "lucide-react";
import { servicesData } from "@/data/services";
import { Button } from "@/components/common/Button";

interface FormState {
  name: string;
  email: string;
  phone: string;
  service: string;
  preferredDate: string;
  message: string;
}

const initialFormState: FormState = {
  name: "",
  email: "",
  phone: "",
  service: "",
  preferredDate: "",
  message: "",
};

export function ContactForm() {
  const [formData, setFormData] = useState<FormState>(initialFormState);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");

    if (!formData.name.trim() || !formData.email.trim()) {
      setErrorMessage("Please fill in your name and email address.");
      return;
    }

    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);

      // =========================================================================
      // TODO: BACKEND INTEGRATION POINT
      // When ready to connect to a backend or CRM, replace this demo handler with:
      //
      // await fetch('/api/appointments', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify(formData),
      // });
      // =========================================================================
      console.log("DEMO INQUIRY SUBMITTED:", formData);
    }, 600);
  };

  const resetForm = () => {
    setFormData(initialFormState);
    setIsSubmitted(false);
    setErrorMessage("");
  };

  if (isSubmitted) {
    return (
      <div className="bg-card border border-border p-8 sm:p-12 text-center space-y-5 animate-fadeIn shadow-xs">
        <div className="w-14 h-14 rounded-full bg-accent/15 text-accent flex items-center justify-center mx-auto">
          <CheckCircle2 className="w-8 h-8" />
        </div>
        <span className="text-xs uppercase tracking-[0.25em] font-semibold text-accent block">
          Inquiry Simulated
        </span>
        <h3 className="font-serif text-2xl sm:text-3xl text-foreground font-normal">
          Thank you, {formData.name}
        </h3>
        <p className="text-sm text-muted-foreground font-light max-w-md mx-auto leading-relaxed">
          This is a frontend demonstration template. No live email or appointment was transmitted. When integrated with your preferred CRM or email service, this form will forward inquiries instantly.
        </p>
        <div className="pt-4">
          <button
            type="button"
            onClick={resetForm}
            className="text-xs uppercase tracking-widest font-semibold text-foreground hover:text-accent underline underline-offset-4"
          >
            Submit Another Demo Inquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-card border border-border p-8 sm:p-10 shadow-xs space-y-6">
      <div className="border-b border-border pb-4">
        <span className="text-xs uppercase tracking-[0.2em] font-semibold text-accent block mb-1">
          Direct Appointment Request
        </span>
        <h3 className="font-serif text-2xl font-normal text-foreground">
          Request a consultation
        </h3>
      </div>

      {errorMessage && (
        <div className="p-3.5 bg-red-500/10 border border-red-500/20 text-red-600 dark:text-red-400 text-xs flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Full Name */}
        <div>
          <label
            htmlFor="name"
            className="block text-xs uppercase tracking-wider font-medium text-foreground mb-2"
          >
            Full Name <span className="text-accent">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="e.g. Genevieve Laurent"
            className="w-full px-4 py-3 bg-muted/40 border border-border text-foreground text-sm focus:bg-card focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block text-xs uppercase tracking-wider font-medium text-foreground mb-2"
          >
            Email Address <span className="text-accent">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="e.g. name@example.com"
            className="w-full px-4 py-3 bg-muted/40 border border-border text-foreground text-sm focus:bg-card focus:outline-none focus:border-accent transition-colors"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-xs uppercase tracking-wider font-medium text-foreground mb-2"
          >
            Phone / Mobile Number
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="e.g. +1 (555) 000-0000"
            className="w-full px-4 py-3 bg-muted/40 border border-border text-foreground text-sm focus:bg-card focus:outline-none focus:border-accent transition-colors"
          />
        </div>

        {/* Desired Service Selection */}
        <div>
          <label
            htmlFor="service"
            className="block text-xs uppercase tracking-wider font-medium text-foreground mb-2"
          >
            Desired Service
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="w-full px-4 py-3 bg-muted/40 border border-border text-foreground text-sm focus:bg-card focus:outline-none focus:border-accent transition-colors"
          >
            <option value="">Select a ritual or treatment</option>
            {servicesData.map((s) => (
              <option key={s.id} value={s.name}>
                {s.name} ({s.categoryLabel})
              </option>
            ))}
            <option value="Unsure / Need Consultation">
              Unsure / Need Personalized Consultation
            </option>
          </select>
        </div>
      </div>

      {/* Preferred Date */}
      <div>
        <label
          htmlFor="preferredDate"
          className="block text-xs uppercase tracking-wider font-medium text-foreground mb-2"
        >
          Preferred Timing / Days of the Week
        </label>
        <input
          type="text"
          id="preferredDate"
          name="preferredDate"
          value={formData.preferredDate}
          onChange={handleChange}
          placeholder="e.g. Thursday morning or Friday afternoon"
          className="w-full px-4 py-3 bg-muted/40 border border-border text-foreground text-sm focus:bg-card focus:outline-none focus:border-accent transition-colors"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-xs uppercase tracking-wider font-medium text-foreground mb-2"
        >
          Your Hair or Beauty Vision
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your current hair/skin goals, inspiration, or any previous chemical treatments..."
          className="w-full px-4 py-3 bg-muted/40 border border-border text-foreground text-sm focus:bg-card focus:outline-none focus:border-accent transition-colors resize-none"
        />
      </div>

      <div className="pt-2">
        <Button
          type="submit"
          variant="primary"
          size="lg"
          className="w-full justify-center"
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>Processing...</span>
            </span>
          ) : (
            <span className="flex items-center gap-2">
              <Send className="w-4 h-4" />
              <span>Submit Appointment Inquiry</span>
            </span>
          )}
        </Button>
      </div>

      <p className="text-[11px] text-muted-foreground/70 text-center font-light">
        * Demonstration form. Clear integration point provided in source code for future API or webhook setup.
      </p>
    </form>
  );
}
