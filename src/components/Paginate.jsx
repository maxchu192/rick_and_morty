import React, { useEffect } from "react";
import style from "../styles/Paginate.module.css";
import { useDispatch, useSelector } from "react-redux";
import { nextPage, prevPage } from "../redux/actions/action.js";

export default function Paginate({ cantPages }) {
  const { numPage } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
  }, [cantPages])
  

  function next() {
    dispatch(nextPage());
  }

  function prev() {
    dispatch(prevPage());
  }

  return (
    <div className={style.page}>
      {numPage > 1 ? (
        <div>
          <button onClick={prev}>PREV</button>
          <p>{numPage - 1}</p>
        </div>
      ) : null}

      <h3>{numPage}</h3>
      {numPage < cantPages ? (
        <div>
          <p>{numPage + 1}</p>
          <button onClick={next}>NEXT</button>
        </div>
      ) : null}
    </div>
  );
}
