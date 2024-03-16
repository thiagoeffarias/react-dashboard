import React, { useState } from "react";
import "./Card.css";
import { motion, AnimatePresence } from "framer-motion";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { UilTimes } from "@iconscout/react-unicons";
import ReactApexChart from "react-apexcharts";

const Card = (props) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <AnimatePresence className="Card">
      {expanded ? (
        <ExpandedCard
          param={props}
          expanded={expanded}
          setExpanded={() => setExpanded(false)}
        />
      ) : null}
      <CompactCard
        param={props}
        expanded={expanded}
        setExpanded={() => setExpanded(true)}
      />
    </AnimatePresence>
  );
};

export default Card;

//compactCard placeholder

// CompactedCard
function CompactCard({ param, expanded, setExpanded }) {
  const Png = param.icon;
  const initialOpacticty = expanded ? 1 : 0;
  const finalOpacity = expanded ? 0 : 1;

  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      onClick={setExpanded}
      layoutId={`expandableCard-${param.title}${expanded ? "expanded" : ""}`}
      initial={{ opacity: initialOpacticty }}
      animate={{ opacity: finalOpacity, transition: { duration: 0.2 } }}
      exit={{ opacity: 0 }}
    >
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
          styles={{ float: "left" }}
          animate={true}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

function ExpandedCard({ param, expanded, setExpanded }) {
  const data = {
    series: param.series,
    options: {
      chart: {
        height: "100%",
        type: "area",
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        curve: "smooth",
      },
      xaxis: {
        type: "datetime",
        categories: [
          "2018-09-19T00:00:00.000Z",
          "2018-09-19T01:30:00.000Z",
          "2018-09-19T02:30:00.000Z",
          "2018-09-19T03:30:00.000Z",
          "2018-09-19T04:30:00.000Z",
          "2018-09-19T05:30:00.000Z",
          "2018-09-19T06:30:00.000Z",
        ],
      },
      tooltip: {
        x: {
          format: "dd/MM/yy HH:mm",
        },
      },
    },
  };

  const initialOpacticty = expanded ? 0 : 1;
  const finalOpacity = expanded ? 1 : 0;

  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId={`expandableCard-${param.title}`}
      initial={{ opacity: initialOpacticty }}
      animate={{
        opacity: finalOpacity,
        transition: { duration: 0.3 },
      }}
      exit={{ opacity: 0 }}
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <ReactApexChart
          options={data.options}
          series={data.series}
          type="area"
          height={"100%"}
        />
      </div>
      <span>Last 24h</span>
    </motion.div>
  );
}
