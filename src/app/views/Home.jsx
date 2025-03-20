'use client'

import { useState, useEffect } from 'react'



import steps from '../data/steps.json';
import tutors from '../data/tutors.json';
import subjects from '../data/subjects.json'
import cardData from "../data/card.json";

import { Card } from "@mui/material";
import Image from "next/image";


export default function Home() {


  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % cardData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);


  return (
    <>
      <section className="bg-gradient-to-b from-blue-600 to-blue-400 text-white text-center py-20">
        <div className="max-w-3xl mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold">Find the Perfect Tutor for Your Learning Journey</h1>
          <p className="mt-4 text-lg">Connect with experienced tutors in any subject. Personalized learning, flexible scheduling, and guaranteed results.</p>
        </div>

        <div className="mt-8 flex flex-col md:flex-row justify-center items-center gap-4">
          <select className="p-3 rounded-md w-72 text-black bg-amber-50">
            <option>Select Subject</option>
            <option>Mathematics</option>
            <option>Science</option>
            <option>English</option>
            <option>History</option>
            <option>Programming</option>
            <option>Languages</option>
          </select>

          <input type="text" placeholder="Location or Online" className=" bg-amber-50 p-3 rounded-md w-72 text-black" />

          <button className="bg-blue-700 hover:bg-blue-800 text-white py-3 px-6 rounded-md">Find Tutors</button>
        </div>

        <div className="mt-12 flex justify-center gap-12 text-lg font-semibold">
          <div>
            <span className="text-yellow-300 text-2xl">500+</span>
            <p className="text-white text-sm">Expert Tutors</p>
          </div>
          <div>
            <span className="text-yellow-300 text-2xl">50+</span>
            <p className="text-white text-sm">Subjects</p>
          </div>
          <div>
            <span className="text-yellow-300 text-2xl">10,000+</span>
            <p className="text-white text-sm">Happy Students</p>
          </div>
        </div>
      </section>

      {/* section two */}
      <div className="bg-gray-100 py-10 px-5 text-center">
        <h2 className="text-2xl font-bold text-gray-800">How TutorMatch Works</h2>
        <p className="text-gray-600 mb-6">Finding the right tutor has never been easier</p>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-4xl mb-3">{step.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* section three */}
      <div className="bg-gray-100 py-10 px-5 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Meet Our Top Tutors</h2>
        <p className="text-gray-600 mb-6">Experienced professionals ready to help you succeed</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {tutors.map((tutor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md transition-transform transform hover:-translate-y-2 hover:shadow-lg"
            >
              {/* Name and Rating */}
              <div className="flex justify-between items-center mb-2">
                <div className="text-gray-800 font-medium text-sm truncate">{tutor.name}</div>
                <div className="flex items-center">
                  <span className="text-yellow-500 text-lg">⭐</span>
                  <span className="text-gray-700 text-sm font-semibold ml-1">{tutor.rating}</span>
                </div>
              </div>

              {/* Title and Description */}
              <h3 className="text-lg font-semibold text-gray-800">{tutor.name}</h3>
              <p className="text-blue-600 font-medium">{tutor.title}</p>
              <p className="text-gray-600 text-sm mt-2">{tutor.description}</p>

              {/* Degree and Sessions */}
              <div className="flex items-center justify-between text-gray-500 text-sm mt-4">
                <span className="flex items-center">🎓 {tutor.degree}</span>
                <span className="flex items-center">📚 {tutor.sessions}</span>
              </div>

              {/* View Profile Button */}
              <button className="mt-4 px-4 py-2 border border-blue-500 text-blue-500 rounded-md hover:bg-blue-500 hover:text-white transition">
                View Profile
              </button>
            </div>
          ))}
        </div>

        {/* View All Tutors Button */}
        <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          View All Tutors
        </button>
      </div>

      {/* section foure */}
      <div className="bg-gray-100 py-10 px-5 text-center">
        <h2 className="text-2xl font-bold text-gray-800">Browse by Subject</h2>
        <p className="text-gray-600 mb-6">Find tutors specialized in your area of interest</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {subjects.map((subject, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center transition-transform transform hover:-translate-y-2 hover:shadow-lg"
            >
              <div className="text-4xl mb-3">{subject.icon}</div>
              <h3 className="text-lg font-semibold text-gray-800">{subject.title}</h3>
              <p className="text-gray-600 text-sm mt-2">{subject.topics}</p>
            </div>
          ))}
        </div>
      </div>

      {/* section five */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-blue-50 px-4">
        <h2 className="text-2xl font-semibold text-gray-800">What Our Students Say</h2>
        <p className="text-gray-600 mt-2">Hear from students who found success with TutorMatch</p>

        <Card className="mt-6 max-w-3xl p-6 shadow-lg rounded-lg bg-white transition-all duration-500">
          <p className="italic text-gray-700">"{cardData[activeIndex].quote}"</p>
          <div className="flex items-center mt-4">
            <Image src="/avatar.png" alt={`${cardData[activeIndex].name} avatar`} width={40} height={40} className="rounded-full" />
            <div className="ml-3">
              <p className="font-bold text-gray-800">{cardData[activeIndex].name}</p>
              <p className="text-sm text-gray-600">{cardData[activeIndex].role}</p>
            </div>
          </div>
        </Card>

        {/* Pagination Dots */}
        <div className="mt-4 flex space-x-2">
          {cardData.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${index === activeIndex ? "bg-purple-600" : "bg-gray-300"
                }`}
              onClick={() => setActiveIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* section six */}
      <div className="flex justify-center py-10 bg-white">
        <div className="flex flex-col md:flex-row items-center justify-between bg-blue-600 text-white px-8 py-6 rounded-2xl max-w-5xl w-full">
          <div className="text-center md:text-left">
            <h2 className="text-2xl font-bold">Ready to Excel in Your Studies?</h2>
            <p className="text-sm mt-2">Join thousands of students who are achieving their academic goals with personalized tutoring.</p>
          </div>
          <div className="flex gap-4 mt-4 md:mt-0">
            <button className="bg-white text-blue-600 font-medium px-4 py-2 rounded-lg shadow-md hover:bg-gray-200">
              Find a Tutor Now
            </button>
            <button className="border-2 border-white text-white font-medium px-4 py-2 rounded-lg hover:bg-white hover:text-blue-600 transition">
              Become a Tutor
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
