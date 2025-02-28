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

export type InterceptorGeneratorOptions = NestGeneratorWithLanguageOption &
  NestGeneratorWithTestOption;

export function interceptorGenerator(
  tree: Tree,
  rawOptions: InterceptorGeneratorOptions
): Promise<any> {
  const options = normalizeInterceptorOptions(tree, rawOptions);

  return runNestSchematic(tree, 'interceptor', options);
}

export default interceptorGenerator;

function normalizeInterceptorOptions(
  tree: Tree,
  options: InterceptorGeneratorOptions
): NormalizedOptions {
  return {
    ...normalizeOptions(tree, options),
    language: options.language,
    spec: unitTestRunnerToSpec(options.unitTestRunner),
  };
}
