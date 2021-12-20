import { serve } from "https://deno.land/std@0.118.0/http/server.ts";

function handler(req: Request): Response {
  return new Response("Hello, world!");
}

const options: Deno.ListenOptions = {
  hostname: Deno.args[1] || '127.0.0.1',
  port: +(Deno.args[0] || 8000),
};
serve(handler, options);
console.info(`Server started: ${options.hostname}:${options.port}`)
