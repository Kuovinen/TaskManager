import React from "react";
//Toggle switch to change theme from dark to light mode
export default function Toggle(props) {
  const [mode, setMode] = React.useState(true);

  function change() {
    //this is LIGHT mode
    if (mode) {
      document.documentElement.style.setProperty("--cp-Main", "#DEDEDE");
      document.documentElement.style.setProperty("--cp-Accent", "#9F759E");
      document.documentElement.style.setProperty("--cp-Blue", "#87b9f5");
      document.documentElement.style.setProperty("--cp-Background", "#C9C9C9");
      document.documentElement.style.setProperty("--cp-Text", "#9F759E");
      document.documentElement.style.setProperty("--cp-Text2", "#9F759E");
      document.documentElement.style.setProperty("--cp-Text3", "#DEDEDE");
      setMode(false);
    }
    //this is DARK mode
    else {
      document.documentElement.style.setProperty("--cp-Main", "#3c3c3c");
      document.documentElement.style.setProperty("--cp-Accent", "#543753");
      document.documentElement.style.setProperty("--cp-Blue", "#325073");
      document.documentElement.style.setProperty("--cp-Background", "#1b1b1b");
      document.documentElement.style.setProperty("--cp-Text", "#a9a9a9");
      document.documentElement.style.setProperty("--cp-Text2", "#9f70a0");
      document.documentElement.style.setProperty("--cp-Text3", "#a9a9a9");
      setMode(true);
    }
  }

  return (
    <label className="switch">
      <input type="checkbox" onClick={change} />
      <span className="slider round"></span>
    </label>
  );
}
