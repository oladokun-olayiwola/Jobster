import { FormRow, FormRowSelect } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  handleChange,
  clearFilters,
  createJob,
  editJob,
} from "../../features/job/jobSlice";
import user from '../../features/user/userSlice'
// import { clearStore } from "../../features/user/userSlice";



const AddJob = () => {
  const dispatch = useDispatch();


   useEffect(() => {
     if (isEditing) {
       dispatch(
         editJob({
           jobId: editJobId,
           job: {
             position,
             company,
             jobLocation,
             jobType,
             status,
           },
         })
       );
       return;
     }
   }, []);


  const {
    isLoading,
    position,
    company,
    jobLocation,
    jobType,
    jobTypeOptions,
    status,
    statusOptions,
    isEditing,
    editJobId,
  } = useSelector((store) => store.job);


if (isEditing) {
  dispatch(
    editJob({
      jobId: editJobId,
      job: {
        position,
        company,
        jobLocation,
        jobType,
        status,
      },
    })
  );
  return;
}


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!position || !company || !jobLocation) {
      toast.error("Please fill out all fields");
      return;
    }
  dispatch(createJob({ position, company, jobLocation, jobType, status }));

  };
  
  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    dispatch(handleChange({ name, value }));
  };

  return (
    <>
    <Wrapper>
      <form className="form">
        <h3>{"add job"}</h3>
        <div className="form-center">
          {/* position */}
          <FormRow
            type="text"
            name="position"
            value={position}
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type="text"
            name="company"
            value={company}
            handleChange={handleJobInput}
          />
          {/* jobLocation */}
          <FormRow
            type="text"
            name="jobLocation"
            labelText="Job Location"
            value={jobLocation}
            handleChange={handleJobInput}
          />
          {/* status */}
          <FormRowSelect
            name="status"
            value={status}
            handleChange={handleJobInput}
            list={statusOptions}
          />
          {/* job type*/}
          <FormRowSelect
            name="jobType"
            labelText="job Type"
            value={jobType}
            handleChange={handleJobInput}
            list={jobTypeOptions}
          />
          <div className="btn-container">
            <button
              type="button"
              className="btn btn-block clear-btn"
              onClick={() => dispatch(clearFilters())}
            >
              clear
            </button>
            <button
              type="submit"
              className="btn btn-block submit-btn"
              onClick={handleSubmit}
              disabled={false}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
    <div className="Toastify"></div>
    </>
  );
};
export default AddJob;
