import controlComponent from "./UUIDControl";
import previewComponent from "./UUIDPreview";

const Widget = (opts = {}) => ({
  name: "uuid",
  controlComponent,
  previewComponent,
  ...opts
});

export const NetlifyCmsWidgetUUID = {
  Widget,
  controlComponent,
  previewComponent
};

export default NetlifyCmsWidgetUUID;
