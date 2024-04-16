import { z } from "zod";
import Result, { err, ok } from "true-myth/result";

interface MethodDefinition<
  I extends z.ZodTypeAny = z.ZodTypeAny,
  O extends z.ZodTypeAny = z.ZodTypeAny,
  C extends Record<string, unknown> = Record<string, unknown>,
> {
  input: I;
  output: O;
  context: C;
  implementation: {
    (_input: z.infer<I>, _context: C): Promise<z.infer<O>>;
  };
}

export function defineServiceMethod<
  I extends z.ZodTypeAny,
  O extends z.ZodTypeAny,
  C extends Record<string, unknown> = Record<string, unknown>,
  E extends Error = Error,
  AR extends boolean = true,
  R = AR extends true ? Result<z.infer<O>, E> : z.infer<O>,
>(params: MethodDefinition<I, O, C> & { asResult?: AR }) {
  const { asResult = true } = params;
  return async function (input: z.infer<I>): Promise<R> {
    try {
      const parsedInput = params.input.parse(input);
      const output = await params.implementation(parsedInput, params.context);
      const parsedOutput = params.output.parse(output);
      return asResult ? ok(parsedOutput) : parsedOutput;
    } catch (error) {
      if (asResult) {
        return err(error as E) as R;
      }
      throw error;
    }
  };
}

export interface Implementation<Input, Output, Context> {
  (_input: Input, _context: Context): Promise<Output>;
}
