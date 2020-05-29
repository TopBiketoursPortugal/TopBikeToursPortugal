import controlComponent from "./ColorPickerControl";
import previewComponent from "./ColorPickerPreview";

const Widget = (opts = {}) => ({
  name: "color",
  controlComponent,
  previewComponent,
  ...opts
});

export const NetlifyCmsWidgetColorPicker = {
  Widget,
  controlComponent,
  previewComponent
};

export default NetlifyCmsWidgetColorPicker;
