import { getPluginData } from "./plugin-data";

/**
 * Main plugin file responsible for Figma document manipulation.
 * This file has full access to the Figma API.
 */

/**
 * Show UI on plugin launch
 */
figma.showUI(__html__);

/**
 * If plugin is launched and no editable node is selected, all editing UI should be disabled
 * If node is editable, fields should be enabled. If there is a current selection then the
 *    the UI should be set to that by default
 */

figma.on("selectionchange", () => {
    const { selection }: typeof figma.currentPage = figma.currentPage;

    if (selection.length !== 1) {
        // we have multiple items or no items selected so we need to disable the ui and clear any values set
    } else {
        // We have on item selected so do shit with the UI
        console.log(getPluginData(figma.currentPage.selection[0], "fillName"));
    }
});
