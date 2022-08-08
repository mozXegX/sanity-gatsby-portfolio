export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '62f05e22e9b20f6ecd3ab017',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-portfolio-studio-8echnyfi',
                  apiId: 'd82a11f4-111d-46f6-a004-f250d8045152'
                },
                {
                  buildHookId: '62f05e2345349f034c39b616',
                  title: 'Portfolio Website',
                  name: 'sanity-gatsby-portfolio-web-sdupsrny',
                  apiId: 'ab9724f0-630f-420c-aa7d-cfbbd3b334e1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/mozXegX/sanity-gatsby-portfolio',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://sanity-gatsby-portfolio-web-sdupsrny.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
