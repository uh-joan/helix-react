import { forwardRef } from "react";
import MuiSkeleton, { type SkeletonProps } from "@mui/material/Skeleton";

export type HelixSkeletonProps = SkeletonProps;

/**
 * Helix Skeleton loader — themed @mui/material Skeleton. Use `variant`
 * text/rectangular/rounded/circular and `animation` pulse/wave.
 */
export const HelixSkeleton = forwardRef<HTMLSpanElement, HelixSkeletonProps>(function HelixSkeleton(props, ref) {
  return <MuiSkeleton ref={ref} {...props} />;
});
