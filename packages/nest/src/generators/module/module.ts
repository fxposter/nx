import type { Tree } from '@nx/devkit';
import type {
  NestGeneratorWithLanguageOption,
  NormalizedOptions,
} from '../utils';
import { normalizeOptions, runNestSchematic } from '../utils';

export type ModuleGeneratorOptions = NestGeneratorWithLanguageOption & {
  module?: string;
  skipImport?: boolean;
};

export function moduleGenerator(
  tree: Tree,
  rawOptions: ModuleGeneratorOptions
): Promise<any> {
  const options = normalizeModuleOptions(tree, rawOptions);

  return runNestSchematic(tree, 'module', options);
}

export default moduleGenerator;

function normalizeModuleOptions(
  tree: Tree,
  options: ModuleGeneratorOptions
): NormalizedOptions {
  return {
    ...normalizeOptions(tree, options),
    language: options.language,
    module: options.module,
    skipImport: options.skipImport,
  };
}
