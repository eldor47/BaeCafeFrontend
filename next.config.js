module.exports = {
  async redirects() {
    return [
      {
        source: '/mintbae',
        destination: '/mint-bae',
        permanent: true,
      },
      {
        source: '/mint_bae',
        destination: '/mint-bae',
        permanent: true,
      }
    ];
  },
};
