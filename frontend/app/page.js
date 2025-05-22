"use client";
import Header from "../components/Header";
import ImageCarousel from "../components/ImageCarousel";
import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
    // TODO: Implement file upload to backend
  };

  const sampleImages = [
    "/screenshots/screenshot1.jpg",
    "/screenshots/screenshot2.jpg",
    "/screenshots/screenshot3.jpg",
  ];

  return (
    <main className="min-h-screen">
      <Header />
      <div className="flex items-center justify-center min-h-screen bg-[#3a0e0e] text-white">
        <div className="container mx-auto px-6 py-5">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-6">
              Resume Analysis Made Simple
            </h1>
            <p className="text-lg mb-8">
              Our AI-powered resume analyzer helps you understand your resume's
              strengths and weaknesses. Get detailed insights, suggestions for
              improvement, and personalized recommendations to make your resume
              stand out to employers.
            </p>
          </div>

          <div className="mb-12">
            <ImageCarousel images={sampleImages} />
          </div>

          <div className="text-center">
            <label
              htmlFor="resume-upload"
              className="inline-block bg-[#808000] hover:bg-[#6B6B00] text-white font-bold py-3 px-8 rounded-lg cursor-pointer transition-colors"
            >
              Upload Resume
              <input
                id="resume-upload"
                type="file"
                accept=".pdf,.doc,.docx"
                className="hidden"
                onChange={handleFileChange}
              />
            </label>
            {file && <p className="mt-4 text-sm">Selected file: {file.name}</p>}
          </div>
        </div>
      </div>
    </main>
  );
}
