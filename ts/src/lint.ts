import {
  IConstructorOpts,
  ISpectralDiagnostic,
  IRunOpts,
  Spectral,
  Ruleset,
  RulesetDefinition,
} from "@stoplight/spectral-core";
import { asyncapi as aasRuleset } from "@stoplight/spectral-rulesets";

import { ParserInput } from "./parse";
import { toAsyncAPIDocument } from "./utils";

export interface LintOptions extends IConstructorOpts, IRunOpts {
  ruleset?: RulesetDefinition | Ruleset;
}

export interface ValidateOptions extends LintOptions {}

export async function lint(asyncapi: ParserInput, options?: LintOptions): Promise<ISpectralDiagnostic[] | undefined> {
  if (toAsyncAPIDocument(asyncapi)) {
    return;
  }
  return (await validate(asyncapi, options)).results;
}

export async function validate(asyncapi: string | Record<string, any>, options?: ValidateOptions) {
  options = normalizeOptions(options);
  const spectral = new Spectral();

  spectral.setRuleset(options.ruleset!);
  return await spectral.runWithResolved(asyncapi) as { resolved: Record<string, any>, results: ISpectralDiagnostic[] }; 
}

function normalizeOptions(options?: LintOptions): LintOptions {
  if (typeof options !== 'object') {
    // fix that type
    return { ruleset: aasRuleset as any };
  }

  return options;
}
