const sidebar: SidebarItem[] = [
	{
		title: '初来乍到',
		collapsable: false,
		children: [
			['/getting-started/introduction', 'SoTap 简介'],
			['/getting-started/preparation', '入服指南'],
			['/getting-started/faq', '常见问题'],
			['/getting-started/start', '新人指南']
		]
	},
	{
		title: '服务器',
		collapsable: false,
		children: [
			['/wonderland/souvenir', '纪念品'],
			['/wonderland/IDskin', 'ID 皮肤'],
			['wonderland/HowToMakeIDskin', 'ID 皮肤制作指南']
		]
	},
	{
		title: '社群',
		collapsable: false,
		children: [
			['/forum/introduction', '介绍'],
			['/forum/image-posting', '发图教程'],
			['/markdown', 'Markdown 教程'],
			['/groups', '玩家群组']
		]
	},
	{
		title: '插件',
		collapsable: false,
		children: [
			['/plugins/commands', '常用指令'],
			['/plugins/flarum-reader', 'FlarumReader']
		]
	},
	{
		title: '维护',
		collapsable: false,
		children: [
			['/about/management', '运营团队信息和加入事宜'],
			['/join-wiki', '加入 Wiki 项目'],
			['https://github.com/sotapmc/SotapWiki/issues', '反馈问题'],
			['https://g.sotap.org/t/qa', '论坛问答板']
		]
	}
];

interface SidebarItem {
	title: string;
	children: string[][];
	collapsable: boolean;
}

export default sidebar;
