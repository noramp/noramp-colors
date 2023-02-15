// (async () => {
//   const data = {
//     currency: "usd",
//     trigger_id: "tri_6cGmJz6J9irZgZzA7zVEsX",
//     amount: 50,
//   };

//   const response = await fetch(
//     "https://api.noramp.io/prices/app_6ptK4p4GXh3EXJYTAHt7hu",
//     {
//       method: "POST",
//       headers: {
//         "content-type": "application/json",
//         authorization:
//           "Bearer 68975d7b0e5568faa9d565468bcf8c96bfa6ff744eaa481235479ec0f70667df",
//       },
//       body: JSON.stringify(data),
//     }
//   );

//   console.log("response", await response.json());
// })();

(async () => {
  const data = {
    identifier: "123456789",
  };

  const response = await fetch(
    "https://api.noramp.io/apps/app_6ptK4p4GXh3EXJYTAHt7hu/kycs",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
        authorization:
          "Bearer 68975d7b0e5568faa9d565468bcf8c96bfa6ff744eaa481235479ec0f70667df",
      },
      body: JSON.stringify(data),
    }
  );

  console.log("response", await response.json());
})();
