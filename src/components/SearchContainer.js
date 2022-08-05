import { FormRow, FormRowSelect } from '.';
import Wrapper from '../assets/wrappers/SearchContainer';
import { useSelector, useDispatch } from 'react-redux';

// import { handleChange, clearFilters } from '../features/allJobs/allJobsSlice';

const SearchContainer = () => {

  const handleSearch = (e) => {
    let a = 'b'
      };
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Wrapper>
      <form className='form'>
        <h4>search form</h4>
        <div className='form-center'>
          {/* search position */}
          <FormRow
            type='text'
            name='search'
            value='Value'
            handleChange={handleSearch}
          />
          {/* search by status */}
          <FormRowSelect
            labelText='status'
            name='searchStatus'
            value={'Pending'}
            handleChange={handleSearch}
            list={['all']}
          />

          {/* search by type*/}
          <FormRowSelect
            labelText='type'
            name='searchType'
            value={'Interview'}
            handleChange={handleSearch}
            list={['all',]}
          />
          {/* sort */}
          <FormRowSelect
            name='sort'
            value={'sort'}
            handleChange={handleSearch}
            list={[]}
          />
          <button
            className='btn btn-block btn-danger'
            disabled='true'
            onClick={handleSubmit}
          >
            clear filters
          </button>
        </div>
      </form>
    </Wrapper>
  );
};
export default SearchContainer;
