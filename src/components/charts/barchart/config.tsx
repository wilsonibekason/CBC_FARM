import * as React from "react";
import { TypeOf, z } from "zod";
import { Pie, Bar, Bubble, Chart, ChartProps } from "react-chartjs-2";

const ConfigData = z.object({
  type: z
    .string()
    .min(200)
    .max(400)
    .regex(/^[0-9]{a-z}/),
  data: z.object({}),
  options: z.object({
    responsive: z.boolean(),
    plugins: z.object({
      legend: z.object({
        position: z.string(),
      }),
      title: z.object({
        display: z.boolean(),
        text: z.string(),
      }),
    }),
  }),
});

type TConfogData = z.infer<typeof ConfigData>;

const config: TConfogData = {
  type: "bar",
  data: {},
  options: {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Chart.js Bar Chart",
      },
    },
  },
};
