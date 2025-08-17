import { ChevronDown,  MapPin, Zap } from "lucide-react";

import accuracyIcon from "./assets/icons/icon-accuracy.png";
import detectionIcon from "./assets/icons/icon-detection.png";
import communityIcon from "./assets/icons/icon-community.png";

import bgLeft from "./assets/background/bg-left.png";
import bgRight from "./assets/background/bg-right.png";
import bgRepost from "./assets/background/bg-report.png";
import "./index.css";

import { useState } from "react";

function LandingPage() {
  const [active, setActive] = useState("Report Symptoms");

  const menus = ["Home", "Report Symptoms", "Outbreak Map", "Alerts"];

  return (
   <div>
     <section className="relative min-h-screen bg-teal-700 overflow-hidden">
      <img
        src={bgLeft}
        alt="bg-left"
        className="absolute left-0 top-0 h-full w-1/4 object-contain pointer-events-none"
      />
      <img
        src={bgRight}
        alt="bg-right"
        className="absolute right-0 top-0 h-full w-1/3 object-contain pointer-events-none"
      />

      {/* NAVBAR */}
      <nav className="relative flex items-center justify-between px-6 py-4 z-10">
        {/* Kiri: logo bulat */}
        <div className="w-12 h-12 rounded-full bg-brand-orange"></div>

        {/* Menu tengah */}
       <div className="flex items-center justify-between gap-4">
        {/* Button Group */}
        <div className="flex items-center gap-2 bg-white rounded-2xl px-2 py-1">
      {menus.map((menu) => (
        <button
          key={menu}
          onClick={() => setActive(menu)}
          className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors
            ${active === menu 
              ? "bg-gray-900 text-white" 
              : "text-gray-700 hover:bg-gray-200"
            }`}
        >
          {menu}
        </button>
      ))}
    </div>


        {/* Staff Login */}
        <button className="px-4 py-2 border border-white rounded-full text-white text-sm font-medium">
          Staff Login
        </button>
      </div>


        {/* Kanan: login & language */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-2 px-4 py-2 border border-white rounded-full text-white text-sm font-medium">
            <span className="text-lg">🌐</span> English <ChevronDown size={16} />
          </button>
        </div>
      </nav>

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col items-center text-center mt-20">
        <h1 className="text-white text-6xl font-bold">
          Your report <br /> is our early warning
        </h1>
        <p className="text-white/90 mt-2">
          Act before disease goes further.
        </p>
        <button className="bg-brand-orange text-white px-6 py-3 mt-12 rounded-2xl font-semibold">
          Report Symptoms Now!
        </button>

        {/* Cards */}
        <div className="flex gap-6 mt-18">
          <div className="p-12 bg-white rounded-2xl text-center shadow-lg">
            <img src={accuracyIcon} alt="Accuracy" className="w-14 h-14 mx-auto" />
            <h1 className="text-brand-text font-bold text-3xl mt-2">7 days</h1>
            <h3 className="text-black">Early Detection</h3>
          </div>

          <div className="p-12 bg-white rounded-2xl text-center shadow-lg">
            <img src={detectionIcon} alt="Detection" className="w-14 h-14 mx-auto" />
            <h1 className="text-brand-text font-bold text-3xl mt-2">94%</h1>
            <h3 className="text-black">Accuracy Rate</h3>
          </div>

          <div className="p-12 bg-white rounded-2xl text-center shadow-lg">
            <img src={communityIcon} alt="Community" className="w-14 h-14 mx-auto" />
            <h1 className="text-brand-text font-bold text-3xl mt-2">120+</h1>
            <h3 className="text-black">Communities</h3>
          </div>
        </div>
      </div>
    </section>

    {/* REPORT SYMPTOMS SECTION */}
  <section className="relative min-h-screen bg-soft-bg overflow-hidden flex flex-col items-center px-4 py-12">
    {/* background pattern */}
    <img
      src={bgRepost}
      className="absolute inset-0 w-full h-full object-cover -z-10"
      alt="background"
    />

    {/* Heading */}
    <div className="text-center max-w-2xl mb-10">
      <h1 className="text-brand-text text-3xl font-bold">Report Symptoms</h1>
      <p className="text-gray-600 mt-2">
        Help your community stay safe by reporting symptoms in your own words. <br />
        Our SEA-LION AI understands multiple Southeast Asian languages.
      </p>
    </div>

    {/* FORM CARD */}
    <div className="bg-white rounded-2xl shadow-md p-6 w-full max-w-xl">
      {/* Header */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-indigo-500">🌐</span>
        <h2 className="text-lg font-bold text-gray-900">Community Health Report</h2>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        All reports are anonymized and processed by AI to identify potential outbreak patterns.
      </p>

      {/* Preferred Language */}
      <label className="block mb-2 text-sm font-medium">Preferred Language</label>
      <select className="w-full rounded-2xl bg-[#F9F8FF] px-4 py-3 mb-4">
        <option>English</option>
        <option>Bahasa Indonesia</option>
        <option>Spanish</option>
      </select>

      {/* Location */}
      <label className="block mb-2 text-sm font-medium">Location</label>
      <input
        type="text"
        placeholder="City, District, or Area"
        className="w-full rounded-2xl bg-[#F9F8FF] px-4 py-3 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Describe Symptoms */}
      <label className="block mb-2 text-sm font-medium">Describe Your Symptoms</label>
      <textarea
        placeholder="Describe your symptoms in your own words. Our AI understands multiple languages and will help assess the situation."
        rows="3"
        className="w-full rounded-2xl bg-[#F9F8FF] px-4 py-3 mb-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />
      <p className="text-xs text-gray-500 mb-4">
        Example: "I have fever and cough for 3 days"
      </p>

      {/* Severity */}
      <label className="block mb-2 text-sm font-medium">Symptoms Severity</label>
      <select className="w-full rounded-2xl bg-[#F9F8FF] px-4 py-3 mb-4">
        <option>How severe are your symptoms?</option>
        <option>Mild</option>
        <option>Moderate</option>
        <option>Severe</option>
      </select>

      {/* Contact */}
      <label className="block mb-2 text-sm font-medium">
        Contact <span className="text-gray-500">(Optional)</span>
      </label>
      <input
        type="text"
        placeholder="Phone number for follow-up"
        className="w-full rounded-2xl bg-[#F9F8FF] px-4 py-3 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-500"
      />

      {/* Button */}
      <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-2xl font-medium text-white bg-gradient-to-r from-orange-400 to-purple-500 shadow hover:opacity-90 transition">
        🚀 Submit Report
      </button>
    </div>

    {/* HOW AI WORKS */}
    <div className="bg-[#F9F8FF] rounded-xl border border-purple-200 mt-12 p-6 max-w-3xl w-full">
      <h3 className="text-purple-600 font-bold mb-4">
        How SEA-LION AI Processes Your Report:
      </h3>
      <div className="grid md:grid-cols-3 gap-6">
        <div>
          <h4 className="font-bold text-gray-800">1. Language Detection</h4>
          <p className="text-gray-500 text-sm">
            Identifies your language automatically
          </p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800">2. Symptom Classification</h4>
          <p className="text-gray-500 text-sm">
            Categorizes symptoms using medical knowledge
          </p>
        </div>
        <div>
          <h4 className="font-bold text-gray-800">3. Risk Assessment</h4>
          <p className="text-gray-500 text-sm">
            Combines with weather & population data
          </p>
        </div>
      </div>
    </div>
  </section>

    {/* OUTBREAK MAP*/}
    <section className="relative min-h-screen bg-[#0D6A73] flex flex-col items-center px-6 py-16">
      {/* Title */}
      <h2 className="text-white text-3xl font-bold text-center">
        Southeast Asia Outbreak Map
      </h2>
      <p className="text-gray-200 text-center mt-2">
        Interactive real-time view of disease outbreak risks across major
        Southeast Asian cities.
      </p>

      {/* Map + Select Region */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-5xl w-full">
        {/* Left: Map Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <h3 className="font-semibold text-lg flex items-center gap-2">
            <MapPin className="text-purple-600" /> Regional Risk Overview
          </h3>
          <div className="mt-4 h-72 bg-gradient-to-tr from-blue-50 to-white rounded-xl border border-cyan-300 flex items-end justify-start p-4">
            {/* Legend */}
            <div className="bg-white border rounded-lg p-3 text-sm shadow">
              <p className="font-semibold mb-2">Risk Levels</p>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500"></span> High Risk
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-yellow-400"></span> Medium Risk
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-green-500"></span> Low Risk
              </div>
            </div>
          </div>
        </div>

        {/* Right: Select Region */}
        <div className="bg-white rounded-2xl shadow-lg p-6 flex flex-col items-center justify-center text-center">
          <h3 className="font-semibold text-lg flex items-center gap-2 mb-4">
            <Zap className="text-orange-500" /> Select a Region
          </h3>
          <MapPin size={40} className="text-gray-400 mb-2" />
          <p className="text-gray-500 text-sm max-w-xs">
            Click on any region marker on the map to view detailed outbreak
            information and predictions.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="flex flex-wrap gap-6 justify-center mt-12">
        <div className="p-6 bg-white rounded-2xl text-center shadow-lg w-48">
          <h1 className="text-purple-600 font-bold text-3xl">236</h1>
          <p className="text-gray-700">Total Active Cases</p>
        </div>
        <div className="p-6 bg-white rounded-2xl text-center shadow-lg w-48">
          <h1 className="text-red-500 font-bold text-3xl">2</h1>
          <p className="text-gray-700">High Risk Areas</p>
        </div>
        <div className="p-6 bg-white rounded-2xl text-center shadow-lg w-48">
          <h1 className="text-blue-500 font-bold text-3xl">5</h1>
          <p className="text-gray-700">Monitored Cities</p>
        </div>
        <div className="p-6 bg-white rounded-2xl text-center shadow-lg w-48">
          <h1 className="text-orange-500 font-bold text-3xl">94%</h1>
          <p className="text-gray-700">AI Accuracy Rate</p>
        </div>
      </div>
    </section>

   </div>
    
  );
}

export default LandingPage;
