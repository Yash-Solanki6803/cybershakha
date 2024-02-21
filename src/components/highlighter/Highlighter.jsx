import classNames from "classnames";

function Highlighter({ size = 1, className = "" }) {
  return (
    <div
      className={classNames(
        "rounded-full bg-brand_primary absolute -z-20 opacity-[0.1] customPulse",
        {
          "w-[150px] h-[150px] customShadow": size === 1,
          "w-[300px] h-[300px] customShadow": size === 2,
          "w-[450px] h-[450px] customShadowDark": size === 3,
          "w-[600px] h-[600px] customShadowDark": size === 4,
          "w-[750px] h-[750px] customShadowDark": size === 5,
          "w-[900px] h-[900px] customShadowDark": size === 6,
        },
        className
      )}
    ></div>
  );
}

export default Highlighter;
