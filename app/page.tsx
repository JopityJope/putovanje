"use client";
import { useState, useEffect, useRef } from "react";
import contents from "../data/contents"; // Import your contents data

import Image from "next/image";

export default function Home() {
  const [selectedChapter, setSelectedChapter] = useState<string | null>(null);
  const [selectedSubChapter, setSelectedSubChapter] = useState<string | null>(
    null
  );
  /*   const [animate, setAnimate] = useState<boolean>(false);
  const previousDisplayedChapter = useRef<string | null>(null); // Store previous displayed chapter */

  // Function to find the chapter for a given subchapter
  const getChapterForSubChapter = (subChapterTitle: string) => {
    for (const chapter of contents) {
      if (
        chapter.subchapters &&
        chapter.subchapters.some((sub) => sub.title === subChapterTitle)
      ) {
        return chapter.title;
      }
    }
    return null;
  };

  const handleChapterClick = (chapterTitle: string) => {
    setSelectedChapter(chapterTitle);
    setSelectedSubChapter(null); // Reset sub-chapter when a chapter is selected
  };

  const handleSubChapterClick = (subChapterTitle: string) => {
    setSelectedSubChapter(subChapterTitle);
    setSelectedChapter(null); // Reset chapter when a sub-chapter is selected
  };

  // Determine what to display in h3
  const displayedChapter = selectedSubChapter
    ? getChapterForSubChapter(selectedSubChapter)
    : selectedChapter;

  /*   useEffect(() => {
    if (previousDisplayedChapter.current !== displayedChapter) {
      // If displayedChapter has changed, trigger the animation
      setAnimate(true);
      previousDisplayedChapter.current = displayedChapter; // Update the previous chapter
    }
  }, [displayedChapter]);  */

  return (
    <main className="flex min-h-screen flex-col bg-background overflow-hidden relative">
      <div className="dark" />
      <svg>
        <filter id="noiseFilter">
          <feTurbulence
            type="turbulence"
            baseFrequency="0.2"
            stitchTiles="stitch"
          />
        </filter>
      </svg>
      <div className="flex flex-col justify-between text-text w-1/5 flex-grow border-r-[2px] border-text px-[5rem] py-[10rem]">
        <h1 className="text-[6.4rem] font-[300] tracking-[.08rem] select-none italic">
          Србија на мапи <br /> европских путника
        </h1>
        {contents && (
          <div className="flex flex-col gap-[2rem] italic">
            {contents.map((chapter, index) => (
              <div key={index}>
                <h2
                  className={`text-[5.6rem] font-[300] tracking-[.08rem] select-none cursor-pointer relative  h-[8.5rem] ${
                    selectedChapter === chapter.title ? "chapter-selected" : ""
                  }`}
                  onClick={() => handleChapterClick(chapter.title)}
                >
                  <span className="text-[5.6rem] font-bold text-textNumbers pr-[2rem] ">
                    {index.toString().padStart(2, "0")}
                  </span>
                  {chapter.title}
                </h2>
                {chapter.subchapters && chapter.subchapters.length > 0 && (
                  <div className="flex flex-col gap-[2rem] ml-[10rem] mt-[2rem]">
                    {chapter.subchapters.map((subChapter, subIndex) => (
                      <h3
                        key={subIndex}
                        className={`text-[4.6rem] font-[300] tracking-[.08rem] select-none cursor-pointer relative  h-[8.5rem] ${
                          selectedSubChapter === subChapter.title
                            ? "subchapter-selected"
                            : ""
                        }`}
                        onClick={() => handleSubChapterClick(subChapter.title)}
                      >
                        {subChapter.title}
                      </h3>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div>
        <div>
          {/*  {displayedChapter && (
            <h3
              className={`text-[17rem] absolute top-[35rem] right-[15rem] vertical-text ${
                animate ? "slide-up" : ""
              }`}
              onAnimationEnd={() => setAnimate(false)} // Reset animation state
            >
              {displayedChapter}
            </h3>
          )}
          {selectedSubChapter && (
            <h4 className="text-[11rem] absolute top-[35rem] left-[95rem] vertical-text rotate-180 font-[500]">
              {selectedSubChapter}
            </h4>
          )} */}

          {displayedChapter && (
            <h3
              className={`text-[15rem] absolute top-[30rem] right-[15rem] vertical-text`}
            >
              <span className="text-[15rem] font-bold text-textNumbers pr-[2rem] pb-[5rem]">
                2
              </span>
              {displayedChapter}
            </h3>
          )}
          {selectedSubChapter && (
            <h4 className="text-[12rem] absolute top-[30rem] left-[95rem] vertical-text rotate-180 font-[500]">
              <span className="text-[12rem] font-bold text-textNumbers pr-[2rem] pb-[5rem]">
                2.3
              </span>
              {selectedSubChapter}
            </h4>
          )}
        </div>

        <div className="flex absolute top-[30rem] left-[130rem] text-[2rem] font-raleway text-[3.4rem] w-[200rem]">
          <div>
            <Image
              alt="logo"
              src={"/assets/2_3/01.jpg"}
              width={950}
              height={800}
              className="ml-[15rem] mt-[10rem]"
            ></Image>
            <p className="text-[3.9rem] w-[90rem] font-[300] leading-loose tracking-wide pt-[5rem] opacity-95">
              Мотив мешања цивилизација у делима европских путописаца посебно је
              долазио до изражаја у случају описа српских градова. Најбољи
              пример био је свакако Београд, који је за већину странаца
              представљао почетну станицу на походу кроз Србију.
            </p>
          </div>

          <div className="w-[90rem] pl-[20rem] pt-[25rem] flex flex-col gap-[15rem]">
            <div>
              <div className="flex gap-[3rem] items-end pb-[4rem]">
                <Image
                  alt="logo"
                  src={"/assets/ikone/feather.svg"}
                  width={70}
                  height={70}
                  className="opacity-95 "
                ></Image>
                <p className="font-[600]">Сигфрид Капер о Београду 1850.</p>
              </div>

              <p className="italic font-bodoniModa opacity-95 text-[3.7rem] leading-[6.3rem]">
                <span className="text-[6rem] leading-[5rem]">„ </span>
                Овде се додирује историја (Османлија) која сада своје последње
                улоге одиграва (…) (и) она друга, која тек ступа у круг светских
                догађаја. На Београду се види да је то варош где се додирују
                умирање и поновно оживљавање, пропаст и подизање, прошлост и
                будућност. (…) Уз стари застој примећује се нови напредак.
                <span className="text-[6rem] leading-[5rem]"> ”</span>
              </p>
            </div>

            <div>
              <div className="flex gap-[3rem] items-end pb-[4rem]">
                <Image
                  alt="logo"
                  src={"/assets/ikone/feather.svg"}
                  width={70}
                  height={70}
                  className="opacity-95 "
                ></Image>
                <p className="font-[600] ">Вилијам Дентон о Београду 1862.</p>
              </div>
              <p className="italic font-bodoniModa opacity-95 text-[3.7rem] leading-[6.3rem]">
                <span className="text-[6rem] leading-[5rem]">„ </span>
                Јединствена мешавина оријенталног и западног живота појавила се
                преда мном. Многе сцене и звуци су ме уверавали да нисам у
                потпуно муслиманској земљи, (али) мешали су се са другим, који
                су ми говорили да сам на предстражи Турске империје.
                <span className="text-[6rem] leading-[5rem]"> ”</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center absolute bottom-[6rem] left-[50%]">
          <Image
            alt="logo"
            src={"/assets/ikone/left.svg"}
            width={100}
            height={100}
            className="opacity-50 "
          ></Image>
          <div className="flex text-[5.5rem] gap-[3rem] px-[5rem]">
            <p>06</p>
            <p className="opacity-50">|</p>
            <p className="opacity-50">23</p>
          </div>
          <Image
            alt="logo"
            src={"/assets/ikone/right.svg"}
            width={100}
            height={100}
            className="opacity-50 "
          ></Image>
        </div>
      </div>
    </main>
  );
}
