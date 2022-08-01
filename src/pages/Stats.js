import React from "react";
import JobCard from "../components/JobCard";
import Wrapper from "../assets/wrappers/JobsContainer";

const Stats = () => {
  return (
    <div className="dashboard-page">
      <Wrapper>
        <JobCard />
      </Wrapper>
    </div>
  );
};

export default Stats;
