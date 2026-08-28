'use server';
/**
 * @fileOverview A flow that provides automated post-consultation support to patients via WhatsApp.
 *
 * - providePostConsultationSupport - A function that handles the post-consultation support process.
 * - ProvidePostConsultationSupportInput - The input type for the providePostConsultationSupport function.
 * - ProvidePostConsultationSupportOutput - The return type for the providePostConsultationSupport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProvidePostConsultationSupportInputSchema = z.object({
  patientName: z.string().describe('The name of the patient.'),
  procedureName: z.string().describe('The name of the procedure performed.'),
  postProcedureInstructions: z.string().describe('Detailed instructions for post-procedure care.'),
  medicationReminder: z.string().describe('Reminder for medication, including dosage and timing.'),
  followUpAppointmentDate: z.string().describe('The date and time for the follow-up appointment.'),
  contactNumber: z.string().describe('Patient contact number for reminders and updates.')
});
export type ProvidePostConsultationSupportInput = z.infer<typeof ProvidePostConsultationSupportInputSchema>;

const ProvidePostConsultationSupportOutputSchema = z.object({
  success: z.boolean().describe('Indicates if the post-consultation support messages were successfully scheduled.'),
  message: z.string().describe('A summary of the support provided and any relevant information.')
});
export type ProvidePostConsultationSupportOutput = z.infer<typeof ProvidePostConsultationSupportOutputSchema>;

export async function providePostConsultationSupport(input: ProvidePostConsultationSupportInput): Promise<ProvidePostConsultationSupportOutput> {
  return providePostConsultationSupportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'providePostConsultationSupportPrompt',
  input: {schema: ProvidePostConsultationSupportInputSchema},
  output: {schema: ProvidePostConsultationSupportOutputSchema},
  prompt: `You are an AI assistant providing post-consultation support for patients. Your goal is to ensure the patient adheres to the doctor's recommendations and manages their treatment effectively.

  Patient Name: {{{patientName}}}
  Procedure Performed: {{{procedureName}}}

  Here are the instructions for post-procedure care:
  {{postProcedureInstructions}}

  Here is the medication reminder:
  {{medicationReminder}}

  Your follow-up appointment is scheduled for: {{{followUpAppointmentDate}}}

  Please create a message confirming these details and encouraging adherence to the provided instructions. Also, ensure reminders are sent to the patient's contact number: {{{contactNumber}}}.  Confirm the follow-up appointment details. Make sure the tone is friendly and supportive.
`,
});

const providePostConsultationSupportFlow = ai.defineFlow(
  {
    name: 'providePostConsultationSupportFlow',
    inputSchema: ProvidePostConsultationSupportInputSchema,
    outputSchema: ProvidePostConsultationSupportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);

    // Simulate scheduling messages and updating the database
    console.log(
      `Scheduling post-consultation support messages for ${input.patientName} after ${input.procedureName}.`
    );

    return {
      success: true,
      message: output?.message || 'Post-consultation support messages scheduled successfully.',
    };
  }
);
