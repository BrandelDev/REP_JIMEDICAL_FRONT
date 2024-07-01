const fs = require('fs-extra');

// Copy Angular build to functions folder
(async () => {
  const src = './dist/angular-jimedical-front';
  const copy = './functions';

  await fs.copy(src, copy);

  console.log('Angular build copied to functions folder');
})();