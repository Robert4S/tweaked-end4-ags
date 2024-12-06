import Widget from 'resource:///com/github/Aylur/ags/widget.js';
import { SearchAndWindows } from "./windowcontent.js";
import PopupWindow from '../.widgethacks/popupwindow.js';
import { clickCloseRegion } from '../.commonwidgets/clickcloseregion.js';

export default (id = '') => PopupWindow({
    name: `workspaces${id}`,
    // exclusivity: 'ignore',
    keymode: 'on-demand',
    visible: false,
    anchor: ['top', 'bottom', 'left', 'right'],
    layer: 'top',
    child: Widget.Box({
        vertical: true,
        children: [
            clickCloseRegion({ name: 'overview', multimonitor: false, expand: false }),
            Widget.Box({
                children: [
                    clickCloseRegion({ name: 'overview', multimonitor: false }),
                    // This is where the overview windows are set for the windows window, the overview one has these arguments filpped
                    SearchAndWindows(true, false),
                    clickCloseRegion({ name: 'overview', multimonitor: false }),
                ]
            }),
            clickCloseRegion({ name: 'overview', multimonitor: false }),
        ]
    }),
})

