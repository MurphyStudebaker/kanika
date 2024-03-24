import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 overflow-hidden">
      <div className="z-10 w-full font-mono text-md flex flex-row justify-evenly flex-wrap-reverse md:flex-nowrap ">
        <div className="item p-2">
          <div className="">
            <Image
              className="object-cover w-full "
              src="/bts_pom_2.jpg"
              width={500}
              height={500}
              alt="Kanika directing two women for her film, The Pomegranate Tree"
            />
          </div>
        </div>
        <div className="item p-2">
          <div className="">
            <Image
              className="object-cover w-full "
              src="/bts_pom_1.jpg"
              width={500}
              height={500}
              alt="Kanika directing two women for her film, The Pomegranate Tree"
            />
          </div>
        </div>
        <div className="flex flex-col text-right p-12 lg:p-24">
          <h1 className="font-black ">Kanika Vora</h1>
          <h2>award-winning director & creative in Los Angeles </h2>
          <div className="spacer h-8"></div>
          <h2 className="font-black ">Contact</h2>
          <ul>
            <li>kanika.vora@gmail.com</li>
            <li>
              <a href="https://www.linkedin.com/in/kanikavora/">
                linkedin.com/kanikavora
              </a>
            </li>
          </ul>
          <div className="spacer h-8"></div>
          <a href="#portfolio" className="font-black">
            Portfolio <span className="scale-{500}">&#8620;</span>
          </a>
          <div className="spacer h-8"></div>
          <a href="#about" className="font-black">
            About <span className="scale-{500}">&#8620;</span>
          </a>
        </div>
      </div>
      <div className="spacer h-4 md:h-12"></div>

      <div
        id="portfolio"
        className="max-w-2xl w-full font-mono text-sm flex flex-col gap-24 md:gap-48"
      >
        <div>
          <div className="spacer h-4 md:h-12"></div>
          <h2 className="font-bold text-2xl">The Pomegranate Tree</h2>
          <h3>2022 - Short Film</h3>
          <div className="spacer h-12"></div>
          <p className="text-md">
            During the Partition of India in 1947, a Muslim mother, Azra, and
            her 16 year-old daughter, Saba, are searching for refuge in the
            neighborhood they once called home. Everyone turns their backs on
            them, everyone except for one Hindu family. The family of Manjula, a
            girl who used to play with Saba at the pomegranate tree. The Hindu
            family takes Azra and Saba in despite the reprecussions and helps
            them get to safety in the midst of violence and chaos.
          </p>
          <div className="spacer h-6"></div>
          <p className="text-gray-600 italic">
            Awards & Distinctions: Audience Choice Award at NFFTY, Official
            Selection at LA Shorts International Film Festival (Oscar
            Qualifier), Kate Hearst Award at Middlebury New Filmmakers Festival,
            Best Emerging Director at Coronado Island Film Festival, Best
            College Student Production at Breckenridge Film Festival, Gold Award
            at WorldFest-Houston International Film Festival, Award of
            Excellence at Catalina Film Festival
          </p>
          <div className="spacer h-12"></div>
          <div className="flex flex-col gap-6 font-black">
            <a
              href="https://www.youtube.com/watch?v=syqjv1US0-o&ab_channel=KanikaVora"
              className="flex gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 shrink-0"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <span>
                Fundraising Video with Interviews from Survivors of the
                Partition
              </span>
            </a>
            <a
              href="https://vimeo.com/926932936?share=copy"
              className="flex gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <span>Official Trailer</span>
            </a>
            <a
              href="https://vimeo.com/681154726/14b5bc9abb"
              className="flex gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
              <span>Full Film</span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center w-full py-8 md:flex-nowrap">
        {/* <div className="item -rotate-6">
          <div className="polaroid">
            <Image
              className="object-cover w-full "
              src="/clapper.jpg"
              width={500}
              height={500}
              alt="Kanika directing two women for her film, The Pomegranate Tree"
            />
            <div className="caption"> </div>
          </div>
        </div> */}
        <div className="item">
          <div className="p-2">
            <Image
              className="object-cover w-full "
              src="/ending_shot.jpg"
              width={500}
              height={500}
              alt="Kanika directing two women for her film, The Pomegranate Tree"
            />
          </div>
        </div>
        <div className="item">
          <div className="p-2">
            <Image
              className="object-cover w-full "
              src="/rickshaw.jpg"
              width={500}
              height={500}
              alt="Kanika directing two women for her film, The Pomegranate Tree"
            />
          </div>
        </div>
      </div>
      <div className="w-full max-w-4xl">
        {/* <Image
          className="w-full object-fit"
          src="/laurels.jpg"
          height={500}
          width={500}
          alt="Laurels for the film festivals and awards won by this film."
        /> */}
      </div>
      <div className="max-w-2xl w-full font-mono text-sm flex flex-col gap-24 md:gap-48">
        <div>
          <div className="spacer h-12"></div>
          <h2 className="font-bold text-2xl">Survivor Themed Party</h2>
          <h3>2024</h3>
          <div className="h-12"></div>
          <p>
            Designed and constructed 3 challenges for a birthday party inspired
            by the reality-tv show Survivor.
          </p>
          <div className="h-12"></div>
          {/* <a href="" className="flex gap-2 font-black">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
            <span>Highlight Reel</span>
          </a> */}
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-center w-full py-8 md:flex-nowrap items-center">
        <div className="item">
          <div className="p-2">
            <Image
              className="object-cover w-full "
              src="/balance.jpg"
              width={500}
              height={500}
              alt="Kanika directing two women for her film, The Pomegranate Tree"
            />
            <div className="caption"> </div>
          </div>
        </div>
        <div className="item">
          <div className="p-2">
            <Image
              className="object-cover w-full "
              src="/saw.jpg"
              width={500}
              height={500}
              alt="Kanika directing two women for her film, The Pomegranate Tree"
            />
            <div className="caption"> </div>
          </div>
        </div>
        {/* <Image
          className="object-cover w-full -rotate-6"
          src="/blueprint.png"
          width={500}
          height={500}
          alt="Kanika directing two women for her film, The Pomegranate Tree"
        /> */}
        <div className="item">
          <div className="p-2">
            <Image
              className="object-cover w-full "
              src="/puzzle.jpg"
              width={500}
              height={500}
              alt="Kanika directing two women for her film, The Pomegranate Tree"
            />
            <div className="caption"> </div>
          </div>
        </div>
      </div>
      <div className="max-w-2xl w-full font-mono text-sm flex flex-col gap-24 md:gap-48">
        <div>
          <h2 className="font-bold text-2xl">
            Chapman University Kappa Kappa Gamma Sorority Recruitment Video
          </h2>
          <h3>2019</h3>
          <div className="h-12"></div>
          <a
            href="https://www.youtube.com/watch?v=pwLC7fgGYco&ab_channel=KappaKappaGammaChapmanUniversity"
            className="flex gap-2 font-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
            <span>Watch Project</span>
          </a>
        </div>
        <div>
          <h2 className="font-bold text-2xl">Olympic Spirit</h2>
          <h3>2017</h3>
          <div className="h-12"></div>
          <p>
            A documentary about 2 intellectually disabled people who met through
            the Special Olympics and fell in love.
          </p>
          <div className="h-12"></div>
          <a
            href="https://www.youtube.com/watch?v=Y0arl3Oq4rA&ab_channel=KanikaVora"
            className="flex gap-2 font-black"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
              />
            </svg>
            <span>Watch Project</span>
          </a>
        </div>
      </div>
      <div className="spacer h-24"></div>
      <div
        id="about"
        className="max-w-4xl w-full font-mono text-sm flex flex-col gap-6"
      >
        <div className="spacer h-12"></div>
        <h2 className="text-xl font-bold">About</h2>
        <div className="flex flex-row justify-between gap-12 flex-wrap md:flex-nowrap">
          <div>
            <div className="item w-fit min-w-[300px]">
              <Image
                className="object-cover w-full "
                src="/headshot.jpeg"
                width={500}
                height={500}
                alt="Kanika directing two women for her film, The Pomegranate Tree"
              />
            </div>
          </div>
          <div className="font-mono text-sm flex flex-col gap-6">
            <p>
              Kanika Vora is currently an Account Executive at Rogers & Cowan
              PMK where she has spent the last 2+ years learning about the
              business side of the entertainment industry. Prior to that, she
              graduated from Chapman University’s Dodge College of Film and
              Media Arts with a major in film production - emphasis on directing
              and a minor in entrepreneurship. No matter what space she is in,
              Kanika brings her unique style of storytelling and creativity to
              anything she does .
            </p>
            <p>
              Kanika is passionate about telling stories that leave the audience
              thinking long after the credits roll. She likes to bring to light
              stories from the past with new or unique perspectives and voices.
              She is drawn to stories that touch on social issues, past or
              present, through narrative and connections to the characters.
            </p>
            <p>
              In her free time, she likes to express herself through her diverse
              hobbies of playing the guitar, snowboarding, painting, going to
              music festivals, and building challenges/ throwing parties based
              on Survivor, the greatest show on television.
            </p>
          </div>
        </div>
      </div>
      <div className="spacer h-48 "></div>
      <footer className="text-gray-500 text-xs text-center font-mono p-4">
        copyright 2024 kanika vora, all rights reserved
      </footer>
    </main>
  );
}
