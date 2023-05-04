import React from 'react';

const Blog = () => {
    return (
      <div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-amber-500 text-primary-content peer-checked:bg-amber-200 peer-checked:text-amber-700">
            Tell us the differences between uncontrolled and controlled
            components?{" "}
          </div>
          <div className="collapse-content bg-amber-500 text-primary-content peer-checked:bg-amber-200 peer-checked:text-secondary-content">
            <p>
              In React, controlled components refer to components that have
              their state and behavior controlled by the parent component. These
              components rely on props passed down from the parent component to
              update their state and behavior. Uncontrolled components refer to
              components that manage their own state internally.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-amber-500 text-primary-content peer-checked:bg-amber-200 peer-checked:text-secondary-content">
            How to validate React props using PropTypes?{" "}
          </div>
          <div className="collapse-content bg-amber-500 text-primary-content peer-checked:bg-amber-200 peer-checked:text-secondary-content">
            <p>
              React PropTypes validators <br /> PropTypes.any : The prop can be
              of any data type. <br />
              PropTypes.bool : The prop should be a Boolean. <br />
              PropTypes.number : The prop should be a number. <br />{" "}
              PropTypes.string : The prop should be a string. <br />{" "}
              PropTypes.func : The prop should be a function. <br />{" "}
              PropTypes.array : The prop should be an array.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-amber-500 text-primary-content peer-checked:bg-amber-200 peer-checked:text-secondary-content">
            Tell us the difference between nodejs and express js?
          </div>
          <div className="collapse-content bg-amber-500 text-primary-content peer-checked:bg-amber-200 peer-checked:text-secondary-content">
            <p>
              NodeJS is an event-driven, non-blocking I/O model using JavaScript
              as its main language. It helps to build scalable network
              applications. Express is a minimal and flexible Node. js web
              application framework that provides a robust set of features for
              web and mobile applications.
            </p>
          </div>
        </div>
        <div className="collapse">
          <input type="checkbox" className="peer" />
          <div className="collapse-title bg-amber-500 text-primary-content peer-checked:bg-amber-200 peer-checked:text-secondary-content">
            What is a custom hook, and why will you create a custom hook?
          </div>
          <div className="collapse-content bg-amber-500 text-primary-content peer-checked:bg-amber-200 peer-checked:text-secondary-content">
            <p>
              Custom Hooks are a mechanism to reuse stateful logic (such as
              setting up a subscription and remembering the current value), but
              every time you use a custom Hook, all state and effects inside of
              it are fully isolated. How does a custom Hook get isolated state?
              Each call to a Hook gets isolated state.
            </p>
          </div>
        </div>
      </div>
    );
};

export default Blog;