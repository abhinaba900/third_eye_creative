export default function VanishEffect({
  children,
  className = "",
}: {
  children: string;
  className?: string;
}) {
  return (
    <div className="vanish-effect">
      <div className="vanish-text">
        <ul>
          {children.split("").map((char, index) => (
            <li
              key={index}
              className={className}
              style={{ animationDelay: `${index * 0.4}s` }}
            >
              {char === " " ? "\u00A0" : char}
            </li>   
          ))}
        </ul>
      </div>
    </div>
  );
}
