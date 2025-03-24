import fs from "fs";
import path from "path";

const emojiMap = {
  build: "🛠️",
  chore: "♻️",
  ci: "🤖",
  docs: "📚",
  feat: "✨",
  fix: "🐛",
  perf: "🚀",
  refactor: "🔄",
  revert: "🔙",
  style: "💅",
  test: "🧪",
};

const commitMsgPath = path.resolve(process.argv[2]);
const commitMsg = fs.readFileSync(commitMsgPath, "utf-8").trim();

if (commitMsg.includes(":") === false) {
  process.exit(0);
}

const [type, ...rest] = commitMsg.split(":");
const subject = rest.join(":").trim();

if (subject === false) {
  process.exit(0);
}

const emoji = emojiMap[type.trim()] || "";
const newCommitMsg = `${emoji} ${commitMsg}`;
fs.writeFileSync(commitMsgPath, newCommitMsg);
