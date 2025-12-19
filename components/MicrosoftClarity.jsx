"use client";

import { useEffect } from "react";
import { clarity } from "@microsoft/clarity";

const MicrosoftClarity = () => {
  useEffect(() => {
    // Replace with your actual Microsoft Clarity Project ID
    // You can find this in your Clarity dashboard under Settings > Overview
    const projectId = "unrfgovyiw"; 
    
    if (projectId && projectId !== "YOUR_CLARITY_PROJECT_ID") {
      clarity.init(projectId);
    } else {
      console.warn("Microsoft Clarity Project ID is missing. Please set it in components/MicrosoftClarity.jsx");
    }
  }, []);

  return null;
};

export default MicrosoftClarity;
