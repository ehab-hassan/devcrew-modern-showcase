import { useEffect, useRef } from "react";
import gsap from "gsap";
// If you have plugin modules (check your license / availability)
import { ScrambleTextPlugin } from "gsap/ScrambleTextPlugin";
// SplitText is trickier—there is no “official” npm version widely available, so might need to use a local copy or import via CDN

// Register plugins
gsap.registerPlugin(ScrambleTextPlugin /*, SplitText if available */);

function ScrambleCursorText({ children }) {
  const containerRef = useRef(null);
  const splitInstanceRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // If you have access to a SplitText constructor (via import or window)
    const SplitText = window.SplitText; 
    if (!SplitText) {
      console.error("SplitText not found. You need to include it (via script or plugin).");
      return;
    }

    // Create the split
    const st = new SplitText(container.querySelector("p"), {
      type: "chars",
      charsClass: "char",
    });
    splitInstanceRef.current = st;

    // For each char, store its content in data-content
    st.chars.forEach((char) => {
      gsap.set(char, {
        attr: {
          "data-content": char.innerHTML,
        },
      });
    });

    const onPointerMove = (e) => {
      st.chars.forEach((char) => {
        const rect = char.getBoundingClientRect();
        const cx = rect.left + rect.width / 2;
        const cy = rect.top + rect.height / 2;
        const dx = e.clientX - cx;
        const dy = e.clientY - cy;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 100) {
          gsap.to(char, {
            overwrite: true,
            duration: 1.2 - dist / 100,
            scrambleText: {
              text: char.dataset.content,
              chars: ".:",
              speed: 0.5,
            },
            ease: "none",
          });
        }
      });
    };

    container.addEventListener("pointermove", onPointerMove);

    // Cleanup on unmount
    return () => {
      container.removeEventListener("pointermove", onPointerMove);
      if (splitInstanceRef.current) {
        splitInstanceRef.current.revert(); // if SplitText supports cleanup
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="text-block"
      style={{
        // you can move CSS to your stylesheets
        margin: "15vw",
        maxWidth: "800px",
        color: "#fff",
        fontFamily: "'Space Mono', monospace",
      }}
    >
      <p>{children}</p>
    </div>
  );
}

export default function App() {
  return (
    <div class="text-2xl" style={{ background: "#000", height: "50vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <ScrambleCursorText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ut labore et dolore magna aliqua. Ut enim ad minim veniam... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ut labore et dolore magna aliqua. Ut enim ad minim veniam... Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut ut labore et dolore magna aliqua. Ut enim ad minim veniam...
      </ScrambleCursorText>
    </div>
  );
}
