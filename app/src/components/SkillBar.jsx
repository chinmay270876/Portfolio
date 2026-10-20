export function SkillBar({ name, percent }) {
  return (
    <div className="skillitem">
      <span className="skill-name" id={`skill-label-${name}`}>
        {name}:
      </span>
      <div
        className="skill-track"
        role="meter"
        aria-labelledby={`skill-label-${name}`}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={percent}
        aria-valuetext={`${percent} percent`}
      >
        <div className="skill" style={{ width: `${percent}%` }} />
      </div>
    </div>
  );
}
