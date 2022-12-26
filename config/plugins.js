module.exports = ({ env }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
  "strapi-plugin-populate-deep": {
    config: {
      defaultDepth: 3, // Default is 5
    },
  },
  "fuzzy-search": {
    enabled: true,
    config: {
      contentTypes: [
        // {
        //   uid: "api::author.author",
        //   modelName: "author",
        //   transliterate: true,
        //   queryConstraints: {
        //     where: {
        //       $and: [
        //         {
        //           publishedAt: { $notNull: true },
        //         },
        //       ],
        //     },
        //   },
        //   fuzzysortOptions: {
        //     characterLimit: 300,
        //     threshold: -600,
        //     limit: 10,
        //     keys: [
        //       {
        //         name: "name",
        //         weight: 100,
        //       },
        //       {
        //         name: "description",
        //         weight: -100,
        //       },
        //     ],
        //   },
        // },
        {
          uid: "api::apl-01.apl-01",
          modelName: "apl-01",
          fuzzysortOptions: {
            characterCount: 500,
            threshold: -500,
            limit: 10,
            keys: [
              {
                name: "namaLengkap",
                weight: 100,
              },
            ],
          },
        },
      ],
    },
  },

  // uncomment before deploy
  // upload: {
  //   config: {
  //     provider: 'cloudinary',
  //     providerOptions: {
  //       cloud_name: env('CLOUDINARY_NAME'),
  //       api_key: env('CLOUDINARY_KEY'),
  //       api_secret: env('CLOUDINARY_SECRET'),
  //     },
  //     actionOptions: {
  //       upload: {},
  //       delete: {},
  //     },
  //   },
  // },
});
