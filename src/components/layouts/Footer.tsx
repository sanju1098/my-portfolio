"use client";
import { Email, GitHub, Language, LinkedIn } from "@mui/icons-material";
import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 text-center py-4">
      <div className="flex justify-center mb-2 flex-wrap">
        <a
          //   href="https://your-website.com"
          target="_blank"
          rel="noopener noreferrer">
          <Language sx={{ mx: 2 }} />
        </a>
        <a
          href="mailto:sanjay.kumar981110@gmail.com"
          target="_blank"
          rel="noopener noreferrer">
          <Email sx={{ mx: 2 }} />
        </a>
        <a
          href="https://github.com/sanju1098"
          target="_blank"
          rel="noopener noreferrer">
          <GitHub sx={{ mx: 2 }} />
        </a>
        <a
          href="https://www.linkedin.com/in/sanjay-kumar-s-r/"
          target="_blank"
          rel="noopener noreferrer">
          <LinkedIn sx={{ mx: 2 }} />
        </a>
      </div>
      <p className="text-lg">
        Copyright © {new Date().getFullYear()}{" "}
        <span className="text-white">Sanjay Kumar</span>. All rights reserved.
      </p>
      <p className="text-md">MADE WITH NEXT.JS</p>
    </footer>
  );
};
