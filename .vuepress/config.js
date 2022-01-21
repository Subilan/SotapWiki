const SIDEBAR = {
	初来乍到: [
		['/introduction', 'SoTap 简介'],
		['/getting-started/preparation', '入服指南'],
		['/getting-started/faq', '常见问题'],
		['/getting-started/start', '新人指南']
	],
	服务器: [
		['/wonderland/souvenir', '纪念品'],
		['/wonderland/IDskin', 'ID 皮肤'],
		['wonderland/HowToMakeIDskin', 'ID 皮肤制作指南']
	],
	社群: [
		['/forum/introduction', '介绍'],
		['/forum/image-posting', '发图教程'],
		['/markdown', 'Markdown 教程'],
		['/groups', '玩家群组']
	],
	插件: [
		['/plugins/commands', '常用指令'],
		['/plugins/flarum-reader', 'FlarumReader']
	],
	维护: [
		['/about/management', '运营团队信息和加入事宜'],
		['/join-wiki', '加入 Wiki 项目'],
		['https://github.com/sotapmc/SotapWiki/issues', '反馈问题'],
		['https://g.sotap.org/t/qa', '论坛问答板']
	]
};

function sidebar() {
	let v;
	let sidebar = [];
	for (k of Object.keys(SIDEBAR)) {
		v = SIDEBAR[k];
		sidebar.push({
			title: k,
			collapsable: false,
			children: v
		});
	}
	return sidebar;
}

module.exports = {
	title: 'SoTap Wiki',
	description: 'SoTap 服务器的官方知识库',
	themeConfig: {
		nav: [
			{ text: '首页', link: '/index' },
			{ text: '官网', link: 'https://sotap.org' },
			{ text: 'GitHub', link: 'https://github.com/sotapmc' }
		],
		sidebar: sidebar(),
		search: true,
		searchMaxSuggestions: 10,
		editLinks: true,
		editLinkText: '编辑此页面',
		repoLabel: '查看源码',
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
