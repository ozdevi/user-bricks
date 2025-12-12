"use client";

import Brick from "@/components/Brick";
import Image from "next/image";

export default function Home() {

  return (
    <main>
      <Brick name="userBricksLogo">
        <Image src="/assets/user-bricks-logo.png" alt="User Bricks Logo" width="100" style={{ verticalAlign: 'middle' }} />
      </Brick>
      <h1>
        Hello, visitor!
      </h1>
      <Brick name="introductoryText" />
      <Brick name="stockpile" />
      <Brick name="timeTraveler" />
      <Brick name="underConstructionGif" />
    </main>
  );
}
