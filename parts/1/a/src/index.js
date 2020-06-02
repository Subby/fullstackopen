import ReactDOM from 'react-dom'
import React from "react";
import * as PropTypes from "prop-types";

const Header = (props) => {
    return <h1>{props.course}</h1>;
};

const Content = (props) => {
    console.log(props);
    return <>
        <Part part={props.part1}/>
        <Part part={props.part2}/>
        <Part part={props.part3}/>
    </>;
};

const Part = (props) => {
    console.log(props);
    return <p>
        {props.part.name} {props.part.exercises}
    </p>
};

const Total = (props) => {
    return <p>Number of exercises {props.part1 + props.part2 + props.part3}</p>;
};


const App = () => {
  const course = 'Half Stack application development';
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  };
  const part2 = {
      name: 'Using props to pass data',
      exercises: 7
  };
  const part3 = {
      name: 'State of a component',
      exercises: 14
  };
  return (
    <div>
        <Header course={course}/>
        <Content part1={part1}
                 part2={part2}
                 part3={part3}/>
        <Total part1={part1.exercises} part2={part2.exercises} part3={part3.exercises}/>
    </div>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));