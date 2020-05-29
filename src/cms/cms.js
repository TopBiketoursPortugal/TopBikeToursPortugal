import CMS from "netlify-cms";

import AboutPagePreview from "./preview-templates/AboutPagePreview";
import BannerPreview from "./preview-templates/BannerPreview";
// import TourGenPreview from "./preview-templates/TourGenPreview";
// import TourPagePreview from "./preview-templates/TourPagePreview";
import BlogPostPreview from "./preview-templates/BlogPostPreview";
import ProductPagePreview from "./preview-templates/ProductPagePreview";
// import NetlifyCmsWidgetUUID from "./widgets/netlifly-cms-widget-uuid";
// import NetlifyCmsWidgetColorPicker from "./widgets/netlifly-cms-widget-color-picker";

CMS.registerPreviewTemplate("about", AboutPagePreview);
CMS.registerPreviewTemplate("banner", BannerPreview);
CMS.registerPreviewTemplate("products", ProductPagePreview);
CMS.registerPreviewTemplate("blog", BlogPostPreview);
// CMS.registerPreviewTemplate("blog", TourPagePreview);
// CMS.registerPreviewTemplate("blog", TourGenPreview);

// CMS.registerWidget(
//   "uuid",
//   NetlifyCmsWidgetUUID
// );
// CMS.registerWidget(
//   "color",
//   NetlifyCmsWidgetColorPicker.controlComponent,
//   NetlifyCmsWidgetColorPicker.previewComponent
// );
