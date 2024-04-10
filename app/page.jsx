import React from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import SwipeableCarousel from "@/components/SwipeableCarousel";
import WhyChooseUs from "@/components/WhyChooseUs";
import FleetInformationSection from "@/components/FleetInformationSection";
import AboutMukteshwar from "@/components/AboutMukteshwar";
import Testimonials from "@/components/Testimonials";
import ContactUs from "@/components/Contact";
import Footer from "@/components/Footer";
import Head from "next/head";

const page = () => {
  // const images = ["/jageshwar-1.jpg", "/jageshwar2.jpg", "/view1.jpg"];
  return (
    <div>
      {/* <Head>
        <title>My Page Title</title>
        <meta name="description" content="Description of my page." />
        {/* Open Graph metadata *
        <meta property="og:title" content="My Page Title" />
        <meta property="og:description" content="Description of my page." />
        <meta property="og:image" content="" />
        <meta property="og:image:width" content="1200" />{" "}
        {/* Adjust as needed *
        <meta property="og:image:height" content="630" />{" "}
        {/* Adjust as needed *
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://shivpremitours-test.netlify.app"
        />
      </Head> */}
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
      </Head>
      <Navbar />
      <Header />
      <SwipeableCarousel />
      <WhyChooseUs />
      <FleetInformationSection />
      <AboutMukteshwar />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default page;
