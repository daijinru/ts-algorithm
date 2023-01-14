class LNode {
  public value: number
  public next: LNode | null = null
  constructor(value: number) {
      this.value = value
  }
}

function newListNode(values: number[]): LNode {
  let lNode: LNode

  let head = new LNode(0)
  lNode = new LNode(values[0])
  head.next = lNode
  let i = 1
  while (i < values.length) {
      const newNode = new LNode(values[i])
      lNode.next = newNode
      lNode = newNode
      i++
  }
  return head
}

function search(lNode: LNode, k: number): number {
  // 先走 k 个节点
  let kNode: LNode | null = lNode

  while (k > 0) {
      kNode = (kNode as LNode).next
      k--
  }

  let stNode: LNode | null = lNode
  while ((kNode as LNode).next) {
      stNode = (stNode as LNode).next
      kNode = (kNode as LNode).next
  }

  return (stNode as LNode).value
}

console.info(search((newListNode([1, 2, 3]).next as LNode), 0))