export default function getWinLineStyle(winLine) {
  if (!winLine) return null;

  const map = {
    // Line Style for Row
    "0,1,2": { top: "16.66%", left: "50%", rotate: "0deg", width: "80%" },
    "3,4,5": { top: "50%", left: "50%", rotate: "0deg", width: "80%" },
    "6,7,8": { top: "83.33%", left: "50%", rotate: "0deg", width: "80%" },

    // Line Style for Columns
    "0,3,6": { top: "50%", left: "16.66%", rotate: "90deg", width: "80%" },
    "1,4,7": { top: "50%", left: "50%", rotate: "90deg", width: "80%" },
    "2,5,8": { top: "50%", left: "83.33%", rotate: "90deg", width: "80%" },

    // Line Style for Diagnals
    "0,4,8": { top: "50%", left: "50%", rotate: "45deg", width: "100%" },
    "2,4,6": { top: "50%", left: "50%", rotate: "-45deg", width: "100%" },
  };

  const key = winLine.join(",");
  const match = map[key];

  if (!match) return null;

  return {
    top: match.top,
    left: match.left,
    width: match.width,
    transform: `translate(-50%, -50%) rotate(${match.rotate})`,
  };
}
