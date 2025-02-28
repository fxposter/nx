import type { Tree } from '@nx/devkit';
import type {
  NestGeneratorWithLanguageOption,
  NestGeneratorWithTestOption,
  NormalizedOptions,
} from '../utils';
import {
  normalizeOptions,
  runNestSchematic,
  unitTestRunnerToSpec,
} from '../utils';

export type ServiceGeneratorOptions = NestGeneratorWithLanguageOption &
  NestGeneratorWithTestOption;

export function serviceGenerator(
  tree: Tree,
  rawOptions: ServiceGeneratorOptions
): Promise<any> {
  const options = normalizeServiceOptions(tree, rawOptions);

  return runNestSchematic(tree, 'service', options);
}

export default serviceGenerator;

function normalizeServiceOptions(
  tree: Tree,
  options: ServiceGeneratorOptions
): NormalizedOptions {
  return {
    ...normalizeOptions(tree, options),
    language: options.language,
    spec: unitTestRunnerToSpec(options.unitTestRunner),
  };
}
