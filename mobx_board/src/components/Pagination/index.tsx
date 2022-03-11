import "../../App";

interface Props {
  postsPerPage: number,
  totalPosts: number,
  paginate: number | undefined | any
}

const Pagination = ({ postsPerPage, totalPosts, paginate }:Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i)
  }


  return (
    <ul className="pagingnation">
      {pageNumbers.map((number) => (
        <li key={number}>
          <button onClick={() => paginate(number)}>
            {number}
          </button>
        </li>
      ))}
    </ul>
  );
}

export default Pagination