import sidebar from '../sidebar';

module.exports = {
	title: 'SoTap Wiki',
	description: 'SoTap 服务器的官方知识库',
	themeConfig: {
		nav: [
			{ text: '首页', link: '/index' },
			{ text: '官网', link: 'https://sotap.org' },
			{ text: 'GitHub', link: 'https://github.com/sotapmc' }
		],
		sidebar: sidebar,
		search: true,
		searchMaxSuggestions: 10,
		editLinks: true,
		editLinkText: '编辑此页面',
		repoLabel: '查看源码',
		docsBranch: 'v3',
		repo: 'sotapmc/SotapWiki',
		logo: 'https://sotapmc.oss-cn-beijing.aliyuncs.com/img/logo/logo-120x120.png'
	},
	markdown: {
		plugins: ['footnote', 'sup', 'sub']
	},
	plugins: {
		'@vuepress/medium-zoom': {
			selector: '.theme-default-content :not(a) > img'
		},
        'mathjax': {
            target: 'chtml'
        }
	},
	head: [['link', { rel: 'icon', href: 'https://sotap.oss-cn-qingdao.aliyuncs.com/favicon.ico' }]]
};
