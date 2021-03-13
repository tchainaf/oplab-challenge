class Node {
    constructor(value, node = null) {
        this.data = value;
        this.next = node;
    }
}

class LinkedList {
    constructor() {
        this.headNode = null;
    }

    insertAtBeginning(value) {
        if (this.headNode == null)
            this.headNode = new Node(value);
        else
            this.headNode = new Node(value, this.headNode);
    }

    insertAtEnd(value) {
        let newNode = new Node(value);

        if (this.headNode == null) {
            this.headNode = newNode;
            return;
        }

        let nextNode = this.headNode;
        while (nextNode.next != null)
            nextNode = nextNode.next;

        nextNode.next = newNode;
    }

    deleteFirst() {
        if (!this.headNode)
            return null;

        let retValue = this.headNode.data;
        this.headNode = this.headNode.next;

        return retValue;
    }

    deleteLast() {
        let retValue = null;

        if (!this.headNode)
            return retValue;
        if (!this.headNode.next) {
            retValue = this.headNode.data;
            this.headNode = null;
            return retValue;
        }

        let previousNode = this.headNode;
        let nextNode = this.headNode.next;
        while (nextNode.next != null) {
            previousNode = nextNode;
            nextNode = nextNode.next;
        }

        previousNode.next = null;
        retValue = nextNode.data;

        return retValue;
    }

    showList() {
        let nextNode = this.headNode;
        var retArray = [];

        while (nextNode != null) {
            retArray.push(nextNode.data);
            nextNode = nextNode.next;
        }

        return retArray;
    }

    showAt(index) {
        let nextNode = this.headNode;
        let count = 0;

        while (nextNode != null) {
            if (count == index)
                return nextNode.data;

            nextNode = nextNode.next;
            count++;
        }
        return null;
    }
}

module.exports = LinkedList;