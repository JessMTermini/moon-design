# 06-11-22 First Build FAILED miserably!

## Here are the console commands and outputs to LEARN from!

jmt@penguin:~/ALL Test Projects$ cd moon-design
jmt@penguin:~/ALL Test Projects/moon-design$ pnpm run watch

> moon-design@ watch /home/jmt/ALL Test Projects/moon-design
> pnpm run watch:legacy && pnpm run watch:tailwind


> moon-design@ watch:legacy /home/jmt/ALL Test Projects/moon-design
> pnpm --filter ./packages --parallel -r run chokidar

No projects matched the filters in "/home/jmt/ALL Test Projects/moon-design"

> moon-design@ watch:tailwind /home/jmt/ALL Test Projects/moon-design
> pnpm --filter ./workspaces --parallel -r run chokidar 

No projects matched the filters in "/home/jmt/ALL Test Projects/moon-design"
jmt@penguin:~/ALL Test Projects/moon-design$ pnpm run next build

> moon-design@ next /home/jmt/ALL Test Projects/moon-design
> pnpm run --filter next-docs "build"


> next-docs@9.1.2 build /home/jmt/ALL Test Projects/moon-design/next-docs
> next build

info  - Loaded env from /home/jmt/ALL Test Projects/moon-design/next-docs/.env.production
Failed to compile.

./components/Header.tsx:2:29
Type error: Cannot find module '@heathmont/moon-icons-tw' or its corresponding type declarations.

  1 | import { LogoMoonDesignShort } from '@heathmont/moon-assets';
> 2 | import { GenericMenu } from '@heathmont/moon-icons-tw';
    |                             ^
  3 | import Breadcrumbs from './breadcrumbs/Breadcrumbs';
  4 | 
  5 | type Props = {
info  - Checking validity of types ./home/jmt/ALL Test Projects/moon-design/next-docs:
 ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL  next-docs@9.1.2 build: `next build`
Exit status 1
 ELIFECYCLE  Command failed with exit code 1.
jmt@penguin:~/ALL Test Projects/moon-design$ pnpm run next start

> moon-design@ next /home/jmt/ALL Test Projects/moon-design
> pnpm run --filter next-docs "start"


> next-docs@9.1.2 start /home/jmt/ALL Test Projects/moon-design/next-docs
> next start -p 80

Error: listen EACCES: permission denied 0.0.0.0:80
    at Server.setupListenHandle [as _listen2] (node:net:1397:21)
    at listenInCluster (node:net:1462:12)
    at doListen (node:net:1601:7)
    at process.processTicksAndRejections (node:internal/process/task_queues:83:21) {
  code: 'EACCES',
  errno: -13,
  syscall: 'listen',
  address: '0.0.0.0',
  port: 80
}
/home/jmt/ALL Test Projects/moon-design/next-docs:
 ERR_PNPM_RECURSIVE_RUN_FIRST_FAIL  next-docs@9.1.2 start: `next start -p 80`
Exit status 1
 ELIFECYCLE  Command failed with exit code 1.
jmt@penguin:~/ALL Test Projects/moon-design$ git config user.name "JessMTermini"
jmt@penguin:~/ALL Test Projects/moon-design$ git config user.email jessicamtermini@gmail.com
jmt@penguin:~/ALL Test Projects/moon-design$ 