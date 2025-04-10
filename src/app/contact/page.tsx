"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const form = e.currentTarget;
    const formData = {
      name: form.name.valueOf,
      email: form.email.value,
      subject: form.subject.value,
      message: form.message.value,
    };

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await res.json();
      if (result.success) {
        alert("Message sent successfully!");
        form.reset();
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong.");
    }

    setLoading(false);
  };

  return (
    <main className="flex min-h-screen flex-col p-6 md:p-12">
      <div className="container mx-auto max-w-4xl">
        <Button variant="ghost" className="mb-6" asChild>
          <Link href="/">Back to Home</Link>
        </Button>

        <h1 className="text-3xl md:text-4xl font-bold mb-8">Get in Touch</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Mail className="mr-2 h-5 w-5" />
                Email
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <a href="mailto:varshaislur@gmail.com" className="hover:underline">
                  varshaislur@gmail.com
                </a>
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <a href="https://github.com/varshaislur" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  github.com/varshaislur
                </a>
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                <a href="https://linkedin.com/in/varsha-islur-818060291" target="_blank" rel="noopener noreferrer" className="hover:underline">
                  linkedin.com/in/varsha-islur-818060291
                </a>
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
            <CardDescription>
              Fill out the form below and I'll get back to you as soon as possible.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Name
                  </label>
                  <Input id="name" name="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <Input id="email" name="email" type="email" placeholder="Your email" required />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input id="subject" name="subject" placeholder="Subject of your message" required />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea id="message" name="message" placeholder="Your message" rows={6} required />
              </div>
              <Button type="submit" className="w-full md:w-auto" disabled={loading}>
                {loading ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
