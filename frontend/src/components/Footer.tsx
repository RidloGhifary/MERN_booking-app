const Footer = () => {
  return (
    <div className="bg-blue-700 py-10 p-6">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-xl md:text-2xl lg:text-3xl text-white font-bold tracking-tight">
          Holidayuks
        </span>
        <span className="text-white font-bold tracking-tight flex gap-4">
          <p className="cursor-pointer text-xs md:text-md lg:text-lg">
            Privacy Policy
          </p>
          <p className="cursor-pointer text-xs md:text-md lg:text-lg">
            Terms of Service
          </p>
        </span>
      </div>
    </div>
  );
};

export default Footer;
