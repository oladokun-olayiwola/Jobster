import { useEffect } from "react";
import Job from "./Job";
import Wrapper from "../assets/wrappers/JobsContainer";
import { useSelector, useDispatch } from "react-redux";
import Loading from "./Loading";
import { getAllJobs } from '../features/alljobs/allJobsSlice';
import PageBtnContainer from "./PageBtnContainer";

const JobsContainer = () => {
  const dispatch = useDispatch()
  const { isLoading, jobs, page } = useSelector((store) => store.jobs);
  useEffect(() => {
    dispatch(getAllJobs)
  },[])


  if (isLoading) {
    return <Loading />;
  }
  if (jobs.length === 0) {
    return (
      <>
        <Wrapper>
          <h2>No jobs to display...</h2>
        </Wrapper>
      </>
    );
  }

  return (
    <Wrapper>
      {/* <h2>No jobs to display...</h2> */}
      <div>Hey</div>
      <h5>.</h5>
      <div className="jobs">
        {jobs.map((job) => {
          return <Job key={job._id} {...job} />;
        })}
      </div>
      {page > 1 && <PageBtnContainer />}
    </Wrapper>
  );
};
export default JobsContainer;
