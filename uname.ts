const permission: Deno.RunPermissionDescriptor = {
  name: "run",
  command: "uname",
} as const;
const permissionStatus: Deno.PermissionStatus = await Deno.permissions.request(
  permission,
);

if (permissionStatus.state !== "granted") {
  console.log(
    "To use this script you must grant a permission to call uname command",
  );
  Deno.exit(1);
}

const process: Deno.Process = Deno.run({
  cmd: ["uname", "-a"],
  stdout: "piped",
  stderr: "piped",
});

console.log({
  status: await process.status(),
  output: new TextDecoder().decode(await process.output()),
});
