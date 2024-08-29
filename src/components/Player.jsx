import React, { useState } from "react";

export default function Player({
  initialName,
  symbol,
  isActive,
  onChangeName,
}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  function handleEditClick() {
    setIsEditing((editing) => !editing);

    if (isEditing) {
      onChangeName(symbol, playerName);
    }
  }

  function handleChange(event) {
    setPlayerName(event.target.value);
  }

  let editablePlayerName = <span className="player-name">{playerName}</span>;
  // let btnCaption = 'Edit';

  if (isEditing) {
    editablePlayerName = (
      <input type="text" required value={playerName} onChange={handleChange} />
    );
    // btnCaption = 'Save';
  }

  return (
    <>
      <div className={`player-wrapper ${isActive ? "active" : undefined}`}>
        <div className="player-symbol">{symbol}</div>

        <div className="player">
          {editablePlayerName}
          <button onClick={handleEditClick}>
            {isEditing ? "Save" : "Edit"}
          </button>
        </div>
        {isActive && <div className="your-turn">Your turn</div>}
      </div>
    </>
  );
}
