import { AgGridReact, type AgGridReactProps } from "ag-grid-react";
import { AllCommunityModule, ModuleRegistry, themeMaterial } from "ag-grid-community";

// AG Grid v33+ is modular — register the community features once.
ModuleRegistry.registerModules([AllCommunityModule]);

/**
 * Helix AG Grid theme — reproduces @cdx/theme-ag-grid (Material base + Helix
 * params: accent purple, neutral header, Source Sans, 2px corners, primary-tinted
 * row hover/selection) via AG Grid's Theming API.
 */
export const helixGridTheme = themeMaterial.withParams({
  accentColor: "#5E33BF", // --ag-material-accent-color
  fontFamily: '"Source Sans 3", sans-serif',
  headerBackgroundColor: "#FAFAFA", // --ag-header-background-color
  headerTextColor: "#212121", // --ag-header-foreground-color
  foregroundColor: "#2A2B2D",
  borderColor: "#DFE1E2",
  rowHoverColor: "rgba(42, 43, 45, 0.05)", // --ag-row-hover-color
  selectedRowBackgroundColor: "rgba(42, 43, 45, 0.1)", // --ag-selected-row-background-color
  headerFontWeight: 600,
  wrapperBorderRadius: 2,
  borderRadius: 2,
});

export interface HelixDataGridProps<T> extends AgGridReactProps<T> {
  /** Container height in px (AG Grid needs an explicit height). Default 400. */
  height?: number;
}

/**
 * Helix Data grid — AG Grid (ag-grid-react) with the Helix theme, for complex,
 * data-dense grids (sorting, filtering, resizing, pagination, selection).
 * For simple static tables, use HelixTable instead.
 */
export function HelixDataGrid<T>({ height = 400, defaultColDef, ...rest }: HelixDataGridProps<T>) {
  return (
    <div style={{ height, width: "100%" }}>
      <AgGridReact<T>
        theme={helixGridTheme}
        defaultColDef={{ sortable: true, filter: true, resizable: true, flex: 1, ...defaultColDef }}
        {...rest}
      />
    </div>
  );
}
