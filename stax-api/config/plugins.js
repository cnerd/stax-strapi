module.exports = ({ env }) => ({
  // ...
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: '...', // Update here cloud_name
        api_key: '...', // Update here api_key
        api_secret: '...', // Update here api_secret
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
    },
  },
  // ...
})
