import { Feature } from "./enums";
import zydis from "./native";

export function getVersion() {
	return {
		major: zydis.asm.zyjsGetMajorVersion(),
		minor: zydis.asm.zyjsGetMinorVersion(),
		patch: zydis.asm.zyjsGetPatchVersion(),
		build: zydis.asm.zyjsGetBuildVersion(),
	};
}

export function getVersionString() {
	const { major, minor, patch, build } = getVersion();
	return `v${major}.${minor}.${patch}.${build}`;
}

export function hasFeature(feature: Feature): boolean {
	return !!zydis.asm.zyjsHasFeature(feature);
}
