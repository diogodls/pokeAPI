import {type Dispatch, type SetStateAction, useCallback} from "react";
import {getAllPokeCount} from "../../hooks/api.ts";
import {useFetch} from "../../hooks/fetch.ts";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

type Pagination = {
  LIMIT: number;
  setPage: Dispatch<SetStateAction<number>>;
}

const Pagination = ({LIMIT, setPage}: Pagination) => {
  const fetchPokemonsLength = useCallback(() => getAllPokeCount(), []);
  const {data: pokemonsLength} = useFetch<number>(fetchPokemonsLength);
  const pageCount = Math.ceil((pokemonsLength ?? LIMIT) / LIMIT); //aaaaaa

  return (
    <div>
      <ReactPaginate
        pageCount={pageCount}
        breakLabel={'...'}
        onPageChange={(e ) => {
          setPage(e.selected + 1);
        }}
        marginPagesDisplayed={2}
        pageRangeDisplayed={2}
        previousLabel={'<'}
        nextLabel={'>'}
        renderOnZeroPageCount={null}
        nextClassName={styles.button}
        className={styles.pagination}
        pageClassName={styles.page}
        activeClassName={styles.active}
        previousClassName={styles.button}
      />
    </div>
  );
};

export default Pagination;