import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const NOTE =
  "Door opened 2:14 AM, third time tonight. The milk expired Tuesday, and the thing growing behind it just asked for the Wi-Fi password.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", NOTE, "utf8");

// Read back and enforce the gate: 1 to 200 characters, not only whitespace.
const written = readFileSync("/output/entry.txt", "utf8");
if (written.length < 1 || written.length > 200 || written.trim().length === 0) {
  throw new Error(
    `gate failed: entry.txt is ${written.length} characters (must be 1-200, non-blank)`,
  );
}
if (written !== NOTE) {
  throw new Error("gate failed: entry.txt does not match the note exactly");
}
