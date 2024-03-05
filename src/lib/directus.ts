import { createDirectus, rest } from '@directus/sdk';

const DIRECTUS_URL = process.env.DIRECTUS_URL || 'https://directus.astro.deployn.de';

type Recipe = {
	status: string;
	name: string;
	image: string;
	description: string;
};

type Schema = {
	Recipe: Recipe[];
};

const directus = createDirectus<Schema>(DIRECTUS_URL).with(rest());

export default directus;
