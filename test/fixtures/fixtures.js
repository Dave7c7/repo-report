'use strict';

const Table = require('cli-table');
const symbols = require('../../src/symbols');

const mockRepositoriesData = require('./mockRepositoriesData.json');

const expectedOptions = {
	options: {
		chars: {
			top: '─',
			'top-mid': '┬',
			'top-left': '┌',
			'top-right': '┐',
			bottom: '─',
			'bottom-mid': '┴',
			'bottom-left': '└',
			'bottom-right': '┘',
			left: '│',
			'left-mid': '├',
			mid: '─',
			'mid-mid': '┼',
			right: '│',
			'right-mid': '┤',
			middle: '│',
		},
		truncate: '…',
		colWidths: [],
		colAligns: [],
		style: {
			'padding-left': 1,
			'padding-right': 1,
			head: ['red'],
			border: ['grey'],
			compact: false,
		},
		head: ['Repository', 'Access', 'DefBranch'],
	},
};

const tableOutput = Object.setPrototypeOf(Object.assign([
	['Stats', '100% (6/6)', '0% (0/6)'],
	[
		'name/project-eraser\nname/guidelines-questionnaire\nname/challenges-book\n🔒 name/microservice\nname/responsive-design\nname/media-upload-app',
		symbols.success,
		symbols.error,
	],
], expectedOptions), Table.prototype);

const tableOutputActual = Object.setPrototypeOf(Object.assign([
	[
		'name/project-eraser\nname/guidelines-questionnaire\nname/challenges-book\n🔒 name/microservice\nname/responsive-design',
		'ADMIN',
		'master',
	],
	[
		'name/media-upload-app',
		'ADMIN',
		'develop',
	],
], expectedOptions), Table.prototype);

const DetailTableColumns = [
	'Repository',
	'Access',
	'IssuesEnabled',
	'ProjectsEnabled',
	'WikiEnabled',
	'Archived',
	'BlankIssuesEnabled',
	'SecurityPolicyEnabled',
	'License',
	'MergeStrategies',
	'DeleteOnMerge',
	'HasStarred',
	'Subscription',
	'DefBranch',
	'AllowsForcePushes',
	'AllowsDeletions',
	'DismissesStaleReviews',
	'ReqApprovingReviewCount',
	'ReqApprovingReviews',
	'ReqCodeOwnerReviews',
	'ReqConversationResolution',
];

const sortedRepositories = require('./sortedRepositories.json');

const tableData = {
	body: [
		['name/challenges-book', 'ADMIN', 'master'],
		['name/guidelines-questionnaire', 'ADMIN', 'master'],
		['name/media-upload-app', 'ADMIN', 'develop'],
		['🔒 name/microservice', 'ADMIN', 'master'],
		['name/project-eraser', 'ADMIN', 'master'],
		['name/responsive-design', 'ADMIN', 'master'],
	],
	head: ['Repository', 'Access', 'DefBranch'],
};

const sortedTableData = {
	body: [
		['name/challenges-book', 'ADMIN', 'master'],
		['name/guidelines-questionnaire', 'ADMIN', 'master'],
		['name/media-upload-app', 'ADMIN', 'develop'],
		['🔒 name/microservice', 'ADMIN', 'master'],
		['name/project-eraser', 'ADMIN', 'master'],
		['name/responsive-design', 'ADMIN', 'master'],
	],
	head: ['Repository', 'Access', 'DefBranch'],
};
module.exports = {
	mockRepositoriesData,
	tableOutput,
	tableOutputActual,
	DetailTableColumns,
	sortedRepositories,
	tableData,
	sortedTableData,
};
