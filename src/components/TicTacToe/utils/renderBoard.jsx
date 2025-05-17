import Square from "/src/components/Square/Square";
import crossIcon from "/src/assets/cross.svg";
import circleIcon from "/src/assets/circle.svg";

export default function renderBoard(squares, handleClick, styles) {
  return (
    <>
      {squares.map((item, index) => {
        let icon = null;
        if (item === "X") icon = crossIcon;
        else if (item === "O") icon = circleIcon;

        return (
          <Square
            key={index}
            index={index}
            className={styles.cell}
            icon={icon}
            onClick={() => handleClick(index)}
          />
        );
      })}
    </>
  );
}
