import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  const totalexersises = course.parts.reduce((sum, parts) => sum + parts.exercises, 0)

  return (
    <div>
      <Header course={course.name} />
      {course.parts.map((part, index) => (
        <Content key={index} parts={part.name} exersises={part.exercises} />
      ))}
      <Total total={totalexersises}/>
    </div>
  )
}


export default App
