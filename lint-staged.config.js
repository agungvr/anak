module.exports = {
  '{packages,tools}/**/*.{ts,js,json,md,html,css,scss}': [
    'nx workspace-lint',
    'nx affected --target lint --fix true',
    'nx affected --target test',
    'nx format:write --libs-and-apps',
  ],
};
