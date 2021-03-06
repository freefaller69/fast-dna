import React from "react";
import { FoundationProps } from "@microsoft/fast-components-foundation-react";
import manageJss, { ManagedJSSProps } from "@microsoft/fast-jss-manager-react";
import BorderRadius from "./border-radius";
import CSSBorderRadiusStyles, {
    CSSBorderRadiusClassNameContract,
} from "./border-radius.style";

/*
 * The type returned by manageJss type is very complicated so we'll let the
 * compiler infer the type instead of re-declaring just for the package export
 */
/* tslint:disable-next-line:typedef */
const CSSBorderRadius = manageJss(CSSBorderRadiusStyles)(BorderRadius);
type CSSBorderRadius = InstanceType<typeof CSSBorderRadius>;

export { CSSBorderRadius };
export * from "./border-radius.props";
