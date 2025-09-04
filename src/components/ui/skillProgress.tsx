import React from "react";

interface SkillProgressProps {
  label: string;
  percentage: number; // 0 - 100
  gradient: string; // Tailwind gradient class
}

const SkillProgress: React.FC<SkillProgressProps> = ({
  label,
  percentage,
  gradient,
}) => {
  return (
    <div className="w-full mb-3">
      <p className="font-bold mb-2">{label}</p>
      <div className="relative w-full h-5 rounded-full bg-gray-200 overflow-hidden">
        {/* Progress bar */}
        <div
          className={`absolute left-0 top-0 h-full ${gradient}`}
          style={{ width: `${percentage}%` }}
        ></div>

        {/* Circle marker */}
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 rounded-full border-2 bg-white`}
          style={{
            left: ` calc(${percentage}% - 10px)`, // center circle
            borderColor: "transparent",
            boxShadow:
              gradient.includes("from-") && gradient.includes("to-")
                ? "0 0 0 3px white, 0 0 0 6px rgba(0,0,0,0.1)"
                : "",
          }}
        >
          <div className={`w-full h-full rounded-full ${gradient}`}></div>
        </div>
      </div>
    </div>
  );
};

export default SkillProgress;
