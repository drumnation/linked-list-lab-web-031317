// LINKED LIST

const getName = node => node.name

const next = (node, collection) => collection[node.next]

const headNode = (linkedList, collection) => collection[linkedList]

const nodeAt = (index, linkedList, collection) => {
    let currentNode = headNode(linkedList, collection)
    for (let i = 0; i < index; i++) {
        currentNode = next(currentNode, collection)
    }
    return currentNode
}

const addressAt = (index, linkedList, collection) => {
    return index === 0 
        ?   linkedList 
        :   nodeAt(index - 1, linkedList, collection).next
}

const indexAt = (node, collection, linkedList) => {
    let currentNode = headNode(linkedList, collection)
    let currentIdx = 0
    while (currentNode !== node) {
        currentIdx++
        currentNode = next(currentNode, collection)
    }
    return currentIdx
}

const insertNodeAt = (index, newNodeAddress, linkedList, collection) => {
    let previousNode = nodeAt(index - 1, linkedList, collection)
    let subsequentNode = nodeAt(index, linkedList, collection)

    let previousNodeIdx = indexAt(previousNode, collection, linkedList)
    let subsequentNodeIdx = indexAt(subsequentNode, collection, linkedList)
    let previousNodeAddress = addressAt(previousNode, linkedList, collection)
    let subsequentNodeAddress = addressAt(subsequentNode, linkedList, collection)
    previousNode.next = newNodeAddress
    let newNode = collection[newNodeAddress]
    newNode.next = subsequentNodeAddress
}

const deleteNodeAt = (index, linkedList, collection) => {
    let previousNode
    let currentNode = headNode(linkedList, collection)
    for (let i = 0; i < index; i++) {
        previousNode = currentNode
        currentNode = next(currentNode, collection)
    }
    previousNode.next = currentNode.next
}