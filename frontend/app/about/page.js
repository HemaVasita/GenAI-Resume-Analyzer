"use client";
import Header from "../../components/Header";

export default function About() {
  return (
    <main className="min-h-screen">
      <Header />
      <div className="bg-[#800000] text-white">
        <div className="container mx-auto px-6 py-12">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold mb-8 text-center">
              About Resume Analyzer
            </h1>

            <div className="space-y-6">
              <section>
                <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
                <p className="text-lg">
                  We aim to help job seekers optimize their resumes using
                  advanced AI technology. Our platform provides detailed
                  analysis and actionable recommendations to make your resume
                  stand out in today's competitive job market.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">How It Works</h2>
                <ol className="list-decimal list-inside space-y-3 text-lg">
                  <li>Upload your resume in PDF or Word format</li>
                  <li>Our AI analyzes your resume's content and structure</li>
                  <li>Receive detailed feedback and improvement suggestions</li>
                  <li>Get personalized recommendations for optimization</li>
                </ol>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">Features</h2>
                <ul className="list-disc list-inside space-y-3 text-lg">
                  <li>AI-powered content analysis</li>
                  <li>Keyword optimization suggestions</li>
                  <li>Format and structure recommendations</li>
                  <li>Industry-specific insights</li>
                  <li>Real-time feedback</li>
                </ul>
              </section>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
