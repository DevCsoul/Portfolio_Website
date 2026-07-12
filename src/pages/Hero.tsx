export default function Hero() {
  return (
    <section id="hero" className="sticky top-0 z-0 h-screen w-full overflow-hidden bg-black scroll-mt-24">
      {/* Background */}
      <img
        src="/Hero-BG.png"
        alt=""
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Wordmark, sits behind the subject */}
        <div className="
            absolute
            inset-0
            z-10
            flex
            flex-col
            items-center
            mt-30
            lg:mt-0
            lg:justify-center
            ">
            <h1 className="
                animate-fade-in-up
                font-display
                select-none
                text-white/40
                flex
                flex-col
                text-left
                ">
                <span className="italic text-[clamp(1em,5vw,2em)] pl-[clamp(0.25rem,2vw,1.5rem)]">Hey, I'm</span>
                <span className="text-[clamp(5rem,30vw,24rem)] leading-[0.82] ">KURT</span>
            </h1>
        </div>

      {/* Subject, sits above the text */}
    <div className="absolute bottom-0 left-0 z-20 flex h-[90%] w-full items-end justify-center">
    <img
        src="/Hero-Subject.png"
        alt="Kurt M., frontend developer"
        className="
        animate-fade-in
        w-[80%]
        max-w-md
        object-contain

        lg:h-full
        lg:w-auto
        lg:max-w-none
        "
    />
    </div>

      {/* Subtitle */}
      <div className="absolute bottom-20 left-1/2 z-30 -translate-x-1/2 w-[80%]">
        <p className="animate-fade-in delay-300 font-mono tracking-[0.2em] text-white/70 text-center text-[clamp(1em,5vw,3em)]">
          A Frontend Developer
        </p>
      </div>

    </section>
  )
}