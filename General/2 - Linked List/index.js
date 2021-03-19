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

        let lastNode = this.headNode;
        while (lastNode.next != null)
            lastNode = lastNode.next;

        lastNode.next = newNode;
    }

    deleteFirst() {
        if (!this.headNode)
            return null;

        let retValue = this.headNode.data;
        this.headNode = this.headNode.next;

        return retValue;
    }

    deleteLast() {
        if (!this.headNode)
            return null;
        if (!this.headNode.next) {
            let retValue = this.headNode.data;
            this.headNode = null;
            return retValue;
        }

        let previousNode = this.headNode;
        let lastNode = this.headNode.next;
        
        while (lastNode.next != null) {
            previousNode = lastNode;
            lastNode = lastNode.next;
        }

        previousNode.next = null;
        return lastNode.data;
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