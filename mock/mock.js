module.exports = {
  rules: [
    {
      pattern: /\/api\/getLivelist.php\?rtype=origin$/,
      respondwith: './livelist.json'
    },
    {
      pattern: /\/api\/getLivelist.php\?rtype=more$/,
      respondwith: './livelist-more.json'
    },
    {
      pattern: /\/api\/getRun.php\?rtype=run$/,
      respondwith: './run.json'
    }
  ]
};
