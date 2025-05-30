"use client";

import { fetchProduct, productApiUrl } from "@/services/product";
import { throttle } from "lodash";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import useSWR from "swr";

const useProduct = () => {
  const searchParams = useSearchParams();
  const [fetchUrl, setFetchUrl] = useState(`${productApiUrl}`);
  const router = useRouter();
  const searchRef = useRef();
  const limitRef = useRef();
  const {
    data: products,
    isLoading: productLoading,
    error: productError,
  } = useSWR(fetchUrl, fetchProduct);

  useEffect(() => {
    setFetchUrl(`${productApiUrl}?${searchParams.toString()}`);
    // if (searchParams.get("q")) {
    //   searchRef.current && (searchRef.current.value = searchParams.get("q"));
    // }
  }, [searchParams]);

  useEffect(() => {
    if (searchParams.get("q")) {
      searchRef.current.value = searchParams.get("q");
    }
  }, []);

  const handleSearch = throttle((e) => {
    const search = e.target.value;
    const params = new URLSearchParams(searchParams.toString());
    params.set("q", search);
    router.push(`?${params}`);
    // setFetchUrl(`${productApiUrl}?${params}`);
  }, 500);

  const handleClearSearch = () => {
    searchRef.current.value = "";
    const params = new URLSearchParams(searchParams.toString());
    params.delete("q");
    router.push(`?${params}`);
    setFetchUrl(`${productApiUrl}?${params}`);
  };

  const handlePaginate = async (link) => {
    const url = new URL(link);
    router.push(`${url.search}`);
    // setFetchUrl(`${productApiUrl}?${url.search}`);
  };

  const handleLimit = () => {
    const paramObj = Object.fromEntries(searchParams.entries());
    const currentSearchParmas = new URLSearchParams({
      ...paramObj,
      limit: limitRef.current.value,
      page: 1,
    });
    const quaryString = currentSearchParmas.toString();
    router.push(`?${quaryString}`);
    // setFetchUrl(`${productApiUrl}?${quaryString}`);
  };

  return {
    searchParams,
    fetchUrl,
    setFetchUrl,
    products,
    productLoading,
    productError,
    router,
    searchRef,
    handleSearch,
    handleClearSearch,
    limitRef,
    handlePaginate,
    handleLimit,
  };
};

export default useProduct;
