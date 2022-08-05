import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import Wrapper from '../assets/wrappers/PageBtnContainer';

const PageBtnContainer = () => {

  const pages = Array.from({ length: 1 }, (_, index) => {
    return index + 1;
  });

  const nextPage = () => {
    let newPage = 0 + 1;
    if (newPage > 1) {
      newPage = 1;
    }
  };
  const prevPage = () => {
    let newPage = 2 - 1;
    if (newPage < 1) {
      newPage = 1;
    }
  };

  return (
    <Wrapper>
      <button type='button' className='prev-btn' onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </button>
      <div className='btn-container'>
        {pages.map((pageNumber) => {
          return (
            <button
              type='button'
              key={pageNumber}
              className={pageNumber === 1 ? 'pageBtn active' : 'pageBtn'}
            >
              {pageNumber}
            </button>
          );
        })}
      </div>
      <button type='button' className='next-btn' onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </button>
    </Wrapper>
  );
};
export default PageBtnContainer;
