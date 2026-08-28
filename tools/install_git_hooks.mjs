#!/usr/bin/env node

import { execSync } from "node:child_process";

execSync("git config core.hooksPath .githooks", { stdio: "inherit" });
console.log("Installed repository hooks from .githooks.");
console.log("Run `npm run guard:deploy` for source-branch checks, `npm run deploy:source` for source repo push, or `npm run deploy:github` for production Pages mirror push.");
