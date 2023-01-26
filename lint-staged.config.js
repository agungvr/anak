module.exports = {
  '{packages,tools}/**/*.{ts,js,json,html,css,scss}': [
    'nx workspace-lint',
    'nx affected --target lint --uncommitted --fix --parallel',
    'nx affected --target test --uncommitted',
    'nx format:write --uncommitted --libs-and-apps',
  ],
}
