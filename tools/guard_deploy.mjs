#!/usr/bin/env node

import { execSync } from "node:child_process";

const args = process.argv.slice(2);
const options = new Map(args.map((arg, idx) => [arg, args[idx + 1]]));
const remote = options.get("--remote") || "origin";
const branch = options.get("--branch") || "main";
const requireMain = args.includes("--require-main");
const requireClean = args.includes("--must-clean");

const run = (command) => {
  return execSync(command, { encoding: "utf8", stdio: ["ignore", "pipe", "pipe"] }).trim();
};

const fail = (message) => {
  console.error(`❌ ${message}`);
  process.exit(1);
};

const currentBranch = run("git rev-parse --abbrev-ref HEAD");
if (requireMain && currentBranch !== "main") {
  fail(`Deployment guard requires branch main; current branch is ${currentBranch}.`);
}

if (!currentBranch) {
  fail("Cannot determine the current branch.");
}

const remoteRef = `${remote}/${branch}`;

run(`git remote get-url ${remote}`);

if (requireClean) {
  const status = run("git status --porcelain");
  if (status.length > 0) {
    fail("Working tree is not clean. Commit or stash changes before continuing.");
  }
}

run(`git fetch --quiet ${remote} ${branch}`);

const remoteHead = run(`git rev-parse ${remoteRef}`);
const localHead = run("git rev-parse HEAD");
if (remoteHead !== localHead) {
  const isFastForward = (() => {
    try {
      run(`git merge-base --is-ancestor ${remoteHead} ${localHead}`);
      return true;
    } catch {
      return false;
    }
  })();

  if (!isFastForward) {
    fail(`Local branch is not based on ${remoteRef}. Pull and rebase first (git pull --rebase ${remote} ${branch}).`);
  }
}

const remoteAhead = Number(run(`git rev-list --count HEAD..${remoteRef}`));
const localAhead = Number(run(`git rev-list --count ${remoteRef}..HEAD`));

if (Number.isNaN(remoteAhead) || Number.isNaN(localAhead)) {
  fail("Failed to compare branch ancestry with remote.");
}

if (localAhead === 0) {
  fail(`No local commit is ahead of ${remoteRef}. Nothing new to deploy from ${currentBranch}.`);
}

if (remoteAhead > 0) {
  fail(`${remoteRef} has ${remoteAhead} commit(s) ahead of local ${currentBranch}. Rebase first.`);
}

console.log(`✅ Deployment guard passed for ${currentBranch} vs ${remoteRef}. (${localAhead} commit(s) ahead).`);
console.log(`Branch=${currentBranch} clean=${requireClean ? "yes" : "skipped"}`);
console.log(`Remote=${remoteRef}=${remoteHead.slice(0, 8)} local=${localHead.slice(0, 8)}`);
