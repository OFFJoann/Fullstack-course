import Header from "./Header";
import Content from "./Content";
import Total from "./Total";

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14
  const totalexersises = exercises1 + exercises2 + exercises3
  
  return (
    <div>
      <Header course={course} />
      <Content parts={part1} exersises={exercises1} />
      <Content parts={part2} exersises={exercises2} />
      <Content parts={part3} exersises={exercises3} />
      <Total total={totalexersises} />
    </div>
  )
}

export default App
