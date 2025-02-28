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

export type PipeGeneratorOptions = NestGeneratorWithLanguageOption &
  NestGeneratorWithTestOption;

export function pipeGenerator(
  tree: Tree,
  rawOptions: PipeGeneratorOptions
): Promise<any> {
  const options = normalizePipeOptions(tree, rawOptions);

  return runNestSchematic(tree, 'pipe', options);
}

export default pipeGenerator;

function normalizePipeOptions(
  tree: Tree,
  options: PipeGeneratorOptions
): NormalizedOptions {
  return {
    ...normalizeOptions(tree, options),
    language: options.language,
    spec: unitTestRunnerToSpec(options.unitTestRunner),
  };
}
