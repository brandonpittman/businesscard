'use strict'

// Pull in our modules
const chalk = require('chalk')
const boxen = require('boxen')
const fs = require('fs')
const path = require('path')

// Define options for Boxen
const options = {
	padding: 1,
	margin: 1,
	borderStyle: 'round',
}

// Text + chalk definitions
const data = {
	name: chalk.white('              Brandon Pittman'),
	handle: chalk.white('brandonpittman'),
	work: chalk.white('Technical Director @ Aquaring Global Strategy'),
	opensource: chalk.white('Gridsome | Tailwind | PurgeCSS ') + chalk.green('⬢'),
	twitter: chalk.gray('https://twitter.com/') + chalk.cyan('brandonpittman'),
	npm: chalk.gray('https://npmjs.com/') + chalk.red('~brandonpittman'),
	github: chalk.gray('https://github.com/') + chalk.green('brandonpittman'),
	linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('bitandbang'),
	wantedly:
		chalk.gray('https://www.wantedly.com/users/') + chalk.blue('80873258'),
	web: chalk.cyan('https://blp.is/here'),
	npx: chalk.red('npx') + ' ' + chalk.white('brandonpittman'),
	labelWork: chalk.white.bold('       Work:'),
	labelOpenSource: chalk.white.bold('Open Source:'),
	labelTwitter: chalk.white.bold('    Twitter:'),
	labelnpm: chalk.white.bold('        npm:'),
	labelGitHub: chalk.white.bold('     GitHub:'),
	//  labelLinkedIn: chalk.white.bold('   LinkedIn:'),
	labelWantedly: chalk.white.bold('   Wantedly:'),
	labelWeb: chalk.white.bold('        Web:'),
	labelCard: chalk.white.bold('       Card:'),
}

// Actual strings we're going to output
const newline = '\n'
const heading = `${data.name} / ${data.handle}`
const working = `${data.labelWork}  ${data.work}`
const opensourcing = `${data.labelOpenSource}  ${data.opensource}`
const twittering = `${data.labelTwitter}  ${data.twitter}`
const npming = `${data.labelnpm}  ${data.npm}`
const githubing = `${data.labelGitHub}  ${data.github}`
const linkedining = `${data.labelLinkedIn}  ${data.linkedin}`
const wantedlying = `${data.labelWantedly}  ${data.wantedly}`
const webing = `${data.labelWeb}  ${data.web}`
const carding = `${data.labelCard}  ${data.npx}`

// Put all our output together into a single variable so we can use boxen effectively
const output =
	heading +
	newline +
	newline +
	working +
	newline +
	opensourcing +
	newline +
	newline +
	twittering +
	newline +
	npming +
	newline +
	githubing +
	newline +
	wantedlying +
	newline +
	newline +
	webing +
	newline +
	newline +
	carding

fs.writeFileSync(
	path.join(__dirname, 'bin/output'),
	chalk.green(boxen(output, options)),
)
