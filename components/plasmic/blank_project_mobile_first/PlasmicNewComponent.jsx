// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ijfh7qs9puLSfcBJdPjrd2
// Component: JQpSmBBvAD
import * as React from "react";
import {
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts
} from "@plasmicapp/react-web";
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project_mobile_first.module.css"; // plasmic-import: ijfh7qs9puLSfcBJdPjrd2/projectcss
import sty from "./PlasmicNewComponent.module.css"; // plasmic-import: JQpSmBBvAD/css

export const PlasmicNewComponent__VariantProps = new Array("unnamedVariant");

export const PlasmicNewComponent__ArgProps = new Array();

function PlasmicNewComponent__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(projectcss.all, projectcss.root_reset, sty.root)}
    >
      <button
        data-plasmic-name={"button"}
        data-plasmic-override={overrides.button}
        className={classNames(
          projectcss.all,
          projectcss.button,
          projectcss.__wab_text,
          sty.button
        )}
      >
        {"Click Me"}
      </button>

      <svg
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(projectcss.all, sty.svg)}
        role={"img"}
      />
    </div>
  );
}

const PlasmicDescendants = {
  root: ["root", "button", "svg"],
  button: ["button"],
  svg: ["svg"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicNewComponent__ArgProps,
      internalVariantPropNames: PlasmicNewComponent__VariantProps
    });

    return PlasmicNewComponent__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewComponent";
  } else {
    func.displayName = `PlasmicNewComponent.${nodeName}`;
  }
  return func;
}

export const PlasmicNewComponent = Object.assign(
  // Top-level PlasmicNewComponent renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    button: makeNodeComponent("button"),
    svg: makeNodeComponent("svg"),
    // Metadata about props expected for PlasmicNewComponent
    internalVariantProps: PlasmicNewComponent__VariantProps,
    internalArgProps: PlasmicNewComponent__ArgProps
  }
);

export default PlasmicNewComponent;
/* prettier-ignore-end */
