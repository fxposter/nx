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

export type ClassGeneratorOptions = NestGeneratorWithLanguageOption &
  NestGeneratorWithTestOption;

export function classGenerator(
  tree: Tree,
  rawOptions: ClassGeneratorOptions
): Promise<any> {
  const options = normalizeClassOptions(tree, rawOptions);

  return runNestSchematic(tree, 'class', options);
}

export default classGenerator;

function normalizeClassOptions(
  tree: Tree,
  options: ClassGeneratorOptions
): NormalizedOptions {
  return {
    ...normalizeOptions(tree, options),
    language: options.language,
    spec: unitTestRunnerToSpec(options.unitTestRunner),
  };
}
