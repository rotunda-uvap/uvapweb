import CMS from 'netlify-cms-app';
import NewsPagePreview from './preview-templates/NewsPagePreview'

//CMS.registerPreviewStyle("../utils/global.css");
// import "../utils/global.css"
//import BasicPagePreview from './preview-templates/BasicPagePreview'

CMS.registerPreviewTemplate('news', NewsPagePreview)
//CMS.registerPreviewTemplate('Pages', BasicPagePreview) */