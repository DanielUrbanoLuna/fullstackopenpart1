const Header = ({course}) => {
  console.log(course); // Imprimimos los props en consola
  return <h1>{course.name}</h1>;
};

export default Header;
