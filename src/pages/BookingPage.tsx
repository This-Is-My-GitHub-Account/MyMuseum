import React from 'react';
import { useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Calendar, Users, Clock } from 'lucide-react';
import { museums } from '../data/museums';

const bookingSchema = z.object({
  date: z.string(),
  time: z.string(),
  tickets: z.object({
    adult: z.number().min(0),
    child: z.number().min(0),
    senior: z.number().min(0),
  }),
  specialRequirements: z.string().optional(),
});

type BookingFormData = z.infer<typeof bookingSchema>;

export default function BookingPage() {
  const { id } = useParams();
  const museum = museums.find((m) => m.id === id);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      tickets: {
        adult: 0,
        child: 0,
        senior: 0,
      },
    },
  });

  if (!museum) {
    return <div>Museum not found</div>;
  }

  const tickets = watch('tickets');
  const totalPrice =
    tickets.adult * museum.pricing.adult +
    tickets.child * museum.pricing.child +
    tickets.senior * museum.pricing.senior;

  const onSubmit = (data: BookingFormData) => {
    console.log(data);
    // Handle booking submission
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Book Your Visit to {museum.name}</h1>

      <div className="bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Date Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Date
              </label>
              <div className="relative">
                <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="date"
                  {...register('date')}
                  className="pl-10 w-full p-2 border rounded-md"
                />
              </div>
              {errors.date && (
                <p className="text-red-500 text-sm mt-1">{errors.date.message}</p>
              )}
            </div>

            {/* Time Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Select Time
              </label>
              <div className="relative">
                <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <select
                  {...register('time')}
                  className="pl-10 w-full p-2 border rounded-md"
                >
                  <option value="">Select a time</option>
                  <option value="10:00">10:00 AM</option>
                  <option value="11:00">11:00 AM</option>
                  <option value="12:00">12:00 PM</option>
                  <option value="13:00">1:00 PM</option>
                  <option value="14:00">2:00 PM</option>
                  <option value="15:00">3:00 PM</option>
                </select>
              </div>
              {errors.time && (
                <p className="text-red-500 text-sm mt-1">{errors.time.message}</p>
              )}
            </div>
          </div>

          {/* Ticket Selection */}
          <div>
            <h3 className="text-lg font-medium mb-4">Select Tickets</h3>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">Adult</span>
                  <p className="text-sm text-gray-500">${museum.pricing.adult}</p>
                </div>
                <input
                  type="number"
                  {...register('tickets.adult', { valueAsNumber: true })}
                  min="0"
                  className="w-20 p-2 border rounded-md"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">Child</span>
                  <p className="text-sm text-gray-500">${museum.pricing.child}</p>
                </div>
                <input
                  type="number"
                  {...register('tickets.child', { valueAsNumber: true })}
                  min="0"
                  className="w-20 p-2 border rounded-md"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <span className="font-medium">Senior</span>
                  <p className="text-sm text-gray-500">${museum.pricing.senior}</p>
                </div>
                <input
                  type="number"
                  {...register('tickets.senior', { valueAsNumber: true })}
                  min="0"
                  className="w-20 p-2 border rounded-md"
                />
              </div>
            </div>
          </div>

          {/* Special Requirements */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Special Requirements
            </label>
            <textarea
              {...register('specialRequirements')}
              rows={4}
              className="w-full p-2 border rounded-md"
              placeholder="Any special requirements or requests?"
            />
          </div>

          {/* Total Price */}
          <div className="border-t pt-4">
            <div className="flex justify-between items-center mb-4">
              <span className="text-lg font-medium">Total Price</span>
              <span className="text-2xl font-bold">${totalPrice}</span>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Confirm Booking
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}