"use client";

import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import Image from "next/image";

const testimonials = [
  {
    name: "Jim Thompson",
    content:
      "The world of home automation simplifies our busy lives yet at the same time getting started can be a little intimidating for a beginning novice. DHT patiently helped me to select and design the right systems for my application. DHT working knowledge ensured we selected the right components which were compatible and scalable as my system grew over time. DHTV is committed to best in class service, quality and most importantly a job well done. Call them, I'm glad I did!",
    rating: 5,
  },
  {
    name: "Keith F",
    content:
      "Unbelievable professional with impeccable work ethic. Their work is second to none. DHT did our entire home automation, cameras, lights and door controls, garage controls, stereo, tv's, HVAC controls... the works. And wow, his work is great. You will not be disappointed!",
    rating: 5,
  },
  {
    name: "Tom N",
    content:
      "DHT has done a couple of jobs for us in our home: installing a big screen television and related components last year and, more recently, putting in the Sonos home sound system. DHT is a pleasure to work with because he is able to explain technical issues in a way that even we, non-techies, understand. Their knowledge of the internet and electronic components is encyclopedic and, whether cutting into wallboard or working in the attic, work is neat and clean. DHT is meticulous, reliable, and thoroughly knowledgeable of the systems he installs. They are low-key and a pleasure to work with, and we recommend them to you without reservation.",
    rating: 5,
  },
  {
    name: "Henry H",
    content:
      "Everything you read in previous reviews is absolutely true. DHT team were able to restore my system to it's peak performance, where others have failed. Professional, courteous, knowledgeable. No reservations in recommending DHT to anyone wanting the most out of their home theater system.",
    rating: 5,
  },
  {
    name: "Wendy W",
    content:
      "I heard a lot of different feedback about control 4. But after meeting DHTs and working with them through a new construction home I realize we could not have picked anyone better to automate our home. They are by far the best contractor we have worked within our project. There is no question or problem they do not have the answer for. Highly recommend them to anyone who is thinking of automating their home. Thank you DHT.",
    rating: 5,
  },
  {
    name: "Debi W",
    content:
      "Working with DHT was a great experience. Their recommendations & knowledge helped us get that theatre quality we were looking for in our living room. They respond quickly and professionally. They also clearly explain how to handle sophisticated equipment in a user friendly way. We will be sure to continue to use their services in the future.",
    rating: 5,
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex + 1
    );
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section className="min-h-screen flex bg-gray-900 overflow-hidden">
      {/* Left Section - Testimonials Slideshow */}
      <div className="w-full lg:w-1/2 bg-gray-900 flex items-center justify-center p-8 lg:p-16">
        <div className="max-w-2xl w-full">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-xl text-gray-300">
              Trust is the cornerstone of any successful relationship, and
              we&apos;re committed to earning yours by always delivering stellar
              installations and quality customer support.
            </p>
          </div>

          {/* Slideshow Container */}
          <div className="relative">
            {/* Testimonial Card */}
            <div className="bg-gray-800 p-8 rounded-2xl shadow-2xl border border-gray-700 min-h-[400px] flex flex-col justify-center backdrop-blur-sm">
              <div className="flex items-center mb-6">
                <Quote className="w-10 h-10 text-blue-400 mr-4" />
                <div className="flex">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-yellow-400 text-yellow-400"
                    />
                  ))}
                </div>
              </div>

              <blockquote className="text-gray-200 mb-8 leading-relaxed text-lg italic">
                &ldquo;{testimonials[currentIndex].content}&rdquo;
              </blockquote>

              <footer className="text-lg font-semibold text-white">
                — {testimonials[currentIndex].name}
              </footer>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute -left-12 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-lg border border-gray-600 hover:bg-gray-700 transition-colors z-10"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-gray-300" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute -right-12 top-1/2 transform -translate-y-1/2 bg-gray-800 p-3 rounded-full shadow-lg border border-gray-600 hover:bg-gray-700 transition-colors z-10"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-gray-300" />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-blue-500"
                    : "bg-gray-600 hover:bg-gray-500"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          {/* Average Rating */}
          <div className="text-center mt-8">
            <div className="inline-flex items-center space-x-3 bg-gray-800 px-6 py-3 rounded-full shadow-lg border border-gray-700">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 fill-yellow-400 text-yellow-400"
                  />
                ))}
              </div>
              <span className="text-gray-200 font-medium">
                5.0 Average Rating
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Section - Background Image */}
      <div className="hidden lg:block lg:w-1/2 relative overflow-hidden">
        <Image
          src="/images/LZ-Living-Room.jpg"
          alt="Living Room Home Automation"
          width={800}
          height={600}
          className="object-cover w-full h-full"
          priority
        />
      </div>
    </section>
  );
}
