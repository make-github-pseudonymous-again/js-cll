import assert from 'assert';
import Node from './Node';
import _remove from './_remove';

/**
 * Removes last {@link Node} from a list.
 *
 * @param {Node} x - First node .
 * @return {[Node, Node]} New list (possibly null) and popped node.
 */
export default function pop(x) {
	if (x === null) throw new Error('input list is empty');
	assert(x instanceof Node);
	const node = x.prev;
	_remove(node);
	return [x === node ? null : x, node];
}
