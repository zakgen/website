export const trustSignals = [
	'Shopify-first onboarding',
	'WhatsApp order confirmation',
	'AI agent for customer questions',
	'Business profile and catalog grounding',
	'Human handoff when needed',
	'One inbox for the team'
] as const;

export const productPillars = [
	{
		title: 'Confirm orders automatically',
		copy:
			'Reach customers on WhatsApp after checkout, verify intent, and move confirmed orders forward faster.'
	},
	{
		title: 'Answer questions with an AI agent',
		copy:
			'Respond to buyer questions about products, delivery, availability, and order status without forcing the team to reply manually every time.'
	},
	{
		title: 'Use real business context',
		copy:
			'Ground replies in your business profile, product catalog, and order data so customers get answers that are useful, not generic.'
	}
] as const;

export const painPoints = [
	{
		title: 'Too many orders are still unconfirmed',
		copy:
			'Merchants lose time calling or messaging buyers manually, while fake, low-intent, or unreachable orders keep entering the fulfillment flow.'
	},
	{
		title: 'Customer questions slow down the team',
		copy:
			'Teams answer the same questions again and again about products, delivery, availability, and existing orders instead of focusing on sales and operations.'
	},
	{
		title: 'Business knowledge is disconnected from the chat',
		copy:
			'When product details, business info, and order context are not connected to the conversation, replies become inconsistent and customers lose confidence.'
	}
] as const;

export const workflowSteps = [
	{
		step: '01',
		title: 'Connect your store, products, and business profile',
		copy:
			'Rasil starts with the context your customers actually need: who you are, what you sell, and what they ordered.'
	},
	{
		step: '02',
		title: 'Confirm orders on WhatsApp',
		copy:
			'Every new order can trigger a confirmation flow that helps filter low-intent demand before it wastes fulfillment time.'
	},
	{
		step: '03',
		title: 'Let the AI agent handle buyer questions',
		copy:
			'The agent answers product and order questions using your actual business context, then hands off to a human when the conversation needs it.'
	}
] as const;

export const benefits = [
	{
		title: 'Reduce fake and low-intent orders',
		copy: 'Catch weak demand earlier so bad orders do not keep flowing into packing, dispatch, and support.'
	},
	{
		title: 'Increase confirmed order quality',
		copy: 'Get clearer buyer intent before fulfillment and operate with more confidence on what should actually move forward.'
	},
	{
		title: 'Answer customers faster',
		copy: 'Let the AI agent handle frequent product and order questions instantly instead of leaving every reply to the ops team.'
	},
	{
		title: 'Keep replies accurate',
		copy: 'Use your business profile, product data, and order context to give customers grounded answers.'
	},
	{
		title: 'Bridge sales, support, and operations',
		copy: 'One system handles confirmation, buyer questions, and human escalation instead of scattering them across tools.'
	},
	{
		title: 'Give the team one clear queue',
		copy: 'Track confirmations, unanswered questions, and escalations from one place instead of rebuilding context across chats.'
	}
] as const;

export const outcomes = [
	{
		value: '24/7',
		label: 'customer reply coverage',
		copy: 'Handle order confirmations and repeated buyer questions even when the team is not actively online.'
	},
	{
		value: '1',
		label: 'connected commerce inbox',
		copy: 'Bring order confirmation and customer questions into one operating flow.'
	},
	{
		value: '3',
		label: 'context layers',
		copy: 'Business profile, products, and orders work together to shape better answers.'
	},
	{
		value: 'Higher',
		label: 'conversion confidence',
		copy: 'Move faster on real demand and reduce friction between a buyer question and a completed order.'
	}
] as const;

export const answerSources = [
	{
		title: 'Business profile',
		copy: 'Store policies, delivery zones, payment options, working hours, and the details buyers usually ask before they trust the order.'
	},
	{
		title: 'Product catalog',
		copy: 'Product names, variants, pricing, availability, and the information a customer needs before confirming a purchase.'
	},
	{
		title: 'Order context',
		copy: 'Order status, confirmation state, edit requests, and the specific details tied to the customer conversation.'
	}
] as const;

export const faqs = [
	{
		question: 'What does Rasil actually do?',
		answer:
			'Rasil helps merchants confirm orders on WhatsApp and uses an AI agent to answer customer questions using business, product, and order context.'
	},
	{
		question: 'What kind of questions can the AI agent answer?',
		answer:
			'It is designed for common buyer questions around products, availability, delivery, payment, and order follow-up. When the answer needs a human, the conversation can be handed off.'
	},
	{
		question: 'Why focus on WhatsApp first?',
		answer:
			'Because that is already where many merchants and buyers communicate. Rasil meets the customer in the channel they already use instead of adding more friction.'
	},
	{
		question: 'Which store platforms are supported?',
		answer:
			'Shopify is the starting point. YouCan and WooCommerce are next so merchants can connect the same confirmation and customer-question flow across more storefronts.'
	},
	{
		question: 'How does Rasil improve business impact?',
		answer:
			'It helps reduce bad orders, improve order quality before fulfillment, speed up customer responses, and turn more conversations into reliable completed sales.'
	},
	{
		question: 'Can operators still step in manually?',
		answer:
			'Yes. Human handoff is built in. The AI agent should reduce repetitive work, not block the team from stepping in when needed.'
	}
] as const;

export const integrations = [
	{
		name: 'Shopify',
		status: 'Available now',
		copy: 'Sync orders and product data into Rasil so order confirmation and customer replies start from real store context.'
	},
	{
		name: 'YouCan',
		status: 'Planned next',
		copy: 'Bring the same confirmation and AI-assisted support flow to merchants already running high-volume stores on YouCan.'
	},
	{
		name: 'WooCommerce',
		status: 'Planned next',
		copy: 'Connect catalog and order context from WooCommerce so merchants can answer customers and confirm demand from one place.'
	}
] as const;

export const pricingTracks = [
	{
		name: 'Launch',
		fit: 'For merchants launching WhatsApp confirmation and AI-assisted customer replies for the first time.',
		includes: [
			'Store integration setup',
			'Order confirmation workflow',
			'AI agent setup for buyer questions',
			'Operator handoff rules'
		]
	},
	{
		name: 'Scale',
		fit: 'For merchants with higher volume and a bigger need for response speed and operational control.',
		includes: [
			'Advanced queue segmentation',
			'Catalog and business context refinement',
			'Role-based team workflows',
			'Priority onboarding support'
		]
	},
	{
		name: 'Enterprise',
		fit: 'For larger operations that need custom rollout, deeper process design, and broader integration planning.',
		includes: [
			'Custom rollout planning',
			'Multi-team workflow mapping',
			'Deeper integration support',
			'Commercial terms tailored to volume'
		]
	}
] as const;

export const contactReasons = [
	'Book a demo for order confirmation and AI replies',
	'Assess fit for a WhatsApp-heavy e-commerce business',
	'Discuss product catalog and business profile setup',
	'Plan rollout for a multi-operator team'
] as const;
