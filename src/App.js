import React, { useState } from "react";
import Accordion from "./component/Accordion";
import Search from "./component/Search";
import Dropdown from "./component/Dropdown";
import Translate from "./component/Translate";
import Header from "./component/Header";
import Route from "./component/Route";

const items = [
  {
    title: "What is React ?",
    content: "It is a JavaScript based framework",
  },
  {
    title: "Why do you use React?",
    content: "Beacause It is Most Popular JavaScript Library among Developers",
  },
  {
    title: "How do you use React ?",
    content: "By Creating React Component",
  },
];

const options = [
  {
    title: "The Color Red",
    value: "red",
  },
  {
    title: "The Color Green",
    value: "green",
  },
  {
    title: "A Shade Of Blue",
    value: "blue",
  },
];

const App = () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Accordion items={items} />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          options={options}
          selected={selected}
          onChangeSelected={setSelected}
          label="Select A Color"
        />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
    </div>
  );
};

export default App;
