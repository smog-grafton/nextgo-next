import type { LucideIcon } from 'lucide-react';
import {
  BarChart3, Bot, BrainCircuit, CloudCog, Code2, CreditCard, Database,
  Globe2, Layers3, MessageSquareText, Network, Palette, Radio, Send,
  ServerCog, Smartphone, UsersRound, WalletCards,
} from 'lucide-react';

export type IconName = LucideIcon;

export type Service = {
  slug: string;
  kicker: string;
  title: string;
  blurb: string;
  longDescription: string;
  icon: IconName;
  highlights: string[];
};

export type Solution = {
  slug: string;
  title: string;
  description: string;
  longDescription: string;
  icon: IconName;
  accent: string;
  points: string[];
};

export type Product = {
  slug: string;
  title: string;
  description: string;
  features: string[];
  icon: IconName;
  accent: string;
};

export const company = {
  name: 'Next Go Tech Africa',
  shortName: 'NG',
  description: 'Technology infrastructure for communication, payments and business operations across Africa.',
};

const service = (
  slug: string, kicker: string, title: string, blurb: string, longDescription: string,
  icon: IconName, highlights: string[],
): Service => ({ slug, kicker, title, blurb, longDescription, icon, highlights });

export const services: Service[] = [
  service('web-application-development', 'Web applications', 'Web application development', 'Secure, scalable web applications built for how your business actually operates.', 'From customer portals to internal platforms, we design and build web applications that are fast, secure and built to grow with your business.', Globe2, ['Laravel, Next.js and React', 'MySQL and PostgreSQL', 'Workflows shaped around your operations']),
  service('mobile-application-development', 'Mobile applications', 'Mobile application development', 'Native and cross-platform mobile apps for iOS and Android.', 'Mobile applications designed for real usage conditions across African markets — including variable connectivity.', Smartphone, ['React Native and Flutter', 'iOS and Android delivery', 'Designed for real connectivity conditions']),
  service('custom-software-development', 'Custom software', 'Custom software development', 'Business systems designed around the way your organization works.', 'We build custom software for organizations that need systems tailored to their processes, customers and growth plans.', Code2, ['Business workflow design', 'Secure role-based access', 'Systems built to grow with you']),
  service('api-development-and-integration', 'APIs & integration', 'API development and integration', 'Connect your systems with reliable, well-designed APIs.', 'We design and integrate APIs that let your applications, partners and internal systems exchange information reliably.', Network, ['API design and documentation', 'Third-party integrations', 'Reliable data exchange']),
  service('payment-gateway-integration', 'Payments', 'Payment gateway integration', 'Accept and manage payments inside your existing platform.', 'Integrate payment gateways into your applications with transaction flows, callbacks and reconciliation designed for your operation.', CreditCard, ['Payment links and cards', 'Callbacks and transaction flows', 'Reconciliation support']),
  service('mobile-money-integration', 'Mobile money', 'Mobile money integration', 'Connect mobile money collection and disbursement to your business systems.', 'We integrate mobile money services into applications and business workflows across the markets where you operate.', WalletCards, ['Collection and disbursement', 'Business-system integration', 'Market-specific feasibility']),
  service('bulk-sms-integration', 'Messaging', 'Bulk SMS integration', 'Send transactional and campaign messages through dependable SMS infrastructure.', 'Build SMS into your systems for alerts, campaigns, OTPs and customer communication.', Send, ['Bulk SMS delivery', 'Transactional alerts', 'OTP messaging']),
  service('ussd-development', 'USSD', 'USSD development', 'Accessible USSD services for customers on every kind of phone.', 'Design USSD journeys that make essential services reachable without requiring a smartphone or data connection.', Radio, ['Accessible interaction flows', 'Menu design', 'Business-system integration']),
  service('whatsapp-business-integration', 'Messaging', 'WhatsApp Business integration', 'Bring customer communication into the channel people already use.', 'Connect WhatsApp Business to your customer support, notification and engagement workflows.', MessageSquareText, ['Customer support messaging', 'Notifications', 'Connected workflows']),
  service('voice-api-and-call-solutions', 'Voice', 'Voice API and call solutions', 'Voice capabilities for customer communication and business operations.', 'Integrate calling, voice notifications and call-management capabilities into the systems your teams use.', Radio, ['Voice notifications', 'Call workflows', 'Operational communication']),
  service('ai-assistant-development', 'AI assistants', 'AI assistant development', 'AI-powered assistants for customer support and business automation.', 'Build an assistant around your knowledge, workflows and customer needs — with clear handoff to people when judgement is required.', Bot, ['Support automation', 'Knowledge-grounded assistance', 'Human handoff']),
  service('crm-implementation', 'Customer operations', 'CRM implementation', 'Organize customer relationships in a system your team can actually use.', 'Implement CRM workflows that keep customer records, conversations and follow-up work visible to the right people.', UsersRound, ['Customer records', 'Team workflows', 'Follow-up visibility']),
  service('business-process-automation', 'Automation', 'Business process automation', 'Reduce repetitive work by connecting the systems and steps behind your operation.', 'We identify practical automation opportunities and build the workflows that make work faster and more dependable.', BrainCircuit, ['Workflow mapping', 'Practical automation', 'Connected systems']),
  service('cloud-deployment-and-hosting', 'Cloud infrastructure', 'Cloud deployment and hosting', 'Deploy and operate applications with a dependable technical foundation.', 'Set up hosting, environments and operating practices that give your applications a stable place to run and grow.', CloudCog, ['Deployment environments', 'Hosting setup', 'Operational foundations']),
  service('system-maintenance-and-technical-support', 'Support', 'System maintenance and technical support', 'Keep critical systems healthy after launch.', 'Ongoing support and maintenance for the applications your business depends on every day.', ServerCog, ['Maintenance planning', 'Technical support', 'Post-launch partnership']),
  service('uiux-design', 'UI/UX design', 'UI/UX design', 'Interfaces designed around real users, tasks and decisions.', 'Design digital experiences that make complex tasks clearer for customers and internal teams.', Palette, ['User-centred design', 'Interface systems', 'Clear task flows']),
  service('data-dashboards-and-analytics', 'Data & analytics', 'Data dashboards and analytics', 'Make operational information easier to see and act on.', 'Design dashboards and reporting views that help teams understand performance and make better decisions.', BarChart3, ['Operational dashboards', 'Reporting views', 'Decision-ready data']),
  service('enterprise-system-integration', 'Enterprise systems', 'Enterprise system integration', 'Connect the platforms your business relies on.', 'Bring separate systems into a more coherent operating environment through considered integration work.', Database, ['Platform connectivity', 'Data flow design', 'Operational coherence']),
];

export const solutions: Solution[] = [
  { slug: 'communication-solutions', title: 'Communication Solutions', description: 'Reach and support customers across the channels they already use.', longDescription: 'Messaging, voice and customer communication infrastructure tailored to the way your organisation serves its customers.', icon: MessageSquareText, accent: '#bfff00', points: ['Bulk SMS integration', 'WhatsApp Business integration', 'Voice and call solutions'] },
  { slug: 'payment-solutions', title: 'Payment Solutions', description: 'Collect, disburse and reconcile payments across African payment rails.', longDescription: 'Payment infrastructure that connects collection, disbursement and reconciliation to your existing systems.', icon: WalletCards, accent: '#83f04a', points: ['Mobile money integration', 'Payment gateway integration', 'Reconciliation tooling'] },
  { slug: 'customer-engagement', title: 'Customer Engagement', description: 'Understand and grow relationships with your customers.', longDescription: 'Connected engagement tools for customer support, relationship management and audience interaction.', icon: UsersRound, accent: '#7dd3fc', points: ['CRM implementation', 'AI assistants', 'StudioPass audience engagement'] },
  { slug: 'digital-transformation', title: 'Digital Transformation', description: 'Modernize how your business builds and operates software.', longDescription: 'Custom software, integrations and operational infrastructure for organisations evolving the way they work.', icon: Layers3, accent: '#c4b5fd', points: ['Custom software development', 'Business process automation', 'Enterprise system integration'] },
];

export const products: Product[] = [
  { slug: 'studiopass', title: 'StudioPass', description: 'The audience-engagement operating system for radio and TV stations — turning listener and viewer interaction into managed, monetized, on-air content.', icon: Radio, accent: '#bfff00', features: ['TV & radio station management', 'Show & presenter scheduling', 'Moderated message & song-request queue', 'Live chat with voice notes & attachments', 'Mobile money monetization', 'Cashflow & listener statements', 'Sponsor & brand campaign management', 'Audience challenges, quizzes & games', 'Coins & rewards system', 'Role-based access for station teams'] },
  { slug: 'messaging-platform', title: 'Messaging Platform', description: 'Reach customers through messaging infrastructure designed for modern African businesses.', icon: MessageSquareText, accent: '#7dd3fc', features: ['Bulk SMS', 'WhatsApp Business', 'OTP delivery'] },
  { slug: 'payment-solutions', title: 'Payment Solutions', description: 'Collect payments and manage transactions with African payment infrastructure.', icon: WalletCards, accent: '#83f04a', features: ['Mobile money', 'Card payments', 'Payment links', 'Reconciliation'] },
  { slug: 'ai-assistants', title: 'AI Assistants', description: 'AI-powered assistants for customer support and business automation.', icon: Bot, accent: '#c4b5fd', features: ['Customer support automation', 'Workflow assistance'] },
  { slug: 'business-software', title: 'Business Software', description: 'Custom software and business systems built for the way African businesses operate.', icon: Code2, accent: '#facc15', features: ['Custom software development', 'CRM implementation', 'System integration'] },
];

export const values = [
  ['Reliability', 'We build systems businesses can depend on, day to day.'],
  ['Africa-first thinking', 'Our products are designed around how African businesses actually operate.'],
  ['Security', 'We treat the integrity and safety of customer data as a baseline requirement, not an afterthought.'],
  ['Partnership', 'We work alongside our clients as a long-term technology partner, not a one-off vendor.'],
];

export const capabilities: [string, IconName][] = [
  ['Messaging infrastructure', MessageSquareText], ['Payment integration', WalletCards], ['AI assistants', Bot],
  ['Business software', Code2], ['Mobile applications', Smartphone], ['Cloud infrastructure', CloudCog],
  ['Data dashboards', BarChart3], ['UI/UX design', Palette], ['System integration', Network],
];
