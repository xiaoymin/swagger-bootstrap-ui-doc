module.exports = {
    title: 'swagger-bootstrap-ui', // 页签标题 : A001_VuePress博客搭建的简单教程&问题分析 # | Wiki 1001
    description: 'swagger-bootstrap-ui 用户指南', // meta 中的描述文字，意义不大，SEO用
    // 注入到当前页面的 HTML <head> 中的标签
    head: [
        // 增加一个自定义的 favicon(网页标签的图标)
        // 这里的 '/' 指向 docs/.vuepress/public 文件目录
        // 即 docs/.vuepress/public/img/geass-bg.ico
        ['link', { rel: 'icon', href: '/img/sbu_favicon.ico' }],
        ['meta', { name:'keywords',content:'swagger-bootstrap-ui,swagger-bootstrap-ui 指南,swagger-bootstrap-ui 说明,swagger-bootstrap-ui 排序,swagger-bootstrap-ui 增强,swagger-bootstrap-ui 导出markdown' }]
    ],
    base: '', // 这是部署到github相关的配置
    locales: {
        // 键名是该语言所属的子路径
        // 作为特例，默认语言可以使用 '/' 作为其路径。
        '/': {
            lang: 'zh-CN',
            title: 'swagger-bootstrap-ui',
            description: 'swagger-bootstrap-ui 指南'
        },
        '/en/': {
            lang: 'en-US', // 将会被设置为 <html> 的 lang 属性
            title: 'swagger-bootstrap-ui',
            description: 'swagger-bootstrap-ui Guide'
        }

    },
    markdown: {
        lineNumbers: false // 代码块显示行号
    },
    themeConfig: {
        sidebarDepth: 4, // e'b将同时提取markdown中h2 和 h3 标题，显示在侧边栏上。
        lastUpdated: 'Last Updated' ,// 文档更新时间：每个文件git最后提交的时间,
        locales:{
          '/':{
              label: '简体中文',
              selectText: '选择语言',
              editLinkText: '在 GitHub 上编辑此页',
              lastUpdated: '上次更新',
              serviceWorker: {
                  updatePopup: {
                      message: "发现新内容可用",
                      buttonText: "刷新"
                  }
              },
              // 顶部导航栏
              nav:[
                  // 单项 text：显示文字，link：指向链接
                  // 这里的'/' 指的是 docs文件夹路径
                  // [以 '/' 结尾的默认指向该路径下README.md文件]
                  { text: '指南', link: '/guide/' },
                  { text: '更新日志', link: '/changelog/' },
                  {
                      text: '代码托管',
                      items: [
                          { text: 'GitHub', link: 'https://github.com/xiaoymin/Swagger-Bootstrap-UI' },
                          { text: 'Gitee', link: 'https://gitee.com/xiaoym/swagger-bootstrap-ui' }
                      ]
                  },
              ],
              // 侧边栏菜单( 一个模块对应一个菜单形式 )
              sidebar:{
                  // 打开guide主页链接时生成下面这个菜单
                  '/guide/':genGuideSideBar(true),
                  "/changelog/":genChangeLogSideBar()
              }
          },
          '/en/':{
              label: 'English',
              selectText: 'Language',
              editLinkText: 'Edit this page on GitHub',
              lastUpdated: 'Last Updated',
              serviceWorker: {
                  updatePopup: {
                      message: "New content is available.",
                      buttonText: "Refresh"
                  }
              },
              // 顶部导航栏
              nav:[
                  // 单项 text：显示文字，link：指向链接
                  // 这里的'/' 指的是 docs文件夹路径
                  // [以 '/' 结尾的默认指向该路径下README.md文件]
                  { text: 'Guide', link: '/en/' },
                  {
                      text: 'Code',
                      items: [
                          { text: 'GitHub', link: 'https://github.com/xiaoymin/Swagger-Bootstrap-UI' },
                          { text: 'Gitee', link: 'https://gitee.com/xiaoym/swagger-bootstrap-ui' }
                      ]
                  },
              ],
              // 侧边栏菜单( 一个模块对应一个菜单形式 )
              sidebar:{
                  // 打开guide主页链接时生成下面这个菜单
                  '/en/':genGuideSideBar(false)
              }
          }

        }

    }
}

/***
 * 生成指南
 * @param language
 */
function genGuideSideBar(language) {
    return [
        {
            title: language ? "开始" : "Getting Start",
            collapsable: false,
            children: ["", "backgroupd", "useful", "ui-fet", "ui-images"]
        },
        {
            title: language ? "特点" : "Feature",
            collapsable: false,
            children: ["ui-style", "offline-md", "fullsearch", "fullparams", "authorize","enh-func","settings","version-control","self-doc","i18n"]
        },
        {
            title: language ? "默认规则说明" : "Default Rule",
            collapsable: false,
            children: [
                "fieldSort",
                "accessControl",
                "downloadAndPreview",
                "uploadFile",
                "settingsFastAccess"
            ]
        },
        {
            title: language ? "前后端分离" : "Front and back end",
            collapsable: false,
            children: [
                'ui-front',
                "ui-front-static",
                "ui-front-nginx",
                "ui-front-zuul",
                "ui-front-gateway"
            ]
        },
        {
            title:language?"代码说明":"Code Analysis",
            collapsable:false,
            children:[
                "springfox-swagger",
                "swaggerbootstrapui"
            ]
        },
        {
            title: "FAQ",
            collapsable: false,
            children: [
                "springboot-404",
                "md-format-error",
                "springmvc-404",
                "springmvc-notshow",
                "upload-error",
                "format-exception",
                "swagger-des-not-found",
                "sp-nmerror"
            ]
        },
        {
            title: language?"支持":"Support",
            collapsable: false,
            children: [
                "donate",
                "starts"
            ]
        }
    ]

}

/***
 * 更新日志
 */
function genChangeLogSideBar() {
    return [
        {
            title:"发布日志",
            collapsable:false,
            children:["2019-04-08-swagger-bootstrap-ui-1.9.2-issue",
                "2019-03-11-swagger-bootstrap-ui-1.9.1-issue",
                "2019-02-25-swagger-bootstrap-ui-1.9.0-issue",
                "2019-01-11-swagger-bootstrap-ui-1.8.9-issue",
                "2018-12-17-swagger-bootstrap-ui-1.8.8-issue",
                "2018-11-12-swagger-bootstrap-ui-1.8.7-issue",
                "2018-10-31-swagger-bootstrap-ui-1.8.6-issue",
                "2018-10-16-swagger-bootstrap-ui-1.8.5-issue",
                "2018-09-25-swagger-bootstrap-ui-1.8.4-issue",
                "2018-09-17-swagger-bootstrap-ui-1.8.3-issue",
                "2018-08-26-swagger-bootstrap-ui-1.8.2-issue",
                "2018-08-14-swagger-bootstrap-ui-1.8.1-issue",
                "2018-08-10-swagger-bootstrap-ui-1.8.0-issue",
                "2018-08-06-swagger-bootstrap-ui-1.7.9-issue",
                "2018-08-03-swagger-bootstrap-ui-1.7.8-issue",
                "2018-07-25-swagger-bootstrap-ui-1.7.7-issue",
                "2018-07-18-swagger-bootstrap-ui-1.7.6-issue",
                "2018-07-16-swagger-bootstrap-ui-1.7.5-issue",
                "2018-04-28-swagger-bootstrap-ui-1.7.3-issue",
                "2018-01-20-swagger-bootstrap-ui-1.7.2-issue",
                "2017-12-18-swagger-bootstrap-ui-1.7-issue",
                "2017-09-06-swagger-bootstrap-ui-1.6-issue",
                "2017-09-01-swagger-bootstrap-ui-1.5-issue",
                "2017-07-11-swagger-bootstrap-ui-1.4-issue",
                "2017-07-05-swagger-bootstrap-ui-1.3-issue",
                "2017-05-14-swagger-bootstrap-ui-1.2-issue",
                "2017-04-27-swagger-bootstrap-ui-1.1-issue",
                "2017-04-19-swagger-bootstrap-ui-open"]
        }
    ]

}