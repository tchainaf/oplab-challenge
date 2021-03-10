const bubbleSort = require('./index');

test('integerArray', async function() {
    expect(bubbleSort([3, 13, 6, 2, 7])).toEqual([2, 3, 6, 7, 13]);
})

test('letterArray', async function() {
    expect(bubbleSort(['t','h', 'a', 'i', 'n', 'a'])).toEqual(['a', 'a', 'h', 'i', 'n', 't']);
})