import type { Tree } from '@nx/devkit';
import type {
  NestGeneratorWithLanguageOption,
  NestGeneratorWithResourceOption,
  NestGeneratorWithTestOption,
  NormalizedOptions,
} from '../utils';
import {
  normalizeOptions,
  runNestSchematic,
  unitTestRunnerToSpec,
} from '../utils';

export type ResourceGeneratorOptions = NestGeneratorWithLanguageOption &
  NestGeneratorWithTestOption &
  NestGeneratorWithResourceOption;

export function resourceGenerator(
  tree: Tree,
  rawOptions: ResourceGeneratorOptions
): Promise<any> {
  const options = normalizeResourceOptions(tree, rawOptions);

  return runNestSchematic(tree, 'resource', options);
}

export default resourceGenerator;

function normalizeResourceOptions(
  tree: Tree,
  options: ResourceGeneratorOptions
): NormalizedOptions {
  return {
    ...normalizeOptions(tree, options),
    language: options.language,
    spec: unitTestRunnerToSpec(options.unitTestRunner),
  };
}
