// css order is important
import '../styles/global.css';
import '../styles/app.css';

import {
  bindRouter,
  PageRouter,
  bindTheme,
  bindLang,
  setDefaultPageTitle,
  isFrontEnd,
  debugWatch,
  webEnv,
  bindGlobalStyle,
} from 'lupine.components';
import { themes } from '../styles/theme';
import { baseCss } from '../styles/base-css';
import { AppResponsiveFrame } from '../frames/app-responsive-frame';
import { HomePage } from '../pages/home-page';
import { FinancePage } from '../pages/finance-page';
import { AboutPage } from '../pages/about-page';
import { MinePage } from '../pages/mine-page';
import { ToolsPage } from '../pages/tools-page';

if (isFrontEnd() && webEnv('NODE_ENV', '') === 'development') {
  debugWatch(webEnv('API_PORT', 0));
}

bindLang('zh-cn', {});
bindTheme('light', themes);
bindGlobalStyle('comm-css', baseCss, false, true);
setDefaultPageTitle('Lupine Template Responsive Starter');

const pageRouter = new PageRouter();
pageRouter.setFramePage({ component: AppResponsiveFrame, placeholderClassname: 'user-page-placeholder' });
pageRouter.setSubDir('/lupine-template-responsive-starter');
pageRouter.use('/finance', FinancePage);
pageRouter.use('/about', AboutPage);
pageRouter.use('/mine', MinePage);
pageRouter.use('/tools', ToolsPage);
pageRouter.use('*', HomePage);

bindRouter(pageRouter);
