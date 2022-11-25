import { siteConfig } from './lib/site-config'

export default siteConfig({
  // the site's root Notion page (required)
  // rootNotionPageId: '7875426197cf461698809def95960ebf',
  rootNotionPageId: 'a4c1f40cf45841f8bb8e006dc6939009',

  // if you want to restrict pages to a single notion workspace (optional)
  // (this should be a Notion ID; see the docs for how to extract this)
  rootNotionSpaceId: null,

  // basic site info (required)
  name: 'Jinho Blog',
  domain: 'nextjs-notion-starter-kit.transitivebullsh.it',
  // domain: 'jinho.breez.fm',
  author: 'Yoon Jinho (a.k.a breezjin or Mike)',

  // open graph metadata (optional)
  description: 'Jinho 개인 블로그 입니다.',

  // social usernames (optional)
  twitter: 'dreamer05',
  github: 'breezjin',
  linkedin: 'yoonjinho',
  instagram: 'breezjin',
  // mastodon: '#', // optional mastodon profile URL, provides link verification
  // newsletter: '#', // optional newsletter URL
  // youtube: '#', // optional youtube channel name or `channel/UCGbXXXXXXXXXXXXXXXXXXXXXX`

  // default notion icon and cover images for site-wide consistency (optional)
  // page-specific values will override these site-wide defaults
  defaultPageIcon: null,
  defaultPageCover: null,
  defaultPageCoverPosition: 0.5,

  // whether or not to enable support for LQIP preview images (optional)
  isPreviewImageSupportEnabled: true,

  // To enable Disqsus Comments, include your Disqus Shortname here
  disqusShortname: 'breezjin',

  // whether or not redis is enabled for caching generated preview images (optional)
  // NOTE: if you enable redis, you need to set the `REDIS_HOST` and `REDIS_PASSWORD`
  // environment variables. see the readme for more info
  isRedisEnabled: false,

  // map of notion page IDs to URL paths (optional)
  // any pages defined here will override their default URL paths
  // example:
  //
  // pageUrlOverrides: {
  //   '/foo': '067dd719a912471ea9a3ac10710e7fdf',
  //   '/bar': '0be6efce9daf42688f65c76b89f8eb27'
  // }
  pageUrlOverrides: null,

  // whether to use the default notion navigation style or a custom one with links to
  // important pages
  // navigationStyle: 'default'
  navigationStyle: 'custom',
  navigationLinks: [
    {
      title: 'About',
      pageId: '528d04235d98407b980817ac18f7a35a'
    },
    {
      title: 'Contact',
      pageId: '213b740cf7b64298bc71aaa317ffe511'
    }
  ]
})
