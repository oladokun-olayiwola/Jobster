import Wrapper from "../assets/wrappers/Job";
import { MdOutlinePendingActions } from "react-icons/md";
import {GrSchedulePlay} from "react-icons/gr"
import {AiOutlineBug} from 'react-icons/ai'

const JobCard = () => {
  return (<>
    <Wrapper>
        <header>
        <span className="count">0</span>
        <span className="icon">
          <MdOutlinePendingActions />
        </span>
      </header>
      <h5 className="title">
        Pending Apllications
      </h5>
    </Wrapper>
    </>
  );
};

export default JobCard