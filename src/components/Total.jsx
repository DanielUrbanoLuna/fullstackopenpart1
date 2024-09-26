const Total = ({ parts }) => {

  const total = parts.reduce((sum, part) => sum + part.exercises, 0);
  console.log("el numero total es:" ,total);
  return <p>Total number of exercises: {total}</p>;
};

export default Total;
