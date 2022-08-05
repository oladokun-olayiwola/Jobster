import { FormRow, FormRowSelect } from '../../components';
import Wrapper from '../../assets/wrappers/DashboardFormPage';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
const AddJob = () => {
  
  const handleSubmit = (e) => {
    e.preventDefault();

    
  };

  const handleJobInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
  };

  return (
    <Wrapper>
      <form className='form'>
        <h3>{'add job'}</h3>
        <div className='form-center'>
          {/* position */}
          <FormRow
            type='text'
            name='position'
            value='pending'
            handleChange={handleJobInput}
          />
          {/* company */}
          <FormRow
            type='text'
            name='company'
            value='J'
            handleChange={handleJobInput}
          />
          {/* jobLocation */}
          <FormRow
            type='text'
            name='jobLocation'
            labelText='job location'
            value='myTimes'
            handleChange={handleJobInput}
          />
          {/* status */}
          <FormRowSelect
            name='status'
            value='Pending'
            handleChange={handleJobInput}
            list={[]}
          />
          {/* job type*/}
          <FormRowSelect
            name='jobType'
            labelText='job type'
            value='Freelance'
            handleChange={handleJobInput}
            list={[]}
          />
          <div className='btn-container'>
            <button
              type='button'
              className='btn btn-block clear-btn'
            >
              clear
            </button>
            <button
              type='submit'
              className='btn btn-block submit-btn'
              onClick={handleSubmit}
              disabled={false}
            >
              submit
            </button>
          </div>
        </div>
      </form>
    </Wrapper>
  );
};
export default AddJob;
