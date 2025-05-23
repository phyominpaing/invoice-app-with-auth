import useAccountStore from "@/store/useAccountStore";
import { token } from "./profile";

export const productApiUrl = `${process.env.NEXT_PUBLIC_API_URL}/products`;

export const fetchProduct = (...args) =>
  fetch(...args, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
    cache: "no-store",
  }).then((res) => res.json());

export const storeProduct = (payLoad) => {
  console.log(payLoad);

  return fetch(productApiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
    body: JSON.stringify(payLoad),
  });
};

export const destroyProduct = (id) => {
  return fetch(`${productApiUrl}/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${useAccountStore.getState().token}`,
    },
  });
};
