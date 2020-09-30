import ReactDOM from 'react-dom'
import React from "react";
import * as PropTypes from "prop-types";

const Header = (props) => {
    return <h1>{props.course}</h1>;
};

const Content = (props) => {
    console.log(props);
    return <>
        <Part part={props.parts[0]}/>
        <Part part={props.parts[1]}/>
        <Part part={props.parts[2]}/>
    </>;
};

const Part = (props) => {
    return <p>
        {props.part.name} {props.part.exercises}
    </p>
};

const Total = ({parts}) => {
    const total = parts.reduce((total, current) => {
        return total+current.exercises
    }, 0);
    return <p>Number of exercises {total}</p>;
};

const Course = ({course}) => {
  return(
    <div>
      <Header course={course.name}/>
      <Content parts={course.parts}/>
      <Total parts={course.parts}/>
  </div>)
};


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
  };

  return (
    <Course course={course}/>
  )
};

ReactDOM.render(<App />, document.getElementById('root'));