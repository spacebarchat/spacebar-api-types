import type { LocaleString } from '../rest/common';

/**
 * https://discord.com/developers/docs/topics/permissions#permissions-bitwise-permission-flags
 *
 * These flags are exported as `BigInt`s and NOT numbers. Wrapping them in `Number()`
 * may cause issues, try to use BigInts as much as possible or modules that can
 * replicate them in some way
 */
export const PermissionFlagsBits = {
	CreateInstantInvite: BigInt(1) << BigInt(0),
	KickMembers: BigInt(1) << BigInt(1),
	BanMembers: BigInt(1) << BigInt(2),
	Administrator: BigInt(1) << BigInt(3),
	ManageChannels: BigInt(1) << BigInt(4),
	ManageGuild: BigInt(1) << BigInt(5),
	AddReactions: BigInt(1) << BigInt(6),
	ViewAuditLog: BigInt(1) << BigInt(7),
	PrioritySpeaker: BigInt(1) << BigInt(8),
	Stream: BigInt(1) << BigInt(9),
	ViewChannel: BigInt(1) << BigInt(10),
	SendMessages: BigInt(1) << BigInt(11),
	SendTTSMessages: BigInt(1) << BigInt(12),
	ManageMessages: BigInt(1) << BigInt(13),
	EmbedLinks: BigInt(1) << BigInt(14),
	AttachFiles: BigInt(1) << BigInt(15),
	ReadMessageHistory: BigInt(1) << BigInt(16),
	MentionEveryone: BigInt(1) << BigInt(17),
	UseExternalEmojis: BigInt(1) << BigInt(18),
	ViewGuildInsights: BigInt(1) << BigInt(19),
	Connect: BigInt(1) << BigInt(20),
	Speak: BigInt(1) << BigInt(21),
	MuteMembers: BigInt(1) << BigInt(22),
	DeafenMembers: BigInt(1) << BigInt(23),
	MoveMembers: BigInt(1) << BigInt(24),
	UseVAD: BigInt(1) << BigInt(25),
	ChangeNickname: BigInt(1) << BigInt(26),
	ManageNicknames: BigInt(1) << BigInt(27),
	ManageRoles: BigInt(1) << BigInt(28),
	ManageWebhooks: BigInt(1) << BigInt(29),
	ManageEmojisAndStickers: BigInt(1) << BigInt(30),
	UseApplicationCommands: BigInt(1) << BigInt(31),
	RequestToSpeak: BigInt(1) << BigInt(32),
	ManageEvents: BigInt(1) << BigInt(33),
	ManageThreads: BigInt(1) << BigInt(34),
	CreatePublicThreads: BigInt(1) << BigInt(35),
	CreatePrivateThreads: BigInt(1) << BigInt(36),
	UseExternalStickers: BigInt(1) << BigInt(37),
	SendMessagesInThreads: BigInt(1) << BigInt(38),
	UseEmbeddedActivities: BigInt(1) << BigInt(39),
	ModerateMembers: BigInt(1) << BigInt(40),
} as const;

/**
 * Freeze the object of bits, preventing any modifications to it
 * @internal
 */
Object.freeze(PermissionFlagsBits);

export type LocalizationMap = Partial<Record<LocaleString, string | null>>;

/**
 * https://discord.com/developers/docs/topics/opcodes-and-status-codes#json
 */
export interface RESTError {
	code: number;
	message: string;
	errors?: RESTErrorData;
}

export interface RESTErrorFieldInformation {
	code: string;
	message: string;
}

export interface RESTErrorGroupWrapper {
	_errors: RESTErrorData[];
}

export type RESTErrorData = RESTErrorGroupWrapper | RESTErrorFieldInformation | { [k: string]: RESTErrorData } | string;

/**
 * https://discord.com/developers/docs/topics/rate-limits#exceeding-a-rate-limit-rate-limit-response-structure
 */
export interface RESTRateLimit {
	/**
	 * An error code for some limits
	 *
	 * {@link RESTJSONErrorCodes}
	 */
	code?: number;
	/**
	 * A value indicating if you are being globally rate limited or not
	 */
	global: boolean;
	/**
	 * A message saying you are being rate limited.
	 */
	message: string;
	/**
	 * The number of seconds to wait before submitting another request.
	 */
	retry_after: number;
}
