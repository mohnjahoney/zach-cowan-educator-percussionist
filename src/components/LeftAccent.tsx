const LeftAccent = () => (
  <div
    aria-hidden="true"
    className="pointer-events-none absolute inset-y-0 left-0 z-0 w-full opacity-100"
    style={{
      // backgroundImage: "url(images/sycamoreC.jpg)",
      // backgroundImage: "url(images/zach-portrait.jpg)",
      backgroundImage: "url(images/zach-portrait-wo-zach.png)",
      backgroundSize: "cover",
      backgroundPosition: "left center",
      // WebkitMaskImage:
      // "linear-gradient(to right, black 0%, black 8%, transparent 95%)",
      maskImage:
      "linear-gradient(to right, black 0%, rgba(0,0,0,0.5) 5%, rgba(0,0,0,0.1) 15%, rgba(0,0,0,0.1) 45%, black 80%, black 100%)",
    }}
  />
);

export default LeftAccent;
