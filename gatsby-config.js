module.exports = {
    siteMetadata: {
        title: `My Gatsby Starter Blog`,
        author: {
            name: `Kyle Mathews`,
            summary: `who lives and works in San Francisco building useful things.`,
        },
        description: `A starter blog demonstrating what Gatsby can do.`,
        siteUrl: `https://gatsbystarterblogsource.gatsbyjs.io/`,
        social: {
            twitter: `kylemathews`,
        },
    },
    plugins: [
        'gatsby-plugin-sass',
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'files',
                path: `${__dirname}/src/markdown`
            }
        },
        'gatsby-transformer-remark',
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /assets/,
                    omitKeys: ['xmlnsDc', 'xmlnsCc', 'xmlnsRdf', 'xmlnsSvg', 'xmlnsSodipodi', 'xmlnsInkscape']
                }
            }
        }
    ]
}
