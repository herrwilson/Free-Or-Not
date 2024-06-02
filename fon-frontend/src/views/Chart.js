import React, { useState } from "react";
import axios from "axios";
import { UserData } from "../components/data";
import ChartCard from "../components/ChartCard";
import CalendarCard from "../components/CalendarCard";

async function fetchData() {
  try {
    const result = await axios.get(
      "mongodb://localhost:27017/FreeOrNot/api/weekly"
    );
    console.log(result.data);
  } catch (error) {
    console.error(error);
  }
}

function Chart() {
  const [active, setActive] = useState("FirstCard");
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Number of users",
        data: UserData.map((data) => data.userGain),
      },
    ],
  });

  return (
    <div ClassName="app">
      <nav>
        <button onClick={() => setActive("FirstCard")}>Bar Chart</button>
        <button onClick={() => setActive("SecondCard")}>Calendar</button>
      </nav>
      <div>
        {active === "FirstCard" && <ChartCard chartData={userData} />}
        {active === "SecondCard" && <CalendarCard />}
      </div>
    </div>
  );
}

export default Chart;
