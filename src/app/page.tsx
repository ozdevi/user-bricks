"use client";

import Brick from "@/components/Brick";
import { DefineBrick } from "@/components/DefineBrick";
import DefineForever from "@/components/DefineForever";
import { Stockpile } from "@/components/Stockpile";
import { TimeTraveller } from "@/components/TimeTraveller";
import Image from "next/image";

export default function Home() {

  return (
    <main>
      <Brick name="userBricksLogo">
        <img src="/assets/user-bricks-logo.png" alt="" width="100" style={{ verticalAlign: 'middle' }} className="brick-builder-user-bricks-logo inline-block" />
      </Brick>
      <h1>
        Hello, visitor!
      </h1>
      <Brick name="defineBrick" fallback={<>
        <Brick name="introductoryText" fallback={
          <span>
            <strong>This website</strong> will be built on top of your requests. Each request is a brick and we can start a construction with them. So this is really under construction. Go bring a brick!
          </span>
        }>
          <div>
            <strong>This website</strong> will be entirely built on top of your requests. Each request is a brick and construction is on going,
            <Brick name="defineForever" fallback={<span> forever </span>}>
              <DefineForever />
            </Brick>
          </div>
          <p>So this is really, always, under construction. Go add a brick!</p>
        </Brick>
        <h2>Where can I put my bricks?</h2>
        <p>
          Very good question!
          <Brick name="stockPileIdea" fallback={<span>{' '}</span>}>
            <span> Maybe we need some sort of stockpile when we have many bricks! Until then </span>
          </Brick>
          you can send your brick via email: <a href="mailto:sendmybrick@gmail.com">sendmybrick@gmail.com</a>
        </p>
      </>}>
        <DefineBrick />
      </Brick>

      <Brick name="stockpile">
        <Stockpile />
      </Brick>
      <Brick name="timeTraveler">
        <TimeTraveller />
      </Brick>
      <Brick name="underConstructionGif">
        <figure>
          <Image src="/assets/under-construction.gif"
            alt="A pictogram worker is digging the ground."
            title="Brick #1 by @ozdevi on 2020-05-14"
            width={81}
            height={50}
          />
          <figcaption>
            <small>gif graciously taken from <a href="http://textfiles.com/underconstruction/" rel="noopener noreferrer">textfiles.com</a></small>
          </figcaption>
        </figure>
      </Brick>
    </main>
  );
}
