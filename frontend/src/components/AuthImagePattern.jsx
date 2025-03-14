const AuthImagePatternAlt = ({ title, subtitle }) => {
  return (
    <div className="hidden lg:flex items-center justify-center bg-base-200 p-12">
      <div className="max-w-md text-center">
        <div className="relative flex items-center justify-center w-48 h-48 mx-auto">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="absolute w-12 h-12 rounded-full bg-primary/20 animate-pulse"
              style={{
                transform: `rotate(${(i / 8) * 360}deg) translateX(70px)`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        <p className="text-base-content/60">{subtitle}</p>
      </div>
    </div>
  );
};

export default AuthImagePatternAlt;