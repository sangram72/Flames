import React, { useState } from "react";

function Home() {
  const [male, Setmale] = useState("");
  const [female, Setfemale] = useState("");
  const [result, Setresult] = useState("");

  const relation = ["F", "L", "A", "M", "E", "S"];
  const descriptions = {
    "F": "Friendship - A strong bond that lasts forever!",
    "L": "Love - A deep and passionate connection!",
    "A": "Affection - A caring and warm relationship!",
    "M": "Marriage - A lifetime of togetherness!",
    "E": "Enemy - Rivalry and misunderstandings!",
    "S": "Sibling - A brotherly/sisterly bond!"
  };

  function Burn_Letter() {
    let res = male.split("").filter((char) => !female.includes(char)).join("");
    let res2 = female.split("").filter((char) => !male.includes(char)).join("");
    let resu = res.concat(res2);

    if (resu.length === null || resu.length === 0) return;

    let relationCopy = [...relation];
    let index = 0;

    for (let i = relationCopy.length; i > 1; i--) {
      index = (index + resu.length - 1) % i;
      relationCopy.splice(index, 1);
    }

    Setresult(relationCopy[0] || "No Result Found");
  }

  function handleInput(setState, value) {
    const filteredValue = value.replace(/[^a-zA-Z]/g, "");
    setState(filteredValue);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#1e1e2e",
        color: "white",
        padding: "20px",
      }}
    >
      <h1
        style={{
          fontSize: "40px",
          fontWeight: "bold",
          marginBottom: "20px",
          textAlign: "center",
          color: "#ff79c6",
        }}
      >
        FLAMES Relationship Game
      </h1>

      <div
        style={{
          width: "100%",
          maxWidth: "400px",
          backgroundColor: "#282a36",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "15px",
        }}
      >
        <input
          type="text"
          placeholder="Enter male name"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #6272a4",
            backgroundColor: "#44475a",
            color: "white",
            textAlign: "center",
            fontSize: "16px",
          }}
          onChange={(e) => handleInput(Setmale, e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter female name"
          style={{
            padding: "10px",
            borderRadius: "5px",
            border: "1px solid #ff79c6",
            backgroundColor: "#44475a",
            color: "white",
            textAlign: "center",
            fontSize: "16px",
          }}
          onChange={(e) => handleInput(Setfemale, e.target.value)}
        />

        <div style={{ display: "flex", justifyContent: "space-between", marginTop: "10px" }}>
          <button
            onClick={Burn_Letter}
            disabled={male === "" || female === ""}
            style={{
              padding: "10px",
              borderRadius: "5px",
              backgroundColor: male === "" || female === "" ? "#6272a4" : "#ff79c6",
              color: "white",
              fontSize: "16px",
              cursor: male === "" || female === "" ? "not-allowed" : "pointer",
              flex: 1,
              marginLeft: "5px",
              opacity: male === "" || female === "" ? 0.6 : 1,
            }}
          >
            Reveal Result
          </button>
        </div>
      </div>

    
    </div>
  );
}

export default Home;
