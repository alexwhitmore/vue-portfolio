// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Gridsome',
  siteUrl: 'https://alexwhitmore.github.io/vue-portfolio/',
  pathPrefix: '/vue-portfolio',
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: 'content/projects/**/*.md',
        typeName: 'ProjectPost',
        resolveAbsolutePaths: true,
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['nofollow', 'noopener', 'noreeferrer'],
        },
      },
    },
  ],
};
