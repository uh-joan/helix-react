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
  /** Show selection checkboxes (Helix tree items have them by default). */
  checkboxSelection?: boolean;
}

/**
 * Helix Tree — themed @mui/x-tree-view RichTreeView. Pass a nested `items`
 * array ({ id, label, children }). Per Helix, items show selection checkboxes
 * by default; pass `checkboxSelection={false}` for a plain tree.
 */
export function HelixTree({
  items,
  defaultExpandedItems,
  onSelect,
  multiSelect,
  checkboxSelection = true,
}: HelixTreeProps) {
  return (
    <RichTreeView
      items={items}
      defaultExpandedItems={defaultExpandedItems}
      multiSelect={multiSelect}
      checkboxSelection={checkboxSelection}
      onSelectedItemsChange={
        onSelect ? (_e, id) => onSelect(Array.isArray(id) ? (id[0] ?? null) : id) : undefined
      }
    />
  );
}
