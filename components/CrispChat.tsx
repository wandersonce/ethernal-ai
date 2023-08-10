"use client"

import {Crisp} from "crisp-sdk-web";
import { useEffect } from "react";

export default function CrispChat() {
  useEffect(()=>{
    Crisp.configure("3fb5f476-950e-421e-9c99-faf86ab0d4e6")
  })
  return null;
}
