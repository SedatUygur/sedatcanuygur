import type { Meta, StoryFn, StoryObj } from '@storybook/react';

import { ExperienceCard } from '@/components/ExperienceCard';

const meta = {
  title: 'ExperienceCard',
  component: ExperienceCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ExperienceCard>;

export default meta;
type Story = StoryObj<typeof meta>;

const Template: StoryFn<typeof ExperienceCard> = (args) => (
  <ExperienceCard
    companyName={args.companyName}
    companyUrl={args.companyUrl}
    workType={args.workType}
    duration={args.duration}
    title={args.title}
    description={args.description}
  />
);

export const Primary: Story = {
  render: Template,
  args: {
    companyName: 'Freelance',
    companyUrl: 'https://sedatcanuygur.vercel.app/storybook/',
    workType: 'Remote',
    duration: 'Present',
    title: 'Senior Software Engineer',
    description: (
      <ul className="list-disc ps-4">
        <li>
          Architect and develop full stack solutions with an emphasis on
          scalable microservices and resilient design.
        </li>
        <li>
          Implement fault-tolerant and performance optimizations using patterns
          like circuit breakers and redundancy.
        </li>
        <li>
          Leverage cloud platforms (AWS, Google Cloud) and containerization
          (Docker, Kubernetes) to streamline deployments.
        </li>
      </ul>
    ),
  },
};
