import { ReactNode } from "react";

export interface IconProps extends React.ComponentPropsWithRef<"svg"> {}

export type IconComponent = (props: IconProps) => ReactNode;