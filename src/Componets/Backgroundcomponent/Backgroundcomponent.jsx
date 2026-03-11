const Backgroundcomponent = () => {
  return (
    <div
      className="fixed top-0 left-0 z-[-2] h-full w-full min-h-screen"
      style={{
        backgroundImage:
          "linear-gradient(135deg, #050f1a 0%, #0a1929 50%, #06474a 100%)",
      }}
    >
      {/* Subtle grid pattern with pearl aqua */}
      <div className="absolute top-0 left-0 h-full w-full bg-transparent bg-[radial-gradient(#83c5be_1px,transparent_1px)] bg-[size:20px_20px] opacity-5"></div>

      {/* Primary gradient overlay - Stormy Teal */}
      <div
        className="absolute top-0 left-0 h-full w-full"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, transparent, rgba(0, 109, 119, 0.2))",
        }}
      ></div>

      {/* Secondary gradient overlay - Pearl Aqua */}
      <div
        className="absolute top-0 left-0 h-full w-full"
        style={{
          backgroundImage:
            "linear-gradient(to top left, rgba(131, 197, 190, 0.1), transparent)",
        }}
      ></div>

      {/* Floating element 1 - Pearl Aqua */}
      <div
        className="absolute top-20 left-10 w-48 h-48 rounded-full blur-3xl animate-float"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(131, 197, 190, 0.2), rgba(0, 109, 119, 0.1))",
        }}
      ></div>

      {/* Floating element 2 - Tangerine Dream */}
      <div
        className="absolute top-40 right-20 w-32 h-32 rounded-full blur-3xl animate-float"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(226, 149, 120, 0.15), rgba(131, 197, 190, 0.08))",
          animationDelay: "1s",
        }}
      ></div>

      {/* Floating element 3 - Alice Blue */}
      <div
        className="absolute bottom-20 left-1/4 w-56 h-56 rounded-full blur-3xl animate-float"
        style={{
          backgroundImage:
            "linear-gradient(to bottom right, rgba(237, 246, 249, 0.08), rgba(0, 109, 119, 0.12))",
          animationDelay: "2s",
        }}
      ></div>

      {/* Floating element 4 - Almond Silk (accent) */}
      <div
        className="absolute top-1/2 right-1/4 w-40 h-40 rounded-full blur-2xl animate-float"
        style={{
          backgroundImage:
            "linear-gradient(to bottom left, rgba(255, 221, 210, 0.06), transparent)",
          animationDelay: "3s",
        }}
      ></div>
    </div>
  );
};

export default Backgroundcomponent;
