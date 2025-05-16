export const authApiUrl = `${process.env.NEXT_PUBLIC_API_URL}`;

export const userLogin = (payLoad) => {
  return fetch(`${authApiUrl}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payLoad),
  });
};

export const userRegister = (payLoad) => {
  return fetch(`${authApiUrl}/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payLoad),
  });
};