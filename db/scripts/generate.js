import readline from "node:readline";
import { spawn } from "node:child_process";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter migration name: ", (migrationName) => {
  if (!migrationName.trim()) {
    console.error("Migration name cannot be empty.");
    rl.close();
    process.exit(1);
  }

  const migrationFileName = migrationName
    .toLocaleLowerCase()
    .split(" ")
    .join("_");

  const migrate = spawn(
    "drizzle-kit generate",
    [`--name='${migrationFileName}'`],
    {
      stdio: "inherit",
      shell: true,
    }
  );

  migrate.on("close", (code) => {
    rl.close();
    process.exit(code ?? 0);
  });
});
