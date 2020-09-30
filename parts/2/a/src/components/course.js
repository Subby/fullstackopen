import React from "react";

const Header = (props) => {
    return <h1>{props.course}</h1>;
};

const Content = ({parts}) => {
    return parts.map((part => {
        return <Part part={part}/>
    }));
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

export const Course = (props) => {
    return props.courses.map((course => {
        return (<div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>);
    }));
};