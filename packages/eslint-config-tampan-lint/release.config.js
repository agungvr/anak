const appName = 'eslint-config-tampan-lint'
const srcRoot = `packages/${appName}`

module.exports = {
  name: appName,
  extends: 'release.config.base.js',
  pkgRoot: `dist/${srcRoot}`,
  tagFormat: `${appName}-v\${version}`,
  commitPaths: ['force-release.md', `${srcRoot}/*`],
  assets: [`${srcRoot}/README.md`, `${srcRoot}/CHANGELOG.md`],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    [
      '@semantic-release/changelog',
      {
        changelogFile: `${srcRoot}/CHANGELOG.md`,
      },
    ],
    '@semantic-release/npm',
    [
      '@semantic-release/git',
      {
        assets: [`${srcRoot}/package.json`, `${srcRoot}/CHANGELOG.md`],
        message: `release(version): Release ${appName} \${nextRelease.version} \n\n\${nextRelease.notes}`,
      },
    ],
  ],
}
