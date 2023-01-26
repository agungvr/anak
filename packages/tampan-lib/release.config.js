/* eslint-disable no-useless-concat */
/* eslint-disable no-template-curly-in-string */
const name = "tampan-lib";
const srcRoot = `packages/${name}`;

module.exports = {
  name,
  extends: "release.config.base.js",
  pkgRoot: `dist/${srcRoot}`,
  tagFormat: `${name}-v\${version}`,
  commitPaths: ["force-release.md", `${srcRoot}/*`],
  assets: [`${srcRoot}/README.md`, `${srcRoot}/CHANGELOG.md`],

  plugins: [
    "@semantic-release/commit-analyzer",
    "@semantic-release/release-notes-generator",
    [
      "@semantic-release/changelog",
      {
        changelogFile: `${srcRoot}/CHANGELOG.md`,
      },
    ],
    "@semantic-release/npm",
    [
      "@semantic-release/git",
      {
        assets: [`${srcRoot}/package.json`, `${srcRoot}/CHANGELOG.md`],
        message:
          `release(version): Release ${name} ` +
          "${nextRelease.version} \n\n${nextRelease.notes}",
      },
    ],
  ],
};
