const sidebar = {
  '/It-chat/':[{
      title:'案例',
      children:[
        'case'
      ]
    }
  ],
  '/artical/':[{
    title:'文章',
    children:[
      'artical'
    ]
  }],
  '/distribute/': [{
    title: '分布式',
    children: [
      'distribute',
    ]
  }],
  '/ml/': [{
      title: '机器学习基础',
      children: [
        'ml-guid',
        'ml-term',
        'study-website',
        'study-road'
      ]
    }],
  '/ziyuan01/': [{
    title: '大数据简介',
    children: [
      'jianjie',
      'BigDataIs'
    ]
  }, {
    title: '大数据生态',
    children: [
      '',
      'MR',
      'Hive'
    ]
  }, {
    title: '分布式',
    children: [
      'distribute',
    ]
  }, ],

  '/ziyuan02/': [{
    title: '深挖底层',
    children: [
      '', /* /foo/ */
      'MRyuanli',
      'NameNodeDetail'
    ]
  }, {
    title: '优化',
    children: [
      'secondarySort',
      'skewindata'
    ]
  },{
    title: 'kafka',
    children: [
      'kafka-01',
    ]
  }],
  '/ziyuan03/': [{
    title: 'Mac',
    children: [
      '',
    ]
  }]
}

var nav = [{
  text: '大数据',
  link: '/ziyuan01/'
}, {
  text: '👨‍💻‍机器学习',
  link: '/ml/'
}, {
  text: '深挖底层',
  link: '/ziyuan02/'
}, {
  text: '技术文章整合',
  link: '/artical/artical.html'
},{
  text: '优秀案例',
  link: '/It-chat/case.html'
}
,
{
  text: '工具',
  link: '/liuyan/'
},
{
  text: ' Mac 软件',
  link: '/ziyuan03/'
}, {
  text: '主站',
  link: 'http://sshlearning.cn'
}];

module.exports = {
  title: '大数据进击之路🔥',
  description: '沉淀两年，砥砺前行',
  head: [
    ['link', {
      rel: 'icon',
      href: '/flash.png'
    }]
  ],
  base: '/',
  markdown: {
    lineNumbers: true,
    anchor: {
      permalink: true,
      permalinkBefore: true,
      permalinkSymbol: '#'
    },
  },

  //evergreen: true,

  themeConfig: {
    nav,
    sidebar,
  },

  //sidebar: 'auto',

  displayAllHeaders: true, // 显示所有页面的链接,默认值 false
  search: true, //开启显示搜索框,开箱即用的搜索功能。
  searchMaxSuggestions: 10, //搜索结果的数量
  lastUpdated: '上次更新',

  repo: 'https://github.com/aikuyun/ziyuan',
  // 自定义仓库链接文字。默认从 `themeConfig.repo` 中自动推断为
  // "GitHub"/"GitLab"/"Bitbucket" 其中之一，或是 "Source"。
  repoLabel: '查看源码',

  // 以下为可选的编辑链接选项

  // 假如你的文档仓库和项目本身不在一个仓库：
  //docsRepo: 'vuejs/vuepress',
  // 假如文档不是放在仓库的根目录下：
  docsDir: 'docs',
  // 假如文档放在一个特定的分支下：
  docsBranch: 'master',
  // 默认是 false, 设置为 true 来启用
  editLinks: true,
  // 默认为 "Edit this page"
  editLinkText: '帮助改善此页面！',

  plugins: ['@vuepress/back-to-top']
}
