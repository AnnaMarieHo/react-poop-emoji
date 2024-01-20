import "./Star.css";

export default function Star(props) {
  return (
    <div style={props.location}>
      <div className="star star-1"></div>
      <div className="star star-2"></div>
    </div>
  );
}
// position: "absolute", top: -80, left: 90
// position: "absolute",
// top: -80,
// left: 300,
// transform: "rotate(-45deg)",
