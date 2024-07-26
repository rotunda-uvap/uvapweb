import CMS from 'netlify-cms-app';
// Import Decap CMS
//import CMS from 'decap-cms';
import NewsPagePreview from './preview-templates/NewsPagePreview'

//CMS.registerPreviewStyle("../utils/global.css");
import "../utils/global.css"
//import BasicPagePreview from './preview-templates/BasicPagePreview'

CMS.registerPreviewTemplate('news', NewsPagePreview)
CMS.registerPreviewStyle('../utils/global.css'); /* relative path on repository */

//CMS.registerPreviewTemplate('Pages', BasicPagePreview) */