// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: ijfh7qs9puLSfcBJdPjrd2
// Component: _SYjV7My3OV0
import * as React from "react";
import Head from "next/head";
import {
  hasVariant,
  classNames,
  createPlasmicElementProxy,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import { ParallaxProviderWrapper } from "@plasmicpkgs/react-scroll-parallax"; // plasmic-import: eTqmttN9cH/codeComponent
import { ParallaxWrapper } from "@plasmicpkgs/react-scroll-parallax"; // plasmic-import: rz9TX_76nz/codeComponent
import { useScreenVariants as useScreenVariantspeL3B9Pvk2QO } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: peL3b9PVK2qO/globalVariant
import "@plasmicapp/react-web/lib/plasmic.css";
import projectcss from "./plasmic_blank_project_mobile_first.module.css"; // plasmic-import: ijfh7qs9puLSfcBJdPjrd2/projectcss
import sty from "./PlasmicHomepage.module.css"; // plasmic-import: _SYjV7My3OV0/css

export const PlasmicHomepage__VariantProps = new Array();

export const PlasmicHomepage__ArgProps = new Array();

function PlasmicHomepage__RenderFunc(props) {
  const { variants, args, overrides, forNode } = props;
  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariantspeL3B9Pvk2QO()
  });

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            projectcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          {(
            hasVariant(globalVariants, "screen", "desktopOnly") ? true : true
          ) ? (
            <div
              className={classNames(
                projectcss.all,
                projectcss.__wab_text,
                sty.text__vyG7P
              )}
            >
              {"Welcome to your first page."}
            </div>
          ) : null}

          <ParallaxProviderWrapper
            data-plasmic-name={"parallaxProvider"}
            data-plasmic-override={overrides.parallaxProvider}
            className={classNames("__wab_instance", sty.parallaxProvider)}
          >
            <div
              data-plasmic-name={"freeBox"}
              data-plasmic-override={overrides.freeBox}
              className={classNames(projectcss.all, sty.freeBox)}
            >
              <div
                className={classNames(
                  projectcss.all,
                  projectcss.__wab_text,
                  sty.text___9DBgo
                )}
              >
                {
                  "Wrap any element in a Scroll Parallax component. Ensure they're all inside this Parallax Provider. Example:"
                }
              </div>

              <ParallaxWrapper
                data-plasmic-name={"scrollParallax"}
                data-plasmic-override={overrides.scrollParallax}
                className={classNames("__wab_instance", sty.scrollParallax)}
                speed={20}
              >
                {(
                  hasVariant(globalVariants, "screen", "desktopOnly")
                    ? true
                    : true
                ) ? (
                  <img
                    alt={""}
                    className={classNames(
                      projectcss.all,
                      projectcss.img,
                      sty.img___30FGb
                    )}
                    src={"https://placekitten.com/300/200"}
                  />
                ) : null}
              </ParallaxWrapper>
            </div>
          </ParallaxProviderWrapper>

          <svg
            className={classNames(projectcss.all, sty.svg__yIVhr)}
            role={"img"}
          />

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__p3JQw
            )}
          >
            {"Enter some text"}
          </div>

          {(
            hasVariant(globalVariants, "screen", "desktopOnly") ? true : true
          ) ? (
            <img
              alt={""}
              className={classNames(
                projectcss.all,
                projectcss.img,
                sty.img__fZlt6
              )}
              loading={"lazy"}
              src={"/plasmic/blank_project_mobile_first/images/_934714Jpg.jpeg"}
            />
          ) : null}

          <div
            className={classNames(
              projectcss.all,
              projectcss.__wab_text,
              sty.text__dlUAw
            )}
          >
            {"Enter some text"}
          </div>

          <svg
            className={classNames(projectcss.all, sty.svg__qXuPc)}
            role={"img"}
          />
        </div>
      </div>
    </React.Fragment>
  );
}

const PlasmicDescendants = {
  root: ["root", "parallaxProvider", "freeBox", "scrollParallax"],
  parallaxProvider: ["parallaxProvider", "freeBox", "scrollParallax"],
  freeBox: ["freeBox", "scrollParallax"],
  scrollParallax: ["scrollParallax"]
};

function makeNodeComponent(nodeName) {
  const func = function (props) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHomepage__ArgProps,
      internalVariantPropNames: PlasmicHomepage__VariantProps
    });

    return PlasmicHomepage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHomepage";
  } else {
    func.displayName = `PlasmicHomepage.${nodeName}`;
  }
  return func;
}

export const PlasmicHomepage = Object.assign(
  // Top-level PlasmicHomepage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    parallaxProvider: makeNodeComponent("parallaxProvider"),
    freeBox: makeNodeComponent("freeBox"),
    scrollParallax: makeNodeComponent("scrollParallax"),
    // Metadata about props expected for PlasmicHomepage
    internalVariantProps: PlasmicHomepage__VariantProps,
    internalArgProps: PlasmicHomepage__ArgProps
  }
);

export default PlasmicHomepage;
/* prettier-ignore-end */
