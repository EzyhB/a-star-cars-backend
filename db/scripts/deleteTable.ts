import query from "..";

const randomFunc = async () => {
  const data = await query("GET * FROM cars;");
  return data.rows;
};

randomFunc();
