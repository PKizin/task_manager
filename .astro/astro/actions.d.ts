declare module "astro:actions" {
	type Actions = typeof import("D:/Work/ASTRO/task-manager/src/actions")["server"];

	export const actions: Actions;
}