'use server';

/**
 * @fileOverview Implements the smart appointment scheduling flow for the Trichology AI Assistant.
 *
 * - enableSmartAppointmentScheduling - A function that handles the appointment scheduling process.
 * - SmartAppointmentSchedulingInput - The input type for the enableSmartAppointmentScheduling function.
 * - SmartAppointmentSchedulingOutput - The return type for the enableSmartAppointmentScheduling function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const SmartAppointmentSchedulingInputSchema = z.object({
  patientName: z.string().describe('The name of the patient scheduling the appointment.'),
  patientPhoneNumber: z.string().describe('The phone number of the patient.'),
  preferredDate: z.string().describe('The preferred date for the appointment.'),
  preferredTime: z.string().describe('The preferred time for the appointment.'),
  reasonForAppointment: z.string().describe('The reason the patient is scheduling an appointment.'),
});
export type SmartAppointmentSchedulingInput = z.infer<typeof SmartAppointmentSchedulingInputSchema>;

const SmartAppointmentSchedulingOutputSchema = z.object({
  confirmationMessage: z.string().describe('A confirmation message for the appointment.'),
});
export type SmartAppointmentSchedulingOutput = z.infer<typeof SmartAppointmentSchedulingOutputSchema>;

export async function enableSmartAppointmentScheduling(
  input: SmartAppointmentSchedulingInput
): Promise<SmartAppointmentSchedulingOutput> {
  return smartAppointmentSchedulingFlow(input);
}

const prompt = ai.definePrompt({
  name: 'smartAppointmentSchedulingPrompt',
  input: {schema: SmartAppointmentSchedulingInputSchema},
  output: {schema: SmartAppointmentSchedulingOutputSchema},
  prompt: `You are an AI assistant that schedules appointments for a trichology clinic.

  Based on the following information, generate a confirmation message for the patient:

  Patient Name: {{{patientName}}}
  Phone Number: {{{patientPhoneNumber}}}
  Preferred Date: {{{preferredDate}}}
  Preferred Time: {{{preferredTime}}}
  Reason for Appointment: {{{reasonForAppointment}}}

  The confirmation message should:
  - Confirm the appointment details.
  - Include the date and time of the appointment.
  - Thank the patient for choosing our clinic.
  - Provide any necessary instructions for the patient.
  - Be friendly and professional.
  `,
});

const smartAppointmentSchedulingFlow = ai.defineFlow(
  {
    name: 'smartAppointmentSchedulingFlow',
    inputSchema: SmartAppointmentSchedulingInputSchema,
    outputSchema: SmartAppointmentSchedulingOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
