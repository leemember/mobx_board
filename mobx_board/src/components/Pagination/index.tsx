import "../../App";

interface Props {
  postsPerPage: number;
  totalPosts: number;
  onClick: (page: number) => void;
}

const Pagination = ({ postsPerPage, totalPosts, onClick }: Props) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagingnation">
      {pageNumbers.map((number) => (
        <li key={number}>
          <button onClick={() => onClick(number)}>{number}</button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
