import type { APIUser } from '../v9';

export enum PublicUserEnum {
	username,
	discriminator,
	id,
	public_flags,
	avatar,
	accent_color,
	banner,
	bio,
	bot,
	premium_since,
	premium_type,
	theme_colors,
	pronouns,
}
export type PublicUserKeys = keyof typeof PublicUserEnum;

export enum PrivateUserEnum {
	flags,
	mfa_enabled,
	email,
	phone,
	verified,
	nsfw_allowed,
	premium,
	premium_type,
	purchased_flags,
	premium_usage_flags,
	disabled,
	// settings,	// now a relation
	// locale
}
export type PrivateUserKeys = keyof typeof PrivateUserEnum | PublicUserKeys;

export const PublicUserProjection = Object.values(PublicUserEnum).filter(
	(x) => typeof x === 'string',
) as PublicUserKeys[];
export const PrivateUserProjection = [
	...PublicUserProjection,
	...Object.values(PrivateUserEnum).filter((x) => typeof x === 'string'),
] as PrivateUserKeys[];

// Private user data that should never get sent to the client
export type PublicUser = Pick<APIUser, PublicUserKeys>;

export type UserPublic = Pick<APIUser, PublicUserKeys>;
