export const trustSignals = [
	'Shopify-first onboarding',
	'WhatsApp-native confirmation flows',
	'Structured response states',
	'Human handoff when automation should step aside',
	'One operational queue for the team'
] as const;

export const painPoints = [
	{
		title: 'Orders slip into fragmented follow-up',
		copy:
			'Teams bounce between checkout notifications, WhatsApp threads, and internal notes. The result is slow confirmation, uneven handling, and weak visibility.'
	},
	{
		title: 'Low-intent demand wastes operational time',
		copy:
			'Manual outreach happens too late, or not at all. Risky orders stay mixed with good demand until dispatch teams are already spending effort.'
	},
	{
		title: 'Customer responses are hard to standardize',
		copy:
			'Confirm, decline, change request, and handoff scenarios often live in free-form chat. That makes it harder to act quickly and harder to report cleanly.'
	}
] as const;

export const workflowSteps = [
	{
		step: '01',
		title: 'Open a confirmation session immediately after checkout',
		copy:
			'Each order becomes a structured post-order workflow, ready for automated outreach and tracked from the first touch.'
	},
	{
		step: '02',
		title: 'Guide the customer to a clear next action on WhatsApp',
		copy:
			'Rasil keeps the conversation focused around the real operational outcomes: confirm, decline, request an edit, or escalate to a human.'
	},
	{
		step: '03',
		title: 'Give the team one shared view of every outcome',
		copy:
			'Operators can see session state, timing, order edits, and the cases that need manual attention without reconstructing the story from chat logs.'
	}
] as const;

export const benefits = [
	{
		title: 'Fewer blind spots after checkout',
		copy: 'Track every confirmation session from first message to final outcome in a single operational timeline.'
	},
	{
		title: 'Cleaner handling of bad or low-intent orders',
		copy: 'Surface questionable demand earlier so fulfillment teams are not spending energy on uncertain orders.'
	},
	{
		title: 'Structured response states',
		copy: 'Turn customer replies into actionable outcomes instead of leaving operators to interpret raw chat threads.'
	},
	{
		title: 'Human fallback built in',
		copy: 'Escalate the right conversations when a customer needs reassurance, clarification, or a manual intervention.'
	},
	{
		title: 'Ops-ready reporting language',
		copy: 'The system is framed around queue visibility, response timing, and confirmation outcomes, not vanity chatbot metrics.'
	},
	{
		title: 'Built for commerce teams under pressure',
		copy: 'The experience favors speed, control, and trust, making it fit the day-to-day reality of WhatsApp-heavy merchants.'
	}
] as const;

export const outcomes = [
	{
		value: '1',
		label: 'shared confirmation queue',
		copy: 'Keep operators aligned around one source of truth instead of scattered chat histories.'
	},
	{
		value: '4',
		label: 'structured response paths',
		copy: 'Confirm, decline, edit request, and human handoff are handled explicitly.'
	},
	{
		value: 'Live',
		label: 'session visibility',
		copy: 'Know what is waiting, what changed, and what requires action without chasing context.'
	},
	{
		value: 'Ready',
		label: 'for platform expansion',
		copy: 'Start with Shopify now, then extend the same operational layer as your stack evolves.'
	}
] as const;

export const faqs = [
	{
		question: 'Is Rasil a chatbot platform?',
		answer:
			'No. The product is positioned as an operational control layer for post-order confirmation. Automation matters, but the goal is cleaner merchant operations and clearer decision-making.'
	},
	{
		question: 'Why focus on WhatsApp first?',
		answer:
			'For many merchants, especially in WhatsApp-heavy markets, post-order confirmation already happens there. Rasil meets that behavior instead of forcing the team into a different channel.'
	},
	{
		question: 'What customer outcomes can Rasil manage?',
		answer:
			'The product is designed around the operational outcomes that matter most: confirm, decline, edit request, or escalate to a human for intervention.'
	},
	{
		question: 'Which store platforms are supported?',
		answer:
			'Shopify is the starting point. YouCan and WooCommerce are part of the roadmap so teams can extend the same operating model across more storefronts.'
	},
	{
		question: 'Is this only for merchants in Morocco?',
		answer:
			'The initial story is informed by Moroccan commerce operations, but the product direction is intentionally broader. The workflow works anywhere merchants rely heavily on post-order messaging.'
	},
	{
		question: 'Can operators still step in manually?',
		answer:
			'Yes. Human handoff is part of the design. Rasil should help the team intervene faster, not trap them in rigid automation.'
	}
] as const;

export const integrations = [
	{
		name: 'Shopify',
		status: 'Available now',
		copy: 'Bring orders into Rasil automatically and start confirmation workflows without adding manual queue-building.'
	},
	{
		name: 'YouCan',
		status: 'Planned next',
		copy: 'Extend the same post-order control model to a storefront stack already familiar to many regional merchants.'
	},
	{
		name: 'WooCommerce',
		status: 'Planned next',
		copy: 'Support merchants that need confirmation operations without leaving the flexibility of WordPress commerce.'
	}
] as const;

export const pricingTracks = [
	{
		name: 'Launch',
		fit: 'For teams setting up their first structured confirmation workflow.',
		includes: [
			'Store integration setup',
			'Core confirmation session flows',
			'Operator handoff rules',
			'Foundational reporting views'
		]
	},
	{
		name: 'Scale',
		fit: 'For merchants with higher order volume and more team coordination.',
		includes: [
			'Advanced queue segmentation',
			'Operational workflow refinement',
			'Role-based team usage patterns',
			'Priority onboarding support'
		]
	},
	{
		name: 'Enterprise',
		fit: 'For larger operations that need custom process design and rollout support.',
		includes: [
			'Custom rollout planning',
			'Multi-team workflow mapping',
			'Deeper integration support',
			'Commercial terms tailored to volume'
		]
	}
] as const;

export const contactReasons = [
	'Book a demo tailored to your confirmation flow',
	'Assess fit for a WhatsApp-heavy operation',
	'Discuss Shopify onboarding or platform roadmap',
	'Plan rollout for a multi-operator team'
] as const;
