import { FaLocationArrow, FaBriefcase, FaCalendarAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Job';
// import { useDispatch } from 'react-redux';
import JobInfo from './JobInfo';
import moment from 'moment';
const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  createdAt,
  status,
}) => {
  const date = moment(createdAt).format('MMM Do, YYYY');

  return (
    <Wrapper>
      <header>
        <div className='main-icon'>A</div>
        <div className='info'>
          <h5> New</h5>
          <p> State</p>
        </div>
      </header>
      <div className='content'>
        <div className='content-center'>
          <JobInfo icon={<FaLocationArrow />} text='new' />
          <JobInfo icon={<FaCalendarAlt />} text="old" />
          <JobInfo icon={<FaBriefcase />} text='new' />
          <div className={`status interview`}>interview</div>
        </div>
        <footer>
          <div className='actions'>
            <Link
              to='/add-job'
              className='btn edit-btn'
            >
              Edit
            </Link>
            <button
              type='button'
              className='btn delete-btn'
            >
              delete
            </button>
          </div>
        </footer>
      </div>
    </Wrapper>
  );
};
export default Job;
