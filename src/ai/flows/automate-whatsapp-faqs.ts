'use server';

/**
 * @fileOverview A flow to automate responses to frequently asked questions via WhatsApp.
 *
 * - automateWhatsAppFAQs - A function that handles the automation of WhatsApp FAQs.
 * - AutomateWhatsAppFAQsInput - The input type for the automateWhatsAppFAQs function.
 * - AutomateWhatsAppFAQsOutput - The return type for the automateWhatsAppFAQs function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AutomateWhatsAppFAQsInputSchema = z.object({
  userQuestion: z
    .string()
    .describe('The question asked by the user via WhatsApp.'),
});

export type AutomateWhatsAppFAQsInput = z.infer<typeof AutomateWhatsAppFAQsInputSchema>;

const AutomateWhatsAppFAQsOutputSchema = z.object({
  response: z
    .string()
    .describe('The automated response to the user question.'),
});

export type AutomateWhatsAppFAQsOutput = z.infer<typeof AutomateWhatsAppFAQsOutputSchema>;

export async function automateWhatsAppFAQs(
  input: AutomateWhatsAppFAQsInput
): Promise<AutomateWhatsAppFAQsOutput> {
  return automateWhatsAppFAQsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'automateWhatsAppFAQsPrompt',
  input: {schema: AutomateWhatsAppFAQsInputSchema},
  output: {schema: AutomateWhatsAppFAQsOutputSchema},
  prompt: `You are a helpful AI assistant designed to answer frequently asked questions about a trichology clinic via WhatsApp.

  Here is the question from the user:
  {{userQuestion}}

  Please provide a concise and helpful answer.  You should answer questions about clinic hours, location and requirements before a consultation.
  If the question is not related to these topics, please respond that you cannot answer.`,
});

const automateWhatsAppFAQsFlow = ai.defineFlow(
  {
    name: 'automateWhatsAppFAQsFlow',
    inputSchema: AutomateWhatsAppFAQsInputSchema,
    outputSchema: AutomateWhatsAppFAQsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
