import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import { getPopular } from "@/lib/Popular/fetchApi";
import { setPopular } from "@/store/popular";

function HomePage() {
  const dispatch = useDispatch();
  const { popular } = useSelector((state: RootState) => state.popular);
  useEffect(() => {
    getPopular().then((data) => {
      dispatch(setPopular(data));
    });
  }, [dispatch]);

  console.log(popular);
  return <div>HomePage</div>;
}

export default HomePage;
