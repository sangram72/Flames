import React, { useState } from "react";

function Home() {
  const [male, Setmale] = useState("");
  const [female, Setfemale] = useState("");
  const [result, Setresult] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);

  const relation = ["F", "L", "A", "M", "E", "S"];
  const descriptions = {
    "F": "Friendship - A strong and supportive bond!",
    "L": "Love - A deep and special connection!",
    "A": "Affection - A caring and warm relationship!",
    "M": "Marriage - A lifetime of togetherness!",
    "E": "Enemy - A challenging relationship with differences!",
    "S": "Sister (Sibling) - A bond like family!"
  };


  function Reset(){
    Setresult("")
    Setfemale("")
    Setmale("")
  }
  function Burn_Letter() {
    let res = male.split("").filter((char) => !female.includes(char)).join("");
    let res2 = female.split("").filter((char) => !male.includes(char)).join("");
    let resu = res.concat(res2);

    if (resu.length === 0) return;

    let relationCopy = [...relation];
    let index = 0;

    for (let i = relationCopy.length; i > 1; i--) {
      index = (index + resu.length - 1) % i;
      relationCopy.splice(index, 1);
    }

    Setresult(relationCopy[0] || "No Result Found");
  }

  function handleInput(setState, value) {
    if (/[^a-zA-Z]/.test(value)) {
      alert("Please enter only letters (A-Z or a-z).");
      return; // Prevents updating state with invalid input
    }
    setState(value);
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
        padding: "2rem",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontSize: "2.5rem",
          fontWeight: "bold",
          marginBottom: "1.5rem",
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
          padding: "1.5rem",
          borderRadius: "10px",
          boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
        }}
      >
        <input
          type="text"
          placeholder="Enter male name"
          value={male}
          style={{
            padding: "0.75rem",
            borderRadius: "5px",
            border: "1px solid #6272a4",
            backgroundColor: "#44475a",
            color: "white",
            textAlign: "center",
            fontSize: "1rem",
          }}
          onChange={(e) => handleInput(Setmale, e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter female name"
          value={female}
          style={{
            padding: "0.75rem",
            borderRadius: "5px",
            border: "1px solid #ff79c6",
            backgroundColor: "#44475a",
            color: "white",
            textAlign: "center",
            fontSize: "1rem",
          }}
          onChange={(e) => handleInput(Setfemale, e.target.value)}
        />

        <div style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
        <button
  onClick={Burn_Letter}
  disabled={male.length < 2 || female.length < 2}
  style={{
    padding: "0.75rem",
    borderRadius: "5px",
    backgroundColor: male.length < 2 || female.length < 2 ? "#6272a4" : "#ff79c6",
    color: "white",
    fontSize: "1rem",
    cursor: male.length < 2 || female.length < 2 ? "not-allowed" : "pointer",
    flex: 1,
    opacity: male.length < 2 || female.length < 2 ? 0.6 : 1,
  }}
>
  Reveal Result
</button>


         
        </div>

        <div style={{ display: "flex", justifyContent: "center",}}>
          <button
            onClick={Reset}
           
            style={{
              padding: "0.75rem",
              borderRadius: "5px",
              backgroundColor: "#ffffff",
              color: "Black",
              fontSize: "1rem",
             
              flex: 1,
              opacity: male.length < 2 || female.length < 2 ? 0.6 : 1,
            }}
          >
            Reset
          </button>

         
        </div>
        
      </div>

      {result && (
        <div
          style={{
            marginTop: "1.5rem",
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#f1fa8c",
            backgroundColor: "#282a36",
            padding: "1rem",
            borderRadius: "10px",
            boxShadow: "0px 0px 10px rgba(255, 255, 255, 0.2)",
            textAlign: "center",
          }}
        >
          <p>{result}</p>
          <p style={{ fontSize: "1rem", marginTop: "0.5rem", color: "#bd93f9" }}>
            {descriptions[result]}
          </p>
        </div>
      )}
    </div>
  );
}

export default Home;
