const linkedList = require('./index');
var list;

beforeEach(() => {
    list = new linkedList();
    list.insertAtBeginning(2);
    list.insertAtEnd(1);
    list.insertAtBeginning(3);
})

test('showList', async function () {
    expect(list.showList()).toEqual([3, 2, 1]);
})

test('deleteLast', async function () {
    expect(list.deleteLast()).toEqual(1);
})

test('insertAtEnd', async function () {
    list.insertAtEnd(5);
    expect(list.showList()).toEqual([3, 2, 1, 5]);
})

test('showAt', async function () {
    expect(list.showAt(1)).toEqual(2);
})