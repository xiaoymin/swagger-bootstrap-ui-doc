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
                  '/guide/':genGuideSideBar(true)
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
                  { text: 'Guide', link: '/guide/' },
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
                  '/guide/':genGuideSideBar(false)
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
            children: ["ui-style", "offline-md", "fullsearch", "fullparams", "authorize","enh-func","settings"]
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