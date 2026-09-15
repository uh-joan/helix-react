import { RichTreeView } from "@mui/x-tree-view/RichTreeView";

export interface HelixTreeNode {
  id: string;
  label: string;
  children?: HelixTreeNode[];
}

export interface HelixTreeProps {
  items: HelixTreeNode[];
  defaultExpandedItems?: string[];
  onSelect?: (itemId: string | null) => void;
  multiSelect?: boolean;
}

/**
 * Helix Tree — themed @mui/x-tree-view RichTreeView. Pass a nested `items`
 * array ({ id, label, children }).
 */
export function HelixTree({ items, defaultExpandedItems, onSelect, multiSelect }: HelixTreeProps) {
  return (
    <RichTreeView
      items={items}
      defaultExpandedItems={defaultExpandedItems}
      multiSelect={multiSelect}
      onSelectedItemsChange={
        onSelect ? (_e, id) => onSelect(Array.isArray(id) ? (id[0] ?? null) : id) : undefined
      }
    />
  );
}
