
Search
Write

Jagadishmn
This member-only story is on us. Upgrade to access all of Medium.


Member-only story

React — more interview questions…
How would you handle a controlled component in a React form that should only update the input value when the “Enter” key is pressed?
Sonika | @Walmart | Frontend Developer | 11 Years
Sonika | @Walmart | Frontend Developer | 11 Years

·
Follow

4 min read
·
Sep 8, 2024
2






import React, { useState } from 'react';

function ControlledInput() {
  const [value, setValue] = useState('');
  const [submittedValue, setSubmittedValue] = useState('');

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSubmittedValue(value);
    }
  };

  return (
    <div>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <p>Submitted Value: {submittedValue}</p>
    </div>
  );
}
How would you prevent unnecessary re-renders in deeply nested child components, where props might not always change?
What to look for: Understanding of React.memo, useMemo, and useCallback to avoid unnecessary re-renders.

import React, { useState, useCallback, memo } from 'react';

const ChildComponent = memo(({ onClick }) => {
  console.log('Child re-rendered');
  return <button onClick={onClick}>Click Me</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(false);

  const handleClick = useCallback(() => {
    setCount((prevCount) => prevCount + 1);
  }, []); // Function won't change unless needed

  return (
    <div>
      <p>Count: {count}</p>
      <ChildComponent onClick={handleClick} />
      <button onClick={() => setOtherState(!otherState)}>Toggle Other State</button>
    </div>
  );
}
How would you implement a custom hook for form validation that handles nested form fields and only validates when required?
What to look for: Usage of hooks like useState, useRef, and useEffect to create a reusable custom hook for forms.

import { useState, useCallback, useEffect } from 'react';

function useFormValidation(initialState, validate) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleBlur = useCallback(() => {
    setErrors(validate(values));
  }, [validate, values]);

  useEffect(() => {
    if (isSubmitting && Object.keys(errors).length === 0) {
      // Submit form logic here
      setIsSubmitting(false);
    }
  }, [errors, isSubmitting]);

  return {
    values,
    errors,
    handleChange,
    handleBlur,
    isSubmitting,
    setIsSubmitting,
  };
}

function FormComponent() {
  const initialState = { email: '', password: '' };

  const validate = (values) => {
    let errors = {};
    if (!values.email) {
      errors.email = 'Email required';
    }
    if (!values.password) {
      errors.password = 'Password required';
    }
    return errors;
  };

  const { values, errors, handleChange, handleBlur, setIsSubmitting } = useFormValidation(
    initialState,
    validate
  );

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setIsSubmitting(true);
      }}
    >
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.email && <p>{errors.email}</p>}

      <input
        type="password"
        name="password"
        value={values.password}
        onChange={handleChange}
        onBlur={handleBlur}
      />
      {errors.password && <p>{errors.password}</p>}

      <button type="submit">Submit</button>
    </form>
  );
}
How would you handle dynamic imports and code splitting for routes in a React app using React.lazy and Suspense?
What to look for: Knowledge of code-splitting, dynamic imports, and fallback UI using React.Suspense.

import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const HomePage = lazy(() => import('./HomePage'));
const AboutPage = lazy(() => import('./AboutPage'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
        </Switch>
      </Suspense>
    </Router>
  );
}

export default App;
How would you manage a stateful component that handles multiple modals, ensuring only one modal is open at a time, and state persists across modals?
What to look for: Proper state management using useState or useReducer with conditional rendering of modals.

import React, { useState } from 'react';

function ModalManager() {
  const [activeModal, setActiveModal] = useState(null);

  const openModal = (modalName) => setActiveModal(modalName);
  const closeModal = () => setActiveModal(null);

  return (
    <div>
      <button onClick={() => openModal('modal1')}>Open Modal 1</button>
      <button onClick={() => openModal('modal2')}>Open Modal 2</button>

      {activeModal === 'modal1' && (
        <div className="modal">
          <p>Modal 1 Content</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
      {activeModal === 'modal2' && (
        <div className="modal">
          <p>Modal 2 Content</p>
          <button onClick={closeModal}>Close</button>
        </div>
      )}
    </div>
  );
}

export default ModalManager;
How would you implement a React component that fetches data on scroll, implements infinite scrolling, and optimizes re-renders using useRef and useCallback?

import React, { useState, useEffect, useRef, useCallback } from 'react';

function InfiniteScrollComponent() {
  const [items, setItems] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef();
  const pageRef = useRef(1); // Keeps track of the current page
  
  const loadMoreItems = useCallback(async () => {
    const response = await fetch(`https://api.example.com/items?page=${pageRef.current}`);
    const newItems = await response.json();

    setItems((prevItems) => [...prevItems, ...newItems]);
    if (newItems.length === 0) setHasMore(false);
  }, []);

  useEffect(() => {
    loadMoreItems();
  }, [loadMoreItems]);

  const lastItemRef = useCallback((node) => {
    if (observerRef.current) observerRef.current.disconnect();
    observerRef.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting && hasMore) {
        pageRef.current += 1;
        loadMoreItems();
      }
    });
    if (node) observerRef.current.observe(node);
  }, [hasMore, loadMoreItems]);

  return (
    <div>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item.name}</li>
        ))}
        {hasMore && <li ref={lastItemRef}>Loading more...</li>}
      </ul>
    </div>
  );
}
Thanks for reading
👏 Please clap for the story and follow me 👉
📰 View more content on Coding and System Design Interviews
🔔 Follow me: LinkedIn!
I know there would always be something to improve. Please feel free to share your thoughts

React
JavaScript
Java
2





Sonika | @Walmart | Frontend Developer | 11 Years
Written by Sonika | @Walmart | Frontend Developer | 11 Years
1.3K Followers
·
18 Following
Working in Walmart as Senior Software Developer

Follow
No responses yet
Jagadishmn
Jagadishmn
﻿

Cancel
Respond
Respond

Also publish to my profile

More from Sonika | @Walmart | Frontend Developer | 11 Years
Explain Event Loop | Interview Questions
Level Up Coding
In

Level Up Coding

by

Sonika | @Walmart | Frontend Developer | 11 Years

Explain Event Loop | Interview Questions
Topic discussion:

Jan 27
66


All about Javascript Promises for Interviews
Level Up Coding
In

Level Up Coding

by

Sonika | @Walmart | Frontend Developer | 11 Years

All about Javascript Promises for Interviews
JavaScript | Promise Polyfills | Output Driven Questions | All About Promises

Jul 24, 2022
399
1


All About DSA | RoadMap | JavaScript
Level Up Coding
In

Level Up Coding

by

Sonika | @Walmart | Frontend Developer | 11 Years

All About DSA | RoadMap | JavaScript
My progress…

Feb 9
143


Basic of Recursion (Before start on Dynamic Pr)
Sonika | @Walmart | Frontend Developer | 11 Years
Sonika | @Walmart | Frontend Developer | 11 Years

Basic of Recursion (Before start on Dynamic Pr)
Write a recursive function sumOfDigits that takes a positive integer n and returns the sum of its digits.

Nov 21


See all from Sonika | @Walmart | Frontend Developer | 11 Years
Recommended from Medium
React 19: Unlocking the Next Era of UI Development
Stackademic
In

Stackademic

by

JavaScript With Vinay

React 19: Unlocking the Next Era of UI Development
Discover the Game-Changing Features for Developers

Nov 25
1


Google : Frontend Engineer Interview Experience
Be 10x Engineer
Be 10x Engineer

Google : Frontend Engineer Interview Experience
When I received an email from Google notifying me that my resume had been shortlisted for a Frontend Engineer role in Bangalore, I…

Nov 26
77


Lists


Stories to Help You Grow as a Software Developer
19 stories
·
1514 saves



General Coding Knowledge
20 stories
·
1803 saves



data science and AI
40 stories
·
297 saves



Medium's Huge List of Publications Accepting Submissions
377 stories
·
4094 saves
3 Intermediate-level ReactJS Questions
JavaScript in Plain English
In

JavaScript in Plain English

by

Vijayasekhar Deepak

3 Intermediate-level ReactJS Interview Questions
In my Interview process

Oct 10
81
1


Senior-Level JavaScript Promise Interview Questions: Mastering Asynchronous Code
DevNex Pro
DevNex Pro

Senior-Level JavaScript Promise Interview Questions: Mastering Asynchronous Code
JavaScript promises are fundamental for handling asynchronous operations and are often a focus area in senior-level interviews. If you’re…

Oct 3
51


My Interview Experience for Zepto SDE-2 Frontend Role
Chauhan Abhay
Chauhan Abhay

My Interview Experience for Zepto SDE-2 Frontend Role
Recently, I had the opportunity to interview for the SDE-2 Frontend role at Zepto. The process was engaging, challenging, and provided…

Nov 24
1


Is React The Forever Framework?
Techmade
Techmade

Is React The Forever Framework?
“Technically, it’s a library” [insert nerd meme]
