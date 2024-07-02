import React from "react";
import "./PrimaryButton.scss";

interface MainButtonProps {
  buttonText: string;
  disabled?: boolean; // Make disabled an optional prop
}

function MainButton({ buttonText, disabled }: MainButtonProps) {
  const handleButtonClick = () => {
    console.log("CLICKED!");
  };

  return (
    <div>
      <button onClick={handleButtonClick} disabled={disabled}>
        {buttonText}
      </button>
    </div>
  );
}

export default MainButton;
