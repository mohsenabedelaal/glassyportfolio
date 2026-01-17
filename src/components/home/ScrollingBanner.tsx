export const ScrollingBanner = () => {
  const text = "24 Hour Glass Replacement • ";
  const repeatedText = text.repeat(10);

  return (
    <section className="bg-primary py-4 overflow-hidden">
      <div className="animate-scroll whitespace-nowrap flex">
        <span className="text-primary-foreground font-bold text-lg md:text-xl tracking-wider">
          {repeatedText}
        </span>
        <span className="text-primary-foreground font-bold text-lg md:text-xl tracking-wider">
          {repeatedText}
        </span>
      </div>
    </section>
  );
};
