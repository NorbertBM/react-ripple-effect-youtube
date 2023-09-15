import "./App.css";
import { useState } from "react";
function App() {
  const [ripples, setRipple] = useState([]);

  const handleRippleEffect = (e) => {
    // window.alert("ripple");
    const rippleContainer = e.currentTarget.getBoundingClientRect();

    const size = Math.max(rippleContainer.width, rippleContainer.height);

    const x = e.clientX - rippleContainer.left - size / 2;
    const y = e.clientY - rippleContainer.top - size / 2;

    const newRipple = {
      x,
      y,
      size,
      id: Date.now(),
    };

    setRipple([...ripples, newRipple]);
  };
  return (
    <>
      <div className="ripple-container" onClick={handleRippleEffect}>
        <div className="ripple">
          {ripples.map((ripple) => (
            <span
              key={ripple.id}
              style={{
                top: ripple.y,
                left: ripple.x,
                width: ripple.size,
                height: ripple.size,
              }}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
