module.exports = {
    graphql: {
        config: {
            defaultLimit: 100,
            maxLimit: 500,
            apolloServer: {
                introspection: true,
            },
        },
    },
    rest: {
        defaultLimit: 100,
        maxLimit: 500,
        withCount: true,
    },
    'strapi-plugin-pdf-creator': {
        enabled: true,
        config: {
            beautifyDate: {
                fields: ['date'],
                options: {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                }
            }
        }
    },
};
