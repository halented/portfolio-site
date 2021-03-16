// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
import 'mutationobserver-shim';


// All tests are intended to be integrations tests


// IMPORTANT NOTE: inside node_modules/react-tooltip/dist/index.js line 1189, there is an error handler that inserts a style node into the DOM tree IF the style node does not already exist. This insertion causes any tests that come across the ToolTip component to fail with the following error: 

// Error: Uncaught [HierarchyRequestError: Invalid insertion of STYLE node in #document node.]

// commenting out this error handler temporarily resolves the problem and allows the tests to run. pending a better fix. 