import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from "recharts";
// import { useState } from "react";
const Score = ({correctScores}) => {
  return (
    <div>
      <BarChart width={730} height={250} data={[correctScores]}>
        <CartesianGrid strokeDasharray="3 3" />
        {/* Use "category" as the dataKey for XAxis */}
        <XAxis dataKey="category" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="gk" fill="#8884d8" />
        <Bar dataKey="mythology" fill="#82ca9d" />
        {/* Change the fill color for "Anime & Manga" */}
        <Bar dataKey="anime_manga" fill="#FFBB28" />
        {/* Change the fill color for "Politics" */}
        <Bar dataKey="Politics" fill="#FF8042" />
      </BarChart>
    </div>
  );
};

export default Score;