const MyPortfolioSection = () => {
  return (
    <div className="w-full flex flex-col gap-2 items-center mx-auto my-4 ">
      <h2 className="text-4xl font-semibold">MY PORTFOLIO</h2>
      <h3 className="text-2xl">MY LATEST WORK. SEE MORE</h3>
      <div className="w-full flex p-14 justify-between items-center">
        {[1, 2, 3].map(() => (
          <div className="relative h-[200px] w-[30%] bg-[url('/dash2.jpg')] bg-cover bg-center">
            <div className="h-[200px] bg-slate-400 bg-opacity-20">
              <label className="absolute left-5 z-[99] bottom-3">
                Project 1
              </label>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyPortfolioSection;
