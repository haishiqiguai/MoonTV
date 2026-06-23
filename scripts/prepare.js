#!/usr/bin/env node

const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

const gitDir = path.join(process.cwd(), '.git');

if (!fs.existsSync(gitDir) || process.env.CI || process.env.VERCEL) {
  console.log('Skipping husky install outside local git development.');
  process.exit(0);
}

const result = spawnSync('husky', ['install'], {
  stdio: 'inherit',
  shell: true,
});

process.exit(result.status ?? 0);
