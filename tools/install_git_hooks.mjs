#!/usr/bin/env node

import { execSync } from "node:child_process";

execSync("git config core.hooksPath .githooks", { stdio: "inherit" });
console.log("Installed repository hooks from .githooks.");
console.log("Run `npm run guard:deploy` before manual deployment checks or `npm run deploy:github` for full GitHub push flow.");

