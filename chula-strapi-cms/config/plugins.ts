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
  };
  