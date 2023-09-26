Test File Name Syntax- Usually named w/ file that has the functions you're testing
then adding .spec or .test 
Example- helper.spec.js or helper.test.js

Give function an input and test for the expected output
What do we expect the funtion to do? => confirm that output is met 


3 parts of a Unit test 

describe =  what you're testing (func or component)
it = what does it do?
expect = what is the expected output with a specificied input?

*Note- don't only test successful responses test error responses too!*

Starting out the test
Describe/it block is the syntax for Jest tests, it usually has the name of func or component
with a callback function that has the "it" block which holds what you're testing.
Be descriptive the it block serves as documentation and allows others to easily see what you're testing for!



Describe('funcName', ()=>{
 it('has expected output',()=>{
  const input = [1,2,3]

  expect(funcName(input)).toEqual(output) you expect your func or component to give you give you an output w/ an expected input
  expect(funcName(input)).toHaveLength(10) this should be a number since you're looking for length
 })
})

expect
there are a bunch of methods you can use with jest- toBeCalled, toEqual, toHaveLength etc.


# Testing 3rd party functions and async functions

When testing async functions we don't actually want to call the API(the calls can be expensive) and we want consistency in our responses. 
To do this we use "mock" this replaces axios with a fake version that behaves like the real version

# What are Mock Implementations?
Mocking is a technique in unit testing in which the external dependencies of the code being tested are replaced by dummy implementations so that the code to be tested can be controlled and test runs can be more quick and reliable.

Require axios 
  const axios = require('axios')
then mock it with jest 
  jest.mock('axios')

  ## Starting out the test

use describe block *do not write the async keyword in the describe block, it will fail the test* returning a promise from a describe isn't supported.
in the it block you have to use the async keyword  
