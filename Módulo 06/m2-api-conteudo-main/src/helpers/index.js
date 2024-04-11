import pkgJwt from "jsonwebtoken";

const { verify } = pkgJwt;

const normalizeData = (object) => {
  let newObject = { ...object };

  for (let key in newObject) {
    if (key !== "rating" && key !== "password") {
      newObject[key] = newObject[key].trim();
    } else if (key === "rating") {
      newObject[key] = Number(newObject[key]);
    }
  }

  return newObject;
};

const removeUnnecessaryKeys = (movie) => {
  const validKeys = ["title", "image", "category", "rating", "synopsis"];

  for (let key in movie) {
    if (!validKeys.includes(key)) {
      delete movie[key];
    }
  }

  return movie;
};

const getUserId = (authorization) => {
  if (authorization.includes("Bearer")) {
    const [, token] = authorization.split(" ");

    authorization = token;
  }

  const id = verify(authorization, "kenzie", (err, decoded) => {
    if (err) {
      return response.status(401).json({ error: err.message });
    }
    return decoded.user_id;
  });

  return id;
};

export { normalizeData, removeUnnecessaryKeys, getUserId };
