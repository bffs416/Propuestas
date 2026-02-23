'use server';

/**
 * @fileOverview A flow that personalizes AI responses to reflect Dr. Sara's personality and medical protocols.
 *
 * - personalizeAIResponse - A function that personalizes an AI response.
 * - PersonalizeAIResponseInput - The input type for the personalizeAIResponse function.
 * - PersonalizeAIResponseOutput - The return type for the personalizeAIResponse function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizeAIResponseInputSchema = z.object({
  baseResponse: z.string().describe('The initial AI response to personalize.'),
  drSaraStyleGuide: z
    .string()
    .describe(
      'A detailed style guide that defines Dr. Sara\'s personality, communication style, and medical protocols to emulate in the AI response.'
    ),
});
export type PersonalizeAIResponseInput = z.infer<
  typeof PersonalizeAIResponseInputSchema
>;

const PersonalizeAIResponseOutputSchema = z.object({
  personalizedResponse: z.string().describe('The AI response personalized to reflect Dr. Sara\'s style and protocols.'),
});
export type PersonalizeAIResponseOutput = z.infer<
  typeof PersonalizeAIResponseOutputSchema
>;

export async function personalizeAIResponse(
  input: PersonalizeAIResponseInput
): Promise<PersonalizeAIResponseOutput> {
  return personalizeAIResponseFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizeAIResponsePrompt',
  input: {schema: PersonalizeAIResponseInputSchema},
  output: {schema: PersonalizeAIResponseOutputSchema},
  prompt: `You are an AI assistant specializing in refining AI responses to match a specific communication style and medical expertise.

You will take a base AI response and a style guide, and then rewrite the AI response so that it follows the style guide.

Base Response: {{{baseResponse}}}
Style Guide: {{{drSaraStyleGuide}}}

Personalized Response:`,
});

const personalizeAIResponseFlow = ai.defineFlow(
  {
    name: 'personalizeAIResponseFlow',
    inputSchema: PersonalizeAIResponseInputSchema,
    outputSchema: PersonalizeAIResponseOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return {
      personalizedResponse: output?.personalizedResponse ?? 'No response',
    };
  }
);
