import { useState } from "react";
import "../../App";

interface Props {
  postsPerPage: number,
  totalPosts: number,
  paginate: number | undefined | any
}

const Pagination = ({ postsPerPage, totalPosts, paginate }:Props) => {
  const [active, setActive] = useState<string>('')
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }

  const activeClick = () => {
    setActive('button')
  }

  return (
    <ul className="pagingnation">
      {pageNumbers.map((number) => (
        <li key={number} className={active === 'button' ? 'active' : ''} onClick={activeClick} >
          <button onClick={() => paginate(number)}>
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Pagination