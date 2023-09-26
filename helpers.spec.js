const {
  flattenArr,
  dataFetcher,
  sortList,
  formatCurrency,
  handlePromises
} = require('./helpers.js');
const axios = require('axios')

jest.mock('axios')

//test that flattenArr function flattens nested array
describe('flattenArr', () => {
  it('flattens a nested array', () => {
    // create input 
    const input = [1, [2, [3]], 4, 5]
    
    //what is expected output
    expect(flattenArr(input)).toEqual([1, 2, 3, 4, 5])
    expect(flattenArr(input)).toHaveLength(5)
  })
  it('flattens a non-nested array', () => { 
    const input = [1,2,3]
    expect(flattenArr(input)).toEqual([1,2,3])
  })
})

describe.only('datafetcher', () => {
  it('handles successful response', async () => {
    //call mock axios and resolve promise (returns an obj with data)
    axios.get.mockImplementation(() => Promise.resolve({ data: { users: [] } }))
      
    const data = await dataFetcher()
    
    //what output do you expect? we expect data to equal data obj returned from promise
    expect(data).toEqual({data:{users: []}})
  })
  it('handles error response', async () => {
    axios.get.mockImplementation(() => Promise.reject('aht aht, not quite'))
    await expect(dataFetcher()).rejects
      .toThrow((new Error({ error: 'Boom', message: 'An Error Occurred' })))
      

  })
})
































// const axios = require('axios');

// jest.mock('axios');

// describe('flattenArr', () => {
//   it('return a non-nested arr', () => {
//     const input = [1, 2, 3, 4];
//     const expectedOutput = [1, 2, 3, 4];

//     expect(flattenArr(input)).toEqual(expectedOutput);
//   });

//   it('flattens a nested arr', () => {
//     const input = [1, 2, 3, [4, 5, [6, 7, [8, [9, [10]]]]]];
//     const expectedOutput = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//     expect(flattenArr(input)).toEqual(expectedOutput);
//   });
// });

// describe('dataFetcher', () => {
//   it('handles a successful response', async () => {
//     axios.get.mockImplementation(() => Promise.resolve({ data: { users: [] } }));

//     const data = await dataFetcher();

//     expect(data).toEqual({ data: { users: [] } });
//   });

//   it('handles an error response', async () => {
//     axios.get.mockImplementation(() => Promise.reject('Boom'));

//     try {
//       await dataFetcher();
//     } catch (e) {
//       expect(e).toEqual(new Error({ error: 'Boom', message: 'An Error Occurred' }));
//     }
//   });
// });

// describe('sortList', () => {
//   it('calls a sorter function if it is available', () => {
//     const sortFn = jest.fn();

//     sortList([3, 2, 1], sortFn);

//     expect(sortFn).toBeCalled();
//     expect(sortFn).toBeCalledTimes(1);
//     expect(sortFn.mock.calls).toEqual([[[3, 2, 1]]]);
//   });

//   it('does not call a sorter function if the array has a length <= 1', () => {
//     const sortFn = jest.fn();

//     sortList([1], sortFn);

//     expect(sortFn).not.toBeCalled();
//     expect(sortFn).toBeCalledTimes(0);
//   });
// });

// /**
//  * Add you test/s here and get this helper file to 100% test coverage!!!
//  * You can check that your coverage meets 100% by running `npm run test:coverage`
//  */

// describe('formatCurrency', () => {
//   it('does <insert your test here>', () => {
//     return true;
//   });
// });

// describe('handlePromises', () => {
//   it('does <insert your test here>', () => {
//     return true;
//   });
// });
