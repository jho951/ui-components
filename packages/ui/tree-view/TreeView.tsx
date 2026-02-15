import { useMemo, useRef, useState } from "react";
import type { KeyboardEvent } from "react";

import type { TreeNodeItem, TreeViewProps } from "./TreeView.types.ts";
import styles from "./TreeView.module.css";

const TreeNode = ({
  node,
  expanded,
  toggle,
  onSelect,
  depth,
}: {
  node: TreeNodeItem;
  expanded: Set<string>;
  toggle: (id: string) => void;
  onSelect?: (id: string) => void;
  depth: number;
}) => {
  const hasChildren = Boolean(node.children?.length);
  const isOpen = expanded.has(node.id);

  return (
    <li role="none">
      <div className={styles.row}>
        {hasChildren && (
          <button type="button" className={styles.toggle} onClick={() => toggle(node.id)}>
            {isOpen ? "▾" : "▸"}
          </button>
        )}
        <button
          type="button"
          className={styles.label}
          role="treeitem"
          data-tree-id={node.id}
          aria-level={depth}
          aria-expanded={hasChildren ? isOpen : undefined}
          onClick={() => onSelect?.(node.id)}
        >
          {node.label}
        </button>
      </div>
      {hasChildren && isOpen && (
        <ul className={styles.children} role="group">
          {node.children?.map((child) => (
            <TreeNode key={child.id} node={child} expanded={expanded} toggle={toggle} onSelect={onSelect} depth={depth + 1} />
          ))}
        </ul>
      )}
    </li>
  );
};

const TreeView = ({ data, defaultExpandedIds = [], onSelect }: TreeViewProps) => {
  const [expanded, setExpanded] = useState(new Set(defaultExpandedIds));
  const rootRef = useRef<HTMLUListElement>(null);

  const toggle = (id: string) => {
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const nodeMap = useMemo(() => {
    const map = new Map<string, { hasChildren: boolean; isOpen: boolean }>();
    const walk = (nodes: TreeNodeItem[]) => {
      nodes.forEach((node) => {
        const hasChildren = Boolean(node.children?.length);
        map.set(node.id, { hasChildren, isOpen: expanded.has(node.id) });
        if (node.children?.length) walk(node.children);
      });
    };
    walk(data);
    return map;
  }, [data, expanded]);

  const handleKeyDown = (event: KeyboardEvent<HTMLUListElement>) => {
    const target = event.target as HTMLElement;
    const currentId = target.getAttribute("data-tree-id");
    if (!currentId || !rootRef.current) return;

    const items = Array.from(rootRef.current.querySelectorAll<HTMLButtonElement>('button[data-tree-id]'));
    const currentIndex = items.findIndex((item) => item.getAttribute("data-tree-id") === currentId);
    if (currentIndex < 0) return;

    const currentNode = nodeMap.get(currentId);
    const focusIndex = (index: number) => items[Math.max(0, Math.min(items.length - 1, index))]?.focus();

    if (event.key === "ArrowDown") {
      event.preventDefault();
      focusIndex(currentIndex + 1);
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      focusIndex(currentIndex - 1);
    }
    if (event.key === "Home") {
      event.preventDefault();
      focusIndex(0);
    }
    if (event.key === "End") {
      event.preventDefault();
      focusIndex(items.length - 1);
    }
    if (event.key === "ArrowRight" && currentNode?.hasChildren && !currentNode.isOpen) {
      event.preventDefault();
      toggle(currentId);
    }
    if (event.key === "ArrowLeft" && currentNode?.hasChildren && currentNode.isOpen) {
      event.preventDefault();
      toggle(currentId);
    }
  };

  return (
    <ul className={styles.list} role="tree" ref={rootRef} onKeyDown={handleKeyDown}>
      {data.map((node) => (
        <TreeNode key={node.id} node={node} expanded={expanded} toggle={toggle} onSelect={onSelect} depth={1} />
      ))}
    </ul>
  );
};

export { TreeView };
